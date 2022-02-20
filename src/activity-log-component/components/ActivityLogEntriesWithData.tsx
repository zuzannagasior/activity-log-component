import { useQuery } from "@apollo/client";
import {
  ActivityLogData,
  ActivityLogEntryAddedData,
  ActivityLogVars,
} from "../models";
import {
  ACTIVITY_LOG,
  ACTIVITY_LOG_ENTRY_SUBSCRIPTION,
} from "../query-and-subscription";
import ActivityLogEntries from "./ActivityLogEntries";
import ErrorMessage from "./ui/ErrorMessage";
import Loader from "./ui/Loader";

function ActivityLogEntriesWithData() {
  const { loading, error, data, fetchMore, subscribeToMore } = useQuery<
    ActivityLogData,
    ActivityLogVars
  >(ACTIVITY_LOG, {
    variables: { first: 24 },
  });

  console.log("loading ", loading, "error ", error, "data ", data);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  return (
    <ActivityLogEntries
      edges={(data && data.activityLog.edges) || []}
      hasMore={(data && data.activityLog.pageInfo.hasNextPage) || false}
      onLoadMore={() => {
        if (data && data.activityLog.pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              first: 24,
              after: data.activityLog.pageInfo.endCursor,
            },
          });
        }
      }}
      subscribeToNewActivityLogEntries={() =>
        subscribeToMore<ActivityLogEntryAddedData>({
          document: ACTIVITY_LOG_ENTRY_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev;
            const prevEdges = prev.activityLog.edges;

            const newActivityLogEdge =
              subscriptionData.data.activityLogEntryAdded;
            const newEndCursor = prevEdges[prevEdges.length - 1].cursor;
            const newEdges = [newActivityLogEdge, ...prevEdges];
            return {
              activityLog: {
                edges:
                  prevEdges.length < 24
                    ? newEdges
                    : newEdges.slice(0, prevEdges.length),
                pageInfo: {
                  ...prev.activityLog.pageInfo,
                  endCursor: newEndCursor,
                  hasNextPage: true,
                },
              },
            };
          },
        })
      }
    />
  );
}

export default ActivityLogEntriesWithData;
