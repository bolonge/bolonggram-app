import React, { useState } from "react";
import styled from "styled-components";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const fNameInput = useInput("");
  const lNameInput = useInput("");
  const emailInput = useInput(navigation.getParam("email", ""));
  const userNameInput = useInput("");
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      userName: userNameInput.value,
      email: emailInput.value,
      firstName: fNameInput.value,
      lastName: lNameInput.value
    }
  });
  const handleSignup = async () => {
    const { value: email } = emailInput;
    const { value: fName } = fNameInput;
    const { value: lName } = lNameInput;
    const { value: userName } = userNameInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (fName === "") {
      return Alert.alert("I need your Firstname");
    }
    if (userName === "") {
      return Alert.alert("I need your userName");
    }
    try {
      setLoading(true);
      const {
        data: { createAccount }
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account created", "Log in now");
        navigation.navigate("Login", { email });
      }
    } catch (e) {
      Alert.alert("UserName taken", "Log in instead");
      navigation.navigate("Login", { email });
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...fNameInput}
          placeholder="First name"
          autoCorrect={false}
          autoCapitaliz="words"
        />
        <AuthInput
          {...lNameInput}
          placeholder="Last name"
          autoCapitaliz="words"
        />
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
        />
        <AuthInput
          {...userNameInput}
          placeholder="userName"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleSignup} text={"Sign up"} />
      </View>
    </TouchableWithoutFeedback>
  );
};
