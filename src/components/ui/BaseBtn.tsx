interface BtnProps {
  className?: string;
  children: React.ReactNode;
}

const BaseBtn = ({ className = "", children }: BtnProps) => {
  return (
    <button
      className={`text-[var(--on-accent2)] bg-[var(--Background4)] hover:bg-[var(--Background1)] duration-500  rounded-lg px-3 py-2 text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default BaseBtn;
