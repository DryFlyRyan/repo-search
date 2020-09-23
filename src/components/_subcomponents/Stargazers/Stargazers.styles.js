import styled from 'styled-components';

export const StargazerContainer = styled.span`
    font-size: 12px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    margin-right: 16px;
`;

export const StargazerLink = styled.a`
  font-size: 12px;
  line-height: 12px;
  color: initial;
  text-decoration-line: none;
  :hover {
    color: rgb(3, 102, 214);
    text-decoration-line: none;
  }
`;

export const StargazerIcon = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 3px;
`;
