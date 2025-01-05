type Props = {
  text: string;
  handleClick: () => void;
  count?: number;
};

export const Button = ({ text, handleClick, count }: Props) => {
  const getColors = () => {
    if (text === "Si!!") {
      return "bg-green-500";
    }
    return "bg-red-500";
  };

  return (
    <button
      onClick={handleClick}
      className={`${getColors()} text-white font-light text-lg min-w-20  rounded-lg `}
      style={{ padding: count ? count * 10 : 8 }}
    >
      {text}
    </button>
  );
};
