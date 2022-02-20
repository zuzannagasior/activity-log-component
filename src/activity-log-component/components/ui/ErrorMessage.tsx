import styled from "styled-components";
import { baseContentCenteredWrapper } from "../../styles/shared";
import SubText from "./SubText";

const ErrorWrapper = styled.div`
  ${baseContentCenteredWrapper}
  padding: 8px;
`;

function ErrorMessage() {
  return (
    <ErrorWrapper>
      <SubText>Something went wrong :(</SubText>
    </ErrorWrapper>
  );
}

export default ErrorMessage;
