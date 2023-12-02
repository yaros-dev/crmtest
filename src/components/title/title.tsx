import './title.css';

export const Title = ({ children, className }: any) => {
  return <div className={`title ${className}`}>{children}</div>;
};
