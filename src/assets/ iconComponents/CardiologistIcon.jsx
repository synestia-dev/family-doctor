import { memo } from "react";
import PropTypes from "prop-types";

const CardiologistIcon = memo(({ color = "#EE2922" }) => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.97998 13.0009H6.77998L8.69998 9.72815L12.54 16.2736L14.46 13.0009H17.34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.512 8.63637C1.5 8.4591 1.5 8.26819 1.5 8.09092C1.5 6.45167 1.99979 4.86306 2.91435 3.59536C3.8289 2.32766 5.10171 1.45919 6.51624 1.13771C7.93076 0.816229 9.39961 1.06159 10.6729 1.83206C11.9461 2.60252 12.9452 3.8505 13.5 5.36365C14.0548 3.8505 15.0539 2.60252 16.3271 1.83206C17.6004 1.06159 19.0692 0.816229 20.4838 1.13771C21.8983 1.45919 23.1711 2.32766 24.0857 3.59536C25.0002 4.86306 25.5 6.45167 25.5 8.09092C25.5 17.3636 13.5 25 13.5 25C13.5 25 8.712 21.9455 5.184 17.3636"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
CardiologistIcon.propTypes = {
  color: PropTypes.string,
};

CardiologistIcon.displayName = "CardiologistIcon";
export default CardiologistIcon;
