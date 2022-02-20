import { ReactNode } from "react";
import {
  ApolloProvider as ApolloProviderClient,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
} from "@apollo/client";
import {
  getMainDefinition,
  relayStylePagination,
} from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: "https://activity-log-mock.herokuapp.com/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss://activity-log-mock.herokuapp.com/graphql",
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          activityLog: relayStylePagination(),
        },
      },
    },
  }),
});

type ApolloProviderProps = {
  children: ReactNode;
};

function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <ApolloProviderClient client={client}>{children}</ApolloProviderClient>
  );
}

export default ApolloProvider;
