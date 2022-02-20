import styled from "styled-components";
import { baseActivityLogEntryItemShape, ImageCoverCenter } from "../../styles/shared";

const ElementWrapper = styled.div`
  ${baseActivityLogEntryItemShape};
  border: 1px solid #252626;
  overflow: hidden;
  background-color: #252626;
`;

type ElementProps = {
  imageUrl: string;
};

function Element({ imageUrl }: ElementProps) {
  return (
    <ElementWrapper>
      <ImageCoverCenter src={imageUrl} alt="" />
    </ElementWrapper>
  );
}

export default Element;
