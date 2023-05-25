import { memo } from "react";
import PropTypes from "prop-types";

const LabaratoryIcon = memo(({ color = "#EE2922" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_243_1120)">
        <path
          d="M22.671 19.68L15.319 8.369V2.962H17.027V0H6.59801V2.965H8.32001V8.372L0.954013 19.68C0.678588 20.1012 0.522132 20.589 0.501197 21.0919C0.480261 21.5947 0.595625 22.0938 0.835083 22.5365C1.07454 22.9791 1.42919 23.3488 1.86151 23.6064C2.29383 23.8641 2.78775 24 3.29101 24H20.325C20.8292 23.9992 21.3238 23.8623 21.7566 23.6037C22.1894 23.3452 22.5444 22.9745 22.7841 22.531C23.0237 22.0874 23.1392 21.5873 23.1182 21.0836C23.0973 20.5799 22.9407 20.0911 22.665 19.669L22.672 19.68H22.671ZM21.766 21.982C21.6259 22.2402 21.4187 22.4557 21.1664 22.606C20.914 22.7563 20.6257 22.8358 20.332 22.836H3.29101C2.99599 22.8364 2.70635 22.757 2.45279 22.6062C2.19923 22.4554 1.99121 22.2388 1.85077 21.9793C1.71033 21.7199 1.64271 21.4272 1.65508 21.1325C1.66744 20.8377 1.75934 20.5518 1.92101 20.305L1.91701 20.311L9.46601 8.711V2.96H14.152V8.714L21.693 20.314C21.863 20.565 21.965 20.875 21.965 21.209C21.965 21.494 21.891 21.762 21.761 21.994L21.765 21.986L21.766 21.982Z"
          fill={color}
        />
        <path
          d="M14.912 12.351H8.72098L3.06598 21.049C3.03668 21.0929 3.02005 21.1441 3.01793 21.1968C3.01581 21.2496 3.02829 21.3019 3.05398 21.348L3.05298 21.347C3.10298 21.434 3.19498 21.492 3.30098 21.493H20.333C20.3833 21.493 20.4328 21.4796 20.4762 21.4541C20.5196 21.4286 20.5554 21.392 20.58 21.348L20.581 21.347C20.6068 21.3011 20.6192 21.2488 20.6169 21.1962C20.6146 21.1435 20.5977 21.0925 20.568 21.049L20.569 21.05L14.912 12.351Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_243_1120">
          <rect
            width="23"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});
LabaratoryIcon.propTypes = {
  color: PropTypes.string,
};

LabaratoryIcon.displayName = "LabaratoryIcon";
export default LabaratoryIcon;
