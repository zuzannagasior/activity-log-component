import styled from "styled-components";
import {
  baseButton,
  centerContent,
  baseActivityLogEntryItemShape,
} from "../../styles/shared";

const ActionBtn = styled.button`
  ${baseButton};
  ${centerContent};
  ${baseActivityLogEntryItemShape};
  padding: 0px;

  img {
    width: 0.8rem;
    height: auto;
    filter: invert(100%);
  }
`;

function ActionButton() {
  return (
    <ActionBtn onClick={() => alert("on click action button")}>
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"
        alt=""
      />
    </ActionBtn>
  );
}

export default ActionButton;
