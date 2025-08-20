const MagicButton = ({ title, icon, position, handleClick }) => {
  return (
    <button className="relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex items-center justify-center w-full h-full gap-2 text-sm font-medium text-white rounded-lg cursor-pointer px-7 bg-slate-950 backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
