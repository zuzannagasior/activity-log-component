import { useQuery } from "@apollo/client";
import { ACTIVITY_LOG } from "../queries";
import ActivityLogEntries from "./ActivityLogEntries";

function ActivityLogEntriesWithData() {
  const { loading, error, data } = useQuery(ACTIVITY_LOG, {
    variables: { first: 24 },
  });

  console.log("loading ", loading, "error ", error, "data ", data);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error!</div>;
  }

  return <ActivityLogEntries data={data.activityLog} />;
}

export default ActivityLogEntriesWithData;
