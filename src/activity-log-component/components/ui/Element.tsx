import styled from "styled-components";

const ElementWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #252626;
  overflow: hidden;
  background-color: #252626;
`;

const ElementImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

type ElementProps = {
  imageUrl: string;
};

function Element({ imageUrl }: ElementProps) {
  return (
    <ElementWrapper>
      <ElementImage src={imageUrl} alt="" />
    </ElementWrapper>
  );
}

export default Element;
