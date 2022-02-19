import styled from "styled-components";
import ActivityLogEntriesWithData from "./components/ActivityLogEntriesWithData";
import ActivityLogTitle from "./components/ui/ActivityLogTitle";

const ActivityLogComponentWrapper = styled.div`
  background-color: #1c1c1d;
  width: 400px;
  height: calc(100% - 80px);
  border-radius: 12px;
  border: 1px solid #252626;
  overflow: hidden;
`;

function ActivityLogComponent() {
  return (
    <ActivityLogComponentWrapper>
      <ActivityLogTitle />
      <ActivityLogEntriesWithData />
    </ActivityLogComponentWrapper>
  );
}

export default ActivityLogComponent;
