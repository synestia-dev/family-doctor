import { memo } from "react";
import PropTypes from "prop-types";

const TreatmentIcon = memo(({ color = "#EE2922" }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_144_948)">
        <path
          d="M21.8232 24C20.7781 24 19.232 23.7781 16.7386 23.4185C16.3475 23.3615 15.9908 23.0249 15.8919 22.6182L15.1988 19.8124C15.193 19.7994 15.1645 19.7764 15.1488 19.7746L2.00129 20.2922C1.57184 20.2996 1.17615 19.9723 1.09643 19.5235L0.619268 16.8237C0.577371 16.585 0.630906 16.3426 0.768235 16.1579C0.905564 15.9731 1.11505 15.861 1.34315 15.8498L16.2841 15.1468C16.6885 15.127 17.0964 15.4196 17.2297 15.8281L17.9285 17.9526L18.3626 16.0178C18.44 15.6731 18.7164 15.2999 19.0208 15.1282C19.3833 14.923 19.8116 14.6812 20.287 14.6322L20.3597 14.6242C21.2588 14.5337 22.3737 14.4209 22.8963 15.0247C23.4828 15.7023 23.8832 17.1523 23.541 18.0784C23.1977 19.009 22.0426 19.7839 21.1686 19.9686C20.5506 20.0969 19.9245 19.8019 19.3199 19.5161C19.09 19.407 18.8608 19.2966 18.6356 19.2173C18.6059 19.2061 18.5774 19.1925 18.5506 19.1763L18.369 19.9829C18.3324 20.1502 18.3394 20.3369 18.3609 20.3877C18.4942 20.5712 18.9748 20.5792 19.4398 20.5854C19.6114 20.5879 19.7871 20.5916 19.96 20.6015C20.3056 20.6226 20.6635 20.5985 21.0423 20.5724C22.0956 20.4999 23.2902 20.4174 24.2538 21.444C24.5494 21.7596 24.5814 22.3194 24.3277 22.6938C23.6894 23.6268 23.1767 24 21.8232 24ZM15.1494 18.8447C15.5596 18.8447 15.9402 19.1546 16.0426 19.5774L16.7356 22.3832C16.7473 22.4242 16.8177 22.4911 16.8561 22.4973C22.5721 23.3206 22.8276 23.3088 23.623 22.1477C23.6289 22.1359 23.6312 22.0999 23.6254 22.0844C22.955 21.374 22.0967 21.4323 21.0999 21.5011C20.71 21.5277 20.3056 21.555 19.9111 21.5302C19.7499 21.5197 19.5876 21.5172 19.4293 21.516C18.7543 21.5054 18.0566 21.4949 17.6574 20.9345C17.3688 20.5296 17.4939 19.8892 17.5212 19.7653L17.605 19.3958C17.5096 19.3431 17.4316 19.2538 17.3938 19.1367L16.4075 16.135C16.397 16.1114 16.3481 16.0754 16.3225 16.0742L1.4991 16.7716L1.95473 19.3499L15.1203 18.8447C15.129 18.8447 15.1389 18.8447 15.1494 18.8447ZM18.7746 18.3109C18.82 18.3109 18.8666 18.3184 18.9114 18.3351C19.1692 18.4262 19.4269 18.549 19.6754 18.6674C20.1549 18.8955 20.6519 19.1298 20.9975 19.0579C21.6905 18.9116 22.5326 18.2706 22.7281 17.7393C22.9178 17.226 22.6681 16.1362 22.2544 15.6564C22.024 15.3898 20.955 15.4989 20.4406 15.551L20.3696 15.559C20.0665 15.59 19.7371 15.776 19.4479 15.9397C19.3449 15.9973 19.2308 16.1474 19.2116 16.2348L18.7455 18.3134C18.7543 18.3115 18.7647 18.3109 18.7746 18.3109Z"
          fill={color}
        />
        <path
          d="M4.03973 16.1424C4.01122 16.1424 3.98038 16.1393 3.95128 16.1331C3.71678 16.0817 3.56374 15.8356 3.61262 15.5839C3.74587 14.8908 3.89077 14.1989 4.03391 13.5065C4.36793 11.8965 4.71358 10.232 4.91957 8.58608C5.14651 6.78643 6.16833 6.54032 7.14011 6.53784C8.36211 6.5335 9.58585 6.53412 10.8189 6.53474L12.216 6.53536C12.6147 6.53536 13.0127 6.83664 13.1453 7.23649L15.2268 13.5338C15.356 13.9237 15.2355 14.4252 14.9481 14.7011C14.6344 14.9993 14.1672 15.0755 13.814 14.9081L13.5591 14.7922C13.0499 14.5628 12.5239 14.326 12.1113 13.9094C11.7383 13.5325 11.5678 13.0093 11.402 12.5028C11.3397 12.3106 11.2769 12.1185 11.2024 11.9399C11.1046 11.705 11.2041 11.4303 11.4247 11.3262C11.644 11.2227 11.9024 11.3274 12.0002 11.5624C12.0851 11.7645 12.1555 11.9808 12.2271 12.1978C12.3627 12.6169 12.493 13.0124 12.7112 13.2343C13.0092 13.5344 13.4421 13.7296 13.8989 13.9355L14.1648 14.0557C14.2096 14.0768 14.3103 14.0601 14.34 14.0334C14.3947 13.9795 14.4174 13.8815 14.4057 13.8412L12.3237 7.54398C12.3115 7.51298 12.2486 7.46587 12.216 7.46401L10.8189 7.46339C9.58701 7.46277 8.36443 7.46215 7.1436 7.46649C6.31148 7.46959 5.91928 7.64876 5.78544 8.7076C5.57421 10.3932 5.2239 12.0775 4.8864 13.7061C4.74325 14.3936 4.60127 15.0811 4.46801 15.7692C4.42495 15.9912 4.2434 16.1424 4.03973 16.1424Z"
          fill={color}
        />
        <path
          d="M8.79162 22.723C8.75845 22.723 8.7247 22.723 8.69037 22.723C6.87774 22.7162 5.04126 22.5972 3.26354 22.4825C2.4803 22.4317 1.69881 22.3808 0.915566 22.3393C0.674658 22.3263 0.490195 22.1081 0.500669 21.8514C0.512307 21.5948 0.715391 21.3976 0.958627 21.4106C1.74536 21.4522 2.53035 21.503 3.31708 21.5538C5.08083 21.6685 6.90626 21.7863 8.69386 21.7931C10.0055 21.7975 10.8853 21.7076 11.8827 21.6034C12.5181 21.5371 13.1751 21.4677 14.0276 21.4144C14.2615 21.3951 14.4756 21.5954 14.489 21.8514C14.5036 22.1081 14.3197 22.3288 14.0788 22.3424C13.2432 22.3945 12.5955 22.4627 11.9682 22.5284C11.0139 22.6282 10.1114 22.723 8.79162 22.723Z"
          fill={color}
        />
        <path
          d="M10.4371 6.64092C10.3132 6.64092 10.1892 6.5845 10.1031 6.4754C9.94714 6.27888 9.971 5.98565 10.1555 5.82013C11.2052 4.87907 11.7144 4.02418 11.6707 3.27593C11.6277 2.53077 11.0266 1.75214 9.88546 0.961724C9.83658 0.928247 9.68645 0.91586 9.61371 0.949956C9.49558 1.00327 9.37862 1.05411 9.26166 1.10556C8.28523 1.53022 7.51479 1.8656 7.36 3.13398C7.19649 4.47179 7.90466 5.0012 9.0737 5.75317L8.88633 6.17597L8.66114 6.57459C7.50955 5.83439 6.24857 5.02352 6.49296 3.01494C6.71351 1.21032 7.8907 0.697634 8.92997 0.245704C9.04286 0.19611 9.15633 0.147137 9.26864 0.0963025C9.60498 -0.0586802 10.0653 -0.0220908 10.3609 0.183726C11.7656 1.15578 12.4796 2.1489 12.5407 3.21891C12.6024 4.29077 12.0077 5.37502 10.717 6.53181C10.6361 6.60496 10.536 6.64092 10.4371 6.64092Z"
          fill={color}
        />
        <path
          d="M9.66203 16.1424C9.61664 16.1424 9.57009 16.1349 9.52354 16.1182C9.29485 16.037 9.17207 15.7735 9.24713 15.5299L10.6041 11.1929C10.6804 10.9486 10.9248 10.8159 11.1564 10.8984C11.385 10.9796 11.5078 11.2437 11.4328 11.4867L10.0758 15.8243C10.0147 16.019 9.84533 16.1424 9.66203 16.1424Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_144_948">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
});
TreatmentIcon.propTypes = {
  color: PropTypes.string,
};

TreatmentIcon.displayName = "TreatmentIcon";
export default TreatmentIcon;
