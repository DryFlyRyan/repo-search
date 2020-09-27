import styled from 'styled-components';

export const PageContainer = styled.div`
  position: absolute;
  top: 90px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    position: initial;
    height: 100%;
    min-height: 100%;
    top: initial;
    max-width: 100vw;
  }
`;

export const Divider = styled.hr`
  color: rgb(88, 96, 105);
  width: 80%;
  max-width: 80%;
  margin: 20px auto;
  font-weight: 600;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const RepoDetailsSection = styled.section`
  flex: 0 0 auto;
  border: 1px solid black;
  margin: 0 10px;
  min-height: 100%;
  min-width: 48%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    flex: 1 1 auto;
    margin: 0;
  }
`;
