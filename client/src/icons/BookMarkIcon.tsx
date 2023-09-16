import React from 'react';
import { Styled_BookMarkIcon } from './BookMarkIcon.style';

interface BookMarkIconProps {
  fill: string;
}

const BookMarkIcon = ({ fill }: BookMarkIconProps) => {
  return (
    <Styled_BookMarkIcon.Svg
      width="30"
      height="40"
      viewBox="0 0 30 40"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 40V4C30 1.794 28.0779 0 25.7143 0H4.28571C1.92214 0 0 1.794 0 4V40L15 30.668L30 40ZM6.44143 12.112C6.44143 10.976 6.92143 9.946 7.695 9.2C8.46857 8.456 9.53786 7.994 10.7207 7.994C10.7207 7.994 12.855 7.988 15 10.052C17.145 7.988 19.2793 7.994 19.2793 7.994C20.4621 7.994 21.5314 8.454 22.305 9.2C23.0786 9.946 23.5586 10.976 23.5586 12.112C23.5586 13.248 23.0786 14.28 22.305 15.024L15 22.406L7.695 15.024C6.88642 14.243 6.43662 13.1981 6.44143 12.112Z"
        fill="current"
      />
    </Styled_BookMarkIcon.Svg>
  );
};

export default BookMarkIcon;
