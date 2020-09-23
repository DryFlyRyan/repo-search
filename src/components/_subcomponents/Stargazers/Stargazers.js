import React from 'react';
import PropTypes from 'prop-types';

import {
  StargazerContainer,
  StargazerLink,
  StargazerIcon,
} from './Stargazers.styles';

const Stargazers = ({
  stargazers_count,
}) => (
  <StargazerContainer>
    <StargazerLink
      href="#"
    >
      <StargazerIcon>
        ☆
      </StargazerIcon>
      {stargazers_count}
    </StargazerLink>
  </StargazerContainer>
);

Stargazers.propTypes = {
  stargazers_count: PropTypes.number.isRequired,
}

export default Stargazers;