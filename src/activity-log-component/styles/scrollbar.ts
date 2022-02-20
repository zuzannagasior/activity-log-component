import { css } from "styled-components";

export const customScrollbar = css`
  &::-webkit-scrollbar {
    width: 10px;
    position: absolute;
  }

  &::-webkit-scrollbar-track {
    background: #262627;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #787779;
    border-radius: 20px;
    border: none;
  }
`;
