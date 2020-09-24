import styled from 'styled-components';
import { languageColorSelector } from '../../../utils';

export const LanguageText = styled.p`
  margin-left: 4px;
`;

export const LanguageDot = styled.span`
  box-sizing: border-box;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  top: 1px;
  background-color: ${({ language }) => languageColorSelector(language)};
`;

