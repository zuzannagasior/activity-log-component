import styled from "styled-components";
import SubText from "./ui/SubText";

const ActivityLogInfoWrapper = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 64px;
  p {
    font-size: 0.9rem;
  }
`;

const NotificationIcon = styled.img`
  height: 32px;
  width: 32px;
  filter: invert(100%);
`;

function ActivityLogInfo() {
  return (
    <ActivityLogInfoWrapper>
      <NotificationIcon
        src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-bell-ui-essential-kmg-design-glyph-kmg-design.png"
        alt="notification icon"
      />
      <p>Notifications live here</p>
      <SubText>
        When someone connects one of your elements or follows a cluster, you'll
        see it here.
      </SubText>
    </ActivityLogInfoWrapper>
  );
}

export default ActivityLogInfo;
