import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { keyframes } from 'styled-components';
import StyledProgressCircle from './styles/ProgressCircle.styled';

const ProgressCircle = ({ capsData }) => {
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const capPercent = Math.floor((capsData[0] / capsData[1]) * 100);
    setProg(160 - (160 * capPercent) / 100);
  }, []);

  const loaderKeyframe = keyframes`
    from {
      stroke-dashoffset: 160;
    }

    to {
      stroke-dashoffset: ${prog};
    }
  `;

  return (
    <StyledProgressCircle cx="25" cy="25" r="25" kf={loaderKeyframe} />
  );
};

ProgressCircle.propTypes = {
  capsData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ProgressCircle;
