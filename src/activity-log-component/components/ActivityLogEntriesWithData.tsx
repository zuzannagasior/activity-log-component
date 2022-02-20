import { useQuery } from "@apollo/client";
import { ACTIVITY_LOG } from "../queries";
import ActivityLogEntries from "./ActivityLogEntries";
import ErrorMessage from "./ui/ErrorMessage";
import Loader from "./ui/Loader";

function ActivityLogEntriesWithData() {
  const { loading, error, data, fetchMore } = useQuery(ACTIVITY_LOG, {
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
      edges={data.activityLog.edges}
      hasMore={data.activityLog.pageInfo.hasNextPage}
      onLoadMore={() => {
        if (data.activityLog.pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              first: 24,
              after: data.activityLog.pageInfo.endCursor,
            },
          });
        }
      }}
    />
  );
}

export default ActivityLogEntriesWithData;
