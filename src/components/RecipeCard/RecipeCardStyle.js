import styled from "styled-components";

export const Card = styled.div`
  width: 260px;
  background: #f3ead7;
  border-radius: 20px;
  padding: 15px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  ${({ difficulty }) =>
    difficulty === 3 &&
    `
    border: 2px solid #ff4d4d;
    transform: scale(1.05);
  `}

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 15px;
`;

export const Title = styled.h3`
  margin: 12px 0;
  font-size: 16px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;