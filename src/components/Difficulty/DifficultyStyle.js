import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 12px; /* ← ось нормальний gap */
`;

export const Level = styled.span`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  background: #e0e0e0;
  color: #555;
  transition: 0.2s;

  ${({ active }) =>
    active &&
    `
    background: #ff6b6b;
    color: white;
    transform: scale(1.1);
  `}
`;


///asdasdasdasd///