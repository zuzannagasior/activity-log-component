import styled from "styled-components";
import { ActivityLogEntry as ActivityLogEntryModel } from "../../models";
import UserAvatar from "../ui/UserAvatar";
import { useActivityLogEntryContent } from "./useActivityLogEntryContent";
import TimeSinceAdding from "./TimeSinceAdding";
import { motion } from "framer-motion";
import { baseActivityLogEntryListItem } from "../../styles/shared";

type ActivityLogEntryProps = ActivityLogEntryModel;

const ActivityLogEntryWrapper = styled(motion.li)`
  ${baseActivityLogEntryListItem}
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
  background-color: #1c1c1d;
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
    <ActivityLogEntryWrapper layout>
      <ActivityLogEntryLink href="#">
        <ColumnWrapper>
          <UserAvatar imageUrl={entry.user.avatar} />
        </ColumnWrapper>
        <ColumnWrapper textColumn>
          {entry.user.username}&nbsp;{textColumn}&nbsp;
          <TimeSinceAdding date={entry.date} />
        </ColumnWrapper>
        <ColumnWrapper>{lastColumn}</ColumnWrapper>
      </ActivityLogEntryLink>
    </ActivityLogEntryWrapper>
  );
}

export default ActivityLogEntry;
