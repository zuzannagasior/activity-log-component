import { gql } from "@apollo/client";

export const ACTIVITY_LOG = gql`
  query ($first: Int, $after: String) {
    activityLog(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          date
          user {
            id
            username
            avatar
          }
          __typename
          ... on CollaborationActivityLogEntry {
            cluster {
              id
              name
              coverImage
            }
          }
          ... on ConnectionActivityLogEntry {
            count
            element {
              id
              image
            }
          }
          ... on FollowActivityLogEntry {
            count
            cluster {
              id
              name
              coverImage
            }
          }
          ... on NewClusterActivityLogEntry {
            cluster {
              id
              name
              coverImage
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
