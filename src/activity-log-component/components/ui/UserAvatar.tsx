import styled from "styled-components";

const UserAvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #252626;
  border-radius: 50%;
  overflow: hidden;
  background-color: #252626;
`;

const UserAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

type UserAvatarProps = {
  imageUrl: string;
};

function UserAvatar({ imageUrl }: UserAvatarProps) {
  return (
    <UserAvatarWrapper>
      <UserAvatarImage src={imageUrl} alt="" />
    </UserAvatarWrapper>
  );
}

export default UserAvatar;
