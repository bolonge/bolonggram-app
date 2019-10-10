const options = {
  uri: "https://bolonggram-backend.herokuapp.com/",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
};

export default options;
