import "./svgs.css";

export function SvgBlackHole() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="svgBlackHole"
    >
      <g stroke="#fff">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10c5 0 4.6 12-3 12" />
        <path d="M12.312 14c-5 0-4.6-12 3-12" />
        <path d="M10 12.312c0-2.78 3.707-3.89 7-3.024m5 6.024c0-1.97-.806-3.456-2-4.49M14 12c0 2.779-3.707 3.89-7 3.024M2 9c0 1.68.586 3.008 1.5 4.004" />
      </g>
    </svg>
  );
}

export function SvgStar() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m12 3 1.43 5.312c.175.648.262.972.434 1.237a2 2 0 0 0 .587.587c.265.172.589.26 1.237.434L21 12l-5.312 1.43c-.648.175-.972.262-1.237.434a1.999 1.999 0 0 0-.587.587c-.172.265-.26.589-.434 1.237L12 21l-1.43-5.312c-.175-.648-.262-.972-.434-1.237a2 2 0 0 0-.587-.587c-.265-.172-.589-.26-1.237-.434L3 12l5.312-1.43c.648-.175.972-.262 1.237-.434a2 2 0 0 0 .587-.587c.172-.265.26-.589.434-1.237L12 3Z"
      />
    </svg>
  );
}

export function SvgPlanet() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 -15.89 87.181 87.181"
    >
      <g data-name="Group 18" transform="translate(-355.391 -272.962)">
        <circle
          cx="4.92"
          cy="4.92"
          r="4.92"
          data-name="Ellipse 4"
          transform="rotate(-45 525.115 -285.089)"
        />
      </g>
      <g data-name="Group 19">
        <path
          d="M86.888 14.39C84.627 7.3 71.127 7.91 65.157 8.54a27.744 27.744 0 0 0-47.44 15.14c-5.24 2.94-16.6 10.25-14.34 17.34 1.62 5.08 8.98 6.2 15.22 6.2a59.677 59.677 0 0 0 6.51-.37 27.7 27.7 0 0 0 47.42-15.11c5.23-2.93 16.621-10.26 14.361-17.35ZM8.617 39.35c-.529-1.64 3.5-5.62 8.93-9.14a27.892 27.892 0 0 0 3.64 11.42c-6.46.29-12.039-.63-12.57-2.28Zm43.26 9.5a22.166 22.166 0 0 1-19.63-3.05 136.488 136.488 0 0 0 33.82-10.77 22.169 22.169 0 0 1-14.19 13.82Zm-4.01-12.58a134.339 134.339 0 0 1-20.5 4.76 22.284 22.284 0 0 1-3.38-6.58 22.183 22.183 0 0 1 14.4-27.89 22.173 22.173 0 0 1 23.45 6.5 2.336 2.336 0 0 1 .24.29l.039.04a22.31 22.31 0 0 1 5.2 14.91 136.28 136.28 0 0 1-19.449 7.97Zm24.85-11.07a26.83 26.83 0 0 0-1.19-5.91 27.3 27.3 0 0 0-2.439-5.51c6.449-.28 12.029.63 12.56 2.28s-3.491 5.62-8.931 9.14Z"
          data-name="Path 18"
        />
      </g>
      <g data-name="Group 21">
        <path
          d="M60.72 26.419a2.751 2.751 0 0 1-2.59-1.825 15.278 15.278 0 0 0-4.807-6.7 2.75 2.75 0 0 1 3.463-4.274 20.791 20.791 0 0 1 6.523 9.118 2.752 2.752 0 0 1-2.59 3.677Z"
          data-name="Path 20"
        />
      </g>
      <g data-name="Group 22">
        <path
          d="M47.521 14.851a2.765 2.765 0 0 1-.6-.066 15.41 15.41 0 0 0-1.972-.307A2.75 2.75 0 1 1 45.443 9a20.862 20.862 0 0 1 2.676.417 2.75 2.75 0 0 1-.6 5.434Z"
          data-name="Path 21"
        />
      </g>
    </svg>
  );
}

export function SvgChevronVertical() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="svgChevronVertical"
        d="m7 15 5 5 5-5M7 9l5-5 5 5m-5 3h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}

