import styled from 'styled-components';

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CountText = styled.h3`
  font-size: 20px;
`;

export const StyledResultListContainer = styled.ul`
  box-sizing: padding-box;
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding-inline-start: 20px;
    padding-inline-end: 20px;
    width: 100%;
    max-width: 100%;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`

`;