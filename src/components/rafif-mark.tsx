export function RafifMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      width="151"
      height="155"
      viewBox="0 0 151 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 20C0 8.9543 8.95431 0 20 0H100C127.614 0 150 22.3858 150 50V50C150 77.6142 127.614 100 100 100H0V20Z"
        fill="#0FF278"
      />
      <path
        d="M100.614 100L130.519 131.9L150.598 155H0.00012207V100H100.614Z"
        fill="#0FF278"
      />
      <rect
        width="35"
        height="65"
        rx="17.5"
        transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 85.9619 85.7104)"
        fill="#1B1B1B"
      />
      <path d="M100 100L1 100" stroke="#0FF278" strokeWidth="2" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
