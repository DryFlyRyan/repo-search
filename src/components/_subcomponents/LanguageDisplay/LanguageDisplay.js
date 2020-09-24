import React from 'react';
import PropTypes from 'prop-types';

import { FooterItemContainer } from '../subcomponents.styles'


import {
  LanguageDot,
  LanguageText,
} from './LanguageDisplay.styles';

const LanguageDisplay = ({ language }) => (
  <FooterItemContainer>
    <LanguageDot language={language} />
    <LanguageText>{language} </LanguageText>
  </FooterItemContainer>
)

LanguageDisplay.propTypes = {
  language: PropTypes.string.isRequired,
}

export default LanguageDisplay;