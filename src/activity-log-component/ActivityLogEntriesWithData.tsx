import { useQuery } from "@apollo/client";
import {
  ActivityLogData,
  ActivityLogEntryAddedData,
  ActivityLogVars,
} from "./models";
import {
  ACTIVITY_LOG,
  ACTIVITY_LOG_ENTRY_SUBSCRIPTION,
} from "./query-and-subscription";
import ActivityLogEntries from "./components/ActivityLogEntries";
import ErrorMessage from "./components/ui/ErrorMessage";
import Loader from "./components/ui/Loader";

function ActivityLogEntriesWithData() {
  const { loading, error, data, fetchMore, subscribeToMore } = useQuery<
    ActivityLogData,
    ActivityLogVars
  >(ACTIVITY_LOG, {
    variables: { first: 24 },
  });

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
            const newEdges = [newActivityLogEdge, ...prevEdges];

            if (prevEdges.length < 24) {
              return {
                activityLog: {
                  ...prev.activityLog,
                  edges: newEdges,
                },
              };
            }

            return {
              activityLog: {
                edges: newEdges.slice(0, prevEdges.length),
                pageInfo: {
                  ...prev.activityLog.pageInfo,
                  endCursor: prevEdges[prevEdges.length - 1].cursor,
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
