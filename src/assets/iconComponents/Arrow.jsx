import PropTypes from "prop-types";
import { memo } from "react";

const ArrowDropdown = memo(({ color = "#241917" }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.37503 2.37502L1.62503 2.37502C1.55669 2.37524 1.4897 2.39409 1.43128 2.42954C1.37285 2.46499 1.3252 2.51571 1.29346 2.57623C1.26171 2.63675 1.24707 2.70478 1.25112 2.773C1.25516 2.84123 1.27773 2.90705 1.3164 2.9634L4.6914 7.8384C4.83128 8.04052 5.16803 8.04052 5.30828 7.8384L8.68328 2.9634C8.72235 2.90717 8.74525 2.84131 8.74952 2.77298C8.75378 2.70464 8.73924 2.63644 8.70746 2.5758C8.67569 2.51515 8.6279 2.46437 8.56929 2.42897C8.51068 2.39357 8.4435 2.37492 8.37503 2.37502Z"
        fill={color}
      />
    </svg>
  );
});
ArrowDropdown.propTypes = {
  color: PropTypes.string,
};
ArrowDropdown.displayName = "ArrowDropdown";

export default ArrowDropdown;
