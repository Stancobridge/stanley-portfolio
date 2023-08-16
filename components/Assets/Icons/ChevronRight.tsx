export const ChevronRight = ({ customClass }: { customClass?: string }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={customClass}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);
