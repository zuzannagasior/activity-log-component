import styled, { css } from "styled-components";

export const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const baseContentCenteredWrapper = css`
  width: 100%;
  height: 100%;
  ${centerContent}
`;

export const baseActivityLogEntryListItem = css`
  height: 72px;
  border-bottom: 1px solid #252626;
`;

export const baseButton = css`
  background-color: #787779;
  border: none;
  cursor: pointer;
  color: #e9e8e7;
  transition: background-color 0.4s;

  &:hover,
  &:focus {
    background-color: #8f8e90;
  }
`;

export const baseActivityLogEntryItemShape = css`
  width: 40px;
  height: 40px;
  border-radius: 6px;
`;

export const ImageCoverCenter = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
