import { SVGProps } from "react";

const WebLogoMain = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path
        style={{ fill: "#25B6D2" }}
        d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.212V260.908z"
      />
      <path
        style={{ fill: "#415E72" }}
        d="M201.6,387.9l77.864-263.8h36.752L238.4,387.9H201.6z"
      />
      <path
        style={{ fill: "#E04F5F" }}
        d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728L337.352,218.34v-38.568L512,259.828
	V293.284z"
      />
    </svg>
  );
};

export default WebLogoMain;