export function SvgChevronUp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m5 15.5 7-7 7 7"
      />
    </svg>
  );
}

export function SvgChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m8.5 5 7 7-7 7"
      />
    </svg>
  );
}

export function SvgChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m5 8.5 7 7 7-7"
      />
    </svg>
  );
}

export function SvgChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="m15.5 5-7 7 7 7"
      />
    </svg>
  );
}

export function SvgText() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 1920 1920">
      <path
        fillRule="evenodd"
        d="M822.456 787.786h33.337v447.22h168.8V168.89h196.652v1066.115h168.8V168.89h171.331V0h-738.92C605.379 0 428.73 176.659 428.73 393.85c0 217.277 176.65 393.936 393.726 393.936m949.528 650.39H523.268l193.65-193.592-119.416-119.38-397.518 397.398L597.502 1920l119.416-119.38-193.65-193.59h1248.716v-168.855Z"
      />
    </svg>
  );
}

export function SvgTag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.05 7.05h.01M10.512 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v2.712c0 .733 0 1.1.083 1.446.073.306.195.598.36.867.185.303.444.562.963 1.08l4.7 4.7c1.188 1.189 1.782 1.783 2.467 2.005a3 3 0 0 0 1.854 0c.685-.222 1.28-.816 2.467-2.004l2.712-2.712c1.188-1.188 1.782-1.782 2.004-2.467a3 3 0 0 0 0-1.854c-.222-.685-.816-1.28-2.004-2.467l-4.7-4.7c-.519-.519-.778-.778-1.081-.964a3.001 3.001 0 0 0-.867-.36C11.612 3 11.245 3 10.512 3ZM7.55 7.05a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}

export function SvgX() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <path
        fill="#fff"
        d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      />
    </svg>
  );
}

export function SvgPlus() {
  return (
    <svg
      fill="#000000"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M576.477 448.471l349.649.621c35.346.041 63.967 28.728 63.926 64.074s-28.728 63.967-64.074 63.926l-349.429-.621.194 349.647c.013 35.346-28.63 64.01-63.977 64.023s-64.01-28.63-64.023-63.977l-.195-349.921-349.622-.621C63.58 575.581 34.959 546.894 35 511.548s28.728-63.967 64.074-63.926l349.402.621-.194-349.361c-.013-35.346 28.63-64.01 63.977-64.023s64.01 28.63 64.023 63.977l.194 349.635z"></path>
      </g>
    </svg>
  );
}

export function SvgCog() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
      <g stroke="#fff" strokeWidth="1.2" className="svgCog">
        <path d="m14.262 5.406-.39-.978a1.477 1.477 0 0 0-2.743 0l-.391.978a1.518 1.518 0 0 1-2.008.832l-.968-.415a1.477 1.477 0 0 0-1.94 1.94l.416.967a1.518 1.518 0 0 1-.832 2.008l-.978.39a1.477 1.477 0 0 0 0 2.743l.978.391a1.518 1.518 0 0 1 .832 2.008l-.415.968a1.477 1.477 0 0 0 1.94 1.94l.967-.416a1.518 1.518 0 0 1 2.008.832l.39.977a1.477 1.477 0 0 0 2.743 0l.391-.977a1.518 1.518 0 0 1 2.008-.832l.968.415a1.477 1.477 0 0 0 1.94-1.94l-.416-.967a1.518 1.518 0 0 1 .832-2.008l.977-.39a1.477 1.477 0 0 0 0-2.743l-.977-.391a1.518 1.518 0 0 1-.832-2.008l.415-.968a1.477 1.477 0 0 0-1.94-1.94l-.967.416a1.518 1.518 0 0 1-2.008-.832Z" />
        <path d="M16.5 12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      </g>
    </svg>
  );
}

export function SvgCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12.611 8.923 17.5 20 6.5"
        className="svgCheck"
      />
    </svg>
  );
}

export function SvgFloppy() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 16 16"
      className="svgFloppy"
    >
      <path d="M2.75 2.75v10.5h10.5v-7.5l-3-3z" />
      <path d="M5.75 13.25v-3.5h4.5v3.5" />
    </svg>
  );
}
