import * as React from "react";
function SvgComponent (props) {
	return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.333 11.064 12.013.383C12.26.135 12.59 0 12.941 0s.682.136.929.383l.786.787a1.315 1.315 0 0 1 0 1.857l-8.968 8.968 8.978 8.979c.247.247.384.576.384.928 0 .351-.137.681-.384.928l-.786.787a1.3 1.3 0 0 1-.929.383c-.351 0-.68-.136-.928-.383l-10.69-10.69a1.3 1.3 0 0 1-.383-.931c0-.354.135-.685.383-.933"
    />
  </svg>
);
}
export default SvgComponent;
