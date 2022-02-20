import styled from "styled-components";
import ActivityLogEntriesWithData from "./components/ActivityLogEntriesWithData";
import ActivityLogTitle from "./components/ui/ActivityLogTitle";
import { customScrollbar } from "./styles/scrollbar";

const ActivityLogComponentWrapper = styled.div`
  background-color: #1c1c1d;
  width: 400px;
  height: calc(100% - 72px);
  border-radius: 12px;
  border: 1px solid #252626;
  overflow: hidden;
`;

const ActivityLogEntriesWrapper = styled.div`
  height: calc(100% - 72px);
  overflow-y: auto;
  font-size: 0.9rem;
  ${customScrollbar}
`;

function ActivityLogComponent() {
  return (
    <ActivityLogComponentWrapper>
      <ActivityLogTitle />
      <ActivityLogEntriesWrapper id="scrollable">
        <ActivityLogEntriesWithData />
      </ActivityLogEntriesWrapper>
    </ActivityLogComponentWrapper>
  );
}

export default ActivityLogComponent;
