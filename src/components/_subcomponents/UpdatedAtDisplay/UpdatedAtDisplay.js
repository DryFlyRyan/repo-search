import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'Utils';

import { FooterItemContainer } from '../subcomponents.styles'
import { UpdatedDisplayText } from './UpdatedAtDisplay.styles';

const UpdatedDisplay = ({
  updated_at,
}) => {
  const formattedDate = useMemo(() => formatDate('Updated', updated_at), [updated_at])
  return (
    <FooterItemContainer>
      <UpdatedDisplayText>
        {formattedDate}
      </UpdatedDisplayText>
    </FooterItemContainer>
  );
}

UpdatedDisplay.propTypes = {
  updated_at: PropTypes.string.isRequired,
};

export default UpdatedDisplay;
