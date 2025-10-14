interface BtnProps {
  children: React.ReactNode;
  className?: string;
}

const HoverBtn = ({ children, className = "" }: BtnProps) => {
  return <button className={`HoverBtn ${className}`}>{children}</button>;
};

export default HoverBtn;
