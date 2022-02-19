import styled from "styled-components";

const ActionBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #787779;
  border-radius: 6px;
  padding: 0px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;

  img {
    width: 0.8rem;
    height: auto;
    filter: invert(100%);
  }

  &:hover {
    background-color: #8f8e90;
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
