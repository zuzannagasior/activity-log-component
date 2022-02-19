import styled from "styled-components";
import { ActivityLogEntry as ActivityLogEntryModel } from "../models";
import UserAvatar from "./ui/UserAvatar";
import { useActivityLogEntryContent } from "../hooks/useActivityLogEntryContent";
import ActivityLogEntryTime from "./ui/ActivityLogEntryTime";

type ActivityLogEntryProps = ActivityLogEntryModel;

const ActivityLogEntryWrapper = styled.li`
  height: 72px;
  border-bottom: 1px solid #252626;
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityLogEntryLink = styled.a`
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  color: #787779;
  text-decoration: none;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #e9e8e7;
  transition: background-color 0.4s;
  &:hover,
  &:focus {
    background-color: #262627;
  }
`;

const ColumnWrapper = styled.div`
  padding: 0 8px;
  overflow: hidden;
  flex-grow: ${(props: { textColumn?: boolean }) => (props.textColumn ? 1 : 0)};
  flex-shrink: ${(props: { textColumn?: boolean }) =>
    props.textColumn ? 1 : 0};
`;

function ActivityLogEntry(entry: ActivityLogEntryProps) {
  const { textColumn, lastColumn } = useActivityLogEntryContent(entry);

  return (
    <ActivityLogEntryWrapper>
      <ActivityLogEntryLink href="#">
        <ColumnWrapper>
          <UserAvatar imageUrl={entry.user.avatar} />
        </ColumnWrapper>
        <ColumnWrapper textColumn>
          {entry.user.username}&nbsp;{textColumn}&nbsp;
          <ActivityLogEntryTime date={entry.date} />
        </ColumnWrapper>
        <ColumnWrapper>{lastColumn}</ColumnWrapper>
      </ActivityLogEntryLink>
    </ActivityLogEntryWrapper>
  );
}

export default ActivityLogEntry;
