interface BtnProps {
  children: React.ReactNode;
  className?: string;
}

const Btn = ({ className = "", children }: BtnProps) => {
  return (
    <button
      className={`text-[var(--on-accent1)] bg-[var(--Paragraph)] hover:bg-[var(--Background1)] hover:text-[var(--Paragraph)] cursor-pointer duration-500 rounded-[50px] ${className}`}
    >
      {children}
    </button>
  );
};

export default Btn;
