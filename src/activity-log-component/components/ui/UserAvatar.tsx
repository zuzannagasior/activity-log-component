import styled from "styled-components";
import {
  baseActivityLogEntryItemShape,
  ImageCoverCenter,
} from "../../styles/shared";

const UserAvatarWrapper = styled.div`
  ${baseActivityLogEntryItemShape};
  border: 1px solid #252626;
  border-radius: 50%;
  overflow: hidden;
  background-color: #252626;
`;

type UserAvatarProps = {
  imageUrl: string;
};

function UserAvatar({ imageUrl }: UserAvatarProps) {
  return (
    <UserAvatarWrapper>
      <ImageCoverCenter src={imageUrl} alt="" />
    </UserAvatarWrapper>
  );
}

export default UserAvatar;
