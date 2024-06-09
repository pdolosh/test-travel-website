const Share = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={32} height={32} fill="#fff" rx={16} />
    <path
      fill="#000"
      fillRule="evenodd"
      d="m16 6.086.707.707 3.5 3.5-1.414 1.414L17 9.914V19h-2V9.914l-1.793 1.793-1.414-1.414 3.5-3.5.707-.707ZM13 13h-.5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H19v2h.5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h.5v-2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Share;
