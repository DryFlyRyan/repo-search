import styled from 'styled-components';
import { languageColorSelector } from '../../../utils';

export const LanguageDisplayContainer = styled.span`
  font-size: 12px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-content: center;
`;

const ElementDefault = styled.span`
  font-size: 12px;
  line-height: 12px;

`
export const LanguageText = styled(ElementDefault)`
  margin-left: 4px;
`;

export const LanguageDot = styled(ElementDefault)`
  box-sizing: border-box;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  top: 1px;
  background-color: ${({ language }) => languageColorSelector(language)};
`;

