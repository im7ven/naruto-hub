import { useState } from "react";
import styled from "styled-components";

const ExpandableText = styled.p`
  font-family: "Gabarito", sans-serif;
  font-size: 1.7rem;
  line-height: 2.4rem;
  margin: 0;
`;

const ExpandableBtn = styled.button`
  padding: 0.3rem 1.5rem;
  margin-left: 0.8rem;
  font-size: 1.2rem;
  border-radius: 8px;
  text-transform: uppercase;
  color: #fff;
  outline: 0;
  border: 1px solid #ff3923;
  background: linear-gradient(
    99deg,
    rgba(254, 48, 48, 1) 13%,
    rgba(22, 22, 22, 1) 100%
  );
  transition: background 0.3s;

  &:hover {
    background: 0;
  }
`;

interface Props {
  maxChars: number;
  decription: string;
}

const Expandable = ({ maxChars, decription }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = isExpanded ? decription : decription.substring(0, maxChars);
  return (
    <>
      <ExpandableText>
        {text}...
        <ExpandableBtn onClick={() => setIsExpanded(!isExpanded)}>
          {" "}
          {isExpanded ? "See Less" : "See more"}
        </ExpandableBtn>
      </ExpandableText>
    </>
  );
};

export default Expandable;
