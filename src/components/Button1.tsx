const Button1 = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-2 w-full sm:w-auto bg-blue-500 text-white rounded-lg 
            font-medium hover:bg-blue-600 transition cursor-pointer focus:outline-none 
            focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 focus:ring-offset-white
            disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button1;
