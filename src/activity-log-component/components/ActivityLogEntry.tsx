import styled from "styled-components";
import { ActivityLogEntry as ActivityLogEntryModel } from "../models";

type ActivityLogEntryProps = ActivityLogEntryModel;

const ActivityLogEntryWrapper = styled.li`
  height: 64px;
  border-bottom: 1px solid #252626;
  transition: background-color 0.4s;
  &:hover {
    background-color: #262627;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityLogEntryLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;

function ActivityLogEntry(entry: ActivityLogEntryProps) {
  return (
    <ActivityLogEntryWrapper>
      <ActivityLogEntryLink href="#">{entry.id}</ActivityLogEntryLink>
    </ActivityLogEntryWrapper>
  );
}

export default ActivityLogEntry;
