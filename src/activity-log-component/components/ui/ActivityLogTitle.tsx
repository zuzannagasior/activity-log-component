import styled from "styled-components";

const ActivityLogTitleWrapper = styled.div`
  height: 64px;
  border-bottom: 1px solid #252626;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
`;

function ActivityLogTitle() {
  return <ActivityLogTitleWrapper>Activity</ActivityLogTitleWrapper>;
}

export default ActivityLogTitle;
