import { SVGProps } from "react";

function Places({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M12 3.75L21 10.5V24H3V10.5L12 3.75ZM12 0L0 9V27H24V9L12 0ZM11.25 9.75V14.25H10.5V9.75H9V14.25H8.25V9.75H6.75V14.25C6.75 15.495 7.755 16.5 9 16.5V22.5H10.5V16.5C11.745 16.5 12.75 15.495 12.75 14.25V9.75H11.25ZM13.5 12.75V17.25H15V22.5H16.5V9.75C14.85 9.75 13.5 11.1 13.5 12.75Z" />
    </svg>
  );
}

export default Places;
