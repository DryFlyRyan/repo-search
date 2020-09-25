import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResultCardContainer = styled.li`
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: stretch;
  border-top: 1px solid rgb(225, 228, 232);
  padding: 24px 0;
  text-align: left;
  :last-child {
    border-bottom: 1px solid rgb(225, 228, 232);
  }
`;

export const IconContainer = styled.div`
  flex: 0 0 auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled(Link)`
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  display: block;
  font-size: 14px;
  line-height: 21px;
  overflow-wrap: break-word;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;
`;

export const LineContainer = styled.div`

`;

export const Footer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
`;

