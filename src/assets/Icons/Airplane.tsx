const Airplane = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="m10.625 6.125-4.5-6H4.25L6.5 6.5l-3.75.375L1.625 4.25h-1.5v7.5h1.5L2.75 9.125 6.5 9.5l-2.25 6.375h1.875l4.5-6H14a1.875 1.875 0 0 0 0-3.75h-3.375Z"
    />
  </svg>
);
export default Airplane;
