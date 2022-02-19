import styled from "styled-components";
import { PaginatedActivityLogEntry } from "../models";
import ActivityLogEntry from "./ActivityLogEntry";
import ActivityLogInfo from "./ActivityLogInfo";

const ActivityLogEntriesWrapper = styled.div`
  height: calc(100% - 64px);
  overflow-y: scroll;
`;
const ActivityLogEntriesUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

type ActivityLogEntriesProps = {
  data: PaginatedActivityLogEntry;
};

function ActivityLogEntries({ data }: ActivityLogEntriesProps) {
  const entries = data.edges;
  console.log("entries ", entries);
  if (entries.length === 0) {
    return <ActivityLogInfo />;
  }
  return (
    <ActivityLogEntriesWrapper>
      <ActivityLogEntriesUl>
        {entries.map((entry) => (
          <ActivityLogEntry key={entry.cursor} {...entry.node} />
        ))}
      </ActivityLogEntriesUl>
    </ActivityLogEntriesWrapper>
  );
}

export default ActivityLogEntries;
