import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  formatDistance,
  differenceInCalendarDays,
  parseJSON,
  getYear,
} from 'date-fns'

import { FooterItemContainer } from '../subcomponents.styles'
import { UpdatedDisplayText } from './UpdatedAtDisplay.styles';

const formatDate = (updated_at) => {
  const today = new Date();
  const updatedDate = parseJSON(updated_at)
  
  if (differenceInCalendarDays(today, updatedDate) <= 30) {
    return `Updated ${formatDistance(updatedDate, today, { addSuffix: true })}`;
  } else if (getYear(today) === getYear(updatedDate)) {
    return `Updated on ${format(updatedDate, 'MMM co')}`;
  } else {
    return `Updated on ${format(updatedDate, "MMM co',' yyyy")}`;
  }
}

const UpdatedDisplay = ({
  updated_at,
}) => {
  const formattedDate = useMemo(() => formatDate(updated_at), [updated_at])
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
