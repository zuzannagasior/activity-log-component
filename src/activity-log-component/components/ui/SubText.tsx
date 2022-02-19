import { ReactNode } from "react";
import styled from "styled-components";

const SubTextWrapper = styled.span`
  color: #787779;
  font-size: 0.9rem;
  line-height: 1.4rem;
`;

type SubTextProps = {
  children: ReactNode;
};

function SubText({ children }: SubTextProps) {
  return <SubTextWrapper>{children}</SubTextWrapper>;
}

export default SubText;
