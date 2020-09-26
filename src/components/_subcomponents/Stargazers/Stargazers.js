import React from 'react';
import PropTypes from 'prop-types';

import { truncateNumber } from 'Utils';
import { FooterItemContainer } from '../subcomponents.styles'

import {
  StargazerLink,
  StargazerIcon,
} from './Stargazers.styles';

const Stargazers = ({
  stargazers_count,
}) => (
  <FooterItemContainer>
    <StargazerLink
      href="#"
    >
      <StargazerIcon>
        ☆
      </StargazerIcon>
      {truncateNumber(stargazers_count)}
    </StargazerLink>
  </FooterItemContainer>
);

Stargazers.propTypes = {
  stargazers_count: PropTypes.number.isRequired,
}

export default Stargazers;