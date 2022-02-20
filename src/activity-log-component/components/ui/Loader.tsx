import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";
import { baseContentCenteredWrapper } from "../../styles/shared";

const LoaderWrapper = styled.div`
  ${baseContentCenteredWrapper}
  padding: 8px;
`;

function Loader() {
  return (
    <LoaderWrapper>
      <TailSpin height="32" width="32" color="#787779" ariaLabel="loading" />
    </LoaderWrapper>
  );
}

export default Loader;
