import { memo } from "react";
import PropTypes from "prop-types";

const Geo = memo(({ color = "#FFFFFF" }) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 8.5C16 14.3333 8.5 19.3333 8.5 19.3333C8.5 19.3333 1 14.3333 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.49994 11.001C9.88065 11.001 10.9999 9.88169 10.9999 8.50098C10.9999 7.12026 9.88065 6.00098 8.49994 6.00098C7.11923 6.00098 5.99994 7.12026 5.99994 8.50098C5.99994 9.88169 7.11923 11.001 8.49994 11.001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
Geo.propTypes = {
  color: PropTypes.string,
};

Geo.displayName = "Geo";
export default Geo;
