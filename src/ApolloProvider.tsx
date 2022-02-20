import { ReactNode } from "react";
import {
  ApolloProvider as ApolloProviderClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "https://activity-log-mock.herokuapp.com/graphql",
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
