import { memo } from "react";
import PropTypes from "prop-types";

const HospitalIcon = memo(({ color = "#EE2922" }) => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 24.5H25M6.33333 24.5V5.83333C6.33333 5.21449 6.57917 4.621 7.01675 4.18342C7.45434 3.74583 8.04783 3.5 8.66667 3.5H20.3333C20.9522 3.5 21.5457 3.74583 21.9832 4.18342C22.4208 4.621 22.6667 5.21449 22.6667 5.83333V24.5"
        stroke="#EE2922"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 24.5V19.8334C11 19.2145 11.2458 18.621 11.6834 18.1834C12.121 17.7459 12.7145 17.5 13.3333 17.5H15.6667C16.2855 17.5 16.879 17.7459 17.3166 18.1834C17.7542 18.621 18 19.2145 18 19.8334V24.5M12.1667 10.5H16.8333M14.5 8.16669V12.8334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
HospitalIcon.propTypes = {
  color: PropTypes.string,
};

HospitalIcon.displayName = "HospitalIcon";
export default HospitalIcon;
