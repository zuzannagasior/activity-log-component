import ActivityLogComponent from "./activity-log-component/ActivityLogComponent";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #070707;
  width: 100%;
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <ActivityLogComponent />
    </AppWrapper>
  );
}

export default App;
