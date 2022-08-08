export const Hero = (props) => {
    const { title, subtitle } = props;
    return (
      <div className="text-center flex flex-col justify-center w-full gap-2 text-black">
        <h1 className="opacity-80 text-4xl font-bold">{title}</h1>
        <h2 className="opacity-40 text-xs hidden md:inline-block">{subtitle}</h2>
      </div>
    );
  };