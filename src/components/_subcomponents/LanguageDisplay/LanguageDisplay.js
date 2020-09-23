import React from 'react';
import PropTypes from 'prop-types';

import {
  LanguageDisplayContainer,
  LanguageDot,
  LanguageText,
} from './LanguageDisplay.styles';

const LanguageDisplay = ({ language }) => (
  <LanguageDisplayContainer>
    <LanguageDot language={language} />
    <LanguageText>{language} </LanguageText>
  </LanguageDisplayContainer>
)

LanguageDisplay.propTypes = {
  language: PropTypes.string.isRequired,
}

export default LanguageDisplay;