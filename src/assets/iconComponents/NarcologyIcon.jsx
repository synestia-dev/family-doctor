import { memo } from "react";
import PropTypes from "prop-types";

const NarcologyIcon = memo(({ color = "#EE2922" }) => {
  return (
    <svg
      width="29"
      height="28"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.8167 3.30835L19.5576 4.56747L19.8857 4.8956L17.8898 6.89148L19.1201 8.14972L21.1177 6.12497L22.3751 7.38322L20.3512 9.37823L21.6094 10.6094L23.6053 8.61347L23.9334 8.9416L25.1926 7.68247L20.8167 3.30835ZM16.0042 6.37085L14.7451 7.62997L15.3199 8.20398L6.62505 16.926L6.32405 17.2261L6.37918 17.6374L6.6793 20.426L6.7073 20.7261L6.78868 20.7812L3.9458 23.625H6.4343L8.2123 21.8479L10.8636 22.1209L11.2748 22.176L11.5749 21.875L20.2978 13.1792L20.8718 13.7541L22.1301 12.4959L16.0042 6.37085ZM16.5782 9.46135L19.0396 11.9219L10.6448 20.3437L8.56668 20.0979L8.40218 19.9334L8.1563 17.8552L16.5782 9.46135Z"
        fill={color}
      />
    </svg>
  );
});
NarcologyIcon.propTypes = {
  color: PropTypes.string,
};

NarcologyIcon.displayName = "NarcologyIcon";
export default NarcologyIcon;
