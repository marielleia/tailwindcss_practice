export const Section = ({ children, bg }) => {
  return (
    <section className="bg-red-500 h-screen flex justify-center py-20 relative">
      <img
        src={bg}
        className="absolute top-0 left-0 bottom-0 right-0 object-cover h-full w-full z-10"
        alt="background" />
      <div className="z-20 flex flex-col items-start justify-between h-full">
        {children}
      </div>
    </section>
  );
};