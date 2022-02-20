import styled from "styled-components";
import {
  baseActivityLogEntryListItem,
  centerContent,
} from "../../styles/shared";

const ActivityLogTitleWrapper = styled.div`
  ${baseActivityLogEntryListItem};
  ${centerContent};
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
`;

function ActivityLogTitle() {
  return <ActivityLogTitleWrapper>Activity</ActivityLogTitleWrapper>;
}

export default ActivityLogTitle;
