import styled from "styled-components";

const FollowBtn = styled.button`
  background-color: #787779;
  border-radius: 16px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  color: #e9e8e7;
  transition: background-color 0.4s;

  &:hover, &:focus {
    background-color: #8f8e90;
  }
`;

function FollowButton() {
  return <FollowBtn onClick={() => alert("on click follow button")}>Follow</FollowBtn>;
}

export default FollowButton;
