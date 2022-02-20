import styled from "styled-components";
import { baseButton } from "../../styles/shared";

const FollowBtn = styled.button`
  ${baseButton};
  border-radius: 16px;
  padding: 8px 16px;
`;

function FollowButton() {
  return (
    <FollowBtn onClick={() => alert("on click follow button")}>
      Follow
    </FollowBtn>
  );
}

export default FollowButton;
