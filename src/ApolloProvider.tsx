import { ReactNode } from "react";
import {
  ApolloProvider as ApolloProviderClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://activity-log-mock.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

interface ApolloProviderProps {
  children: ReactNode;
}

function ApolloProvider({ children }: ApolloProviderProps) {
  return (
    <ApolloProviderClient client={client}>{children}</ApolloProviderClient>
  );
}

export default ApolloProvider;
