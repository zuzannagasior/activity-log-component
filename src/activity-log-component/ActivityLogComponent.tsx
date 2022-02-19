import ActivityLogEntriesWithData from "./components/ActivityLogEntriesWithData";
import ActivityLogTitle from "./components/ui/ActivityLogTitle";

function ActivityLogComponent() {
  return (
    <div>
      <ActivityLogTitle />
      <ActivityLogEntriesWithData />
    </div>
  );
}

export default ActivityLogComponent;
