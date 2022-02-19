import { useQuery } from "@apollo/client";
import { ACTIVITY_LOG } from "../queries";

function ActivityLogEntriesWithData() {
  const { loading, error, data } = useQuery(ACTIVITY_LOG, {
    variables: { first: 24 },
  });

  console.log("loading ", loading, "error ", error, "data ", data);

  return <div></div>;
}

export default ActivityLogEntriesWithData;
