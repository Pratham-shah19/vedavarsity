import { RiLock2Fill } from 'react-icons/ri';

const Badge = ({ free }) => {
  return (
    <span
      className={`rounded p-1 text-xs font-semibold text-white  ${
        free ? 'bg-emerald-500' : 'bg-amber-500'
      }`}>
      {free ? 'FREE' : 'PAID'}
    </span>
  );
};
export const Locked = ({ free }) => {
  return (
    <span
      className={`mr-2 rounded p-1 text-sm font-semibold text-white  ${
        free ? 'text-emerald-500' : 'text-secondary'
      }`}>
      {free ? 'FREE' : <RiLock2Fill size={16} />}
    </span>
  );
};

export const Certify = () => {
  return (
    <p className="flex items-center space-x-2 text-xs font-semibold text-secondary">
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m15.393 18 .173 3.516-3.556-2.472-3.576 2.474L8.607 18H7.106l-.26 5.25h1.72l3.442-2.38 3.425 2.38h1.72L16.894 18h-1.501ZM19.472 7.262l-.103-2.253-1.899-1.215-1.215-1.9-2.253-.103L12 .754 9.998 1.792l-2.253.103L6.53 3.794l-1.9 1.215-.102 2.253L3.49 9.264l1.037 2.002.103 2.253 1.899 1.215 1.215 1.9 2.253.102L12 17.773l2.002-1.037 2.253-.103 1.215-1.9 1.9-1.214.102-2.253 1.037-2.002-1.037-2.002Zm-1.483 3.607-.083 1.805-1.522.974-.974 1.522-1.806.083-1.604.831-1.605-.831-1.805-.083-.974-1.522-1.522-.974-.083-1.805-.831-1.605.831-1.605.083-1.805 1.522-.974.974-1.523 1.805-.082L12 2.444l1.605.83 1.805.083.974 1.523 1.522.974.083 1.805.831 1.605-.831 1.605Z"
          fill="#FFAD3B"
        />
      </svg>
      <span>Certificate Course</span>
    </p>
  );
};
export default Badge;