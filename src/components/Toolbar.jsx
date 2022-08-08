import cx from "classnames";

const Button = ({ children, variant = "base" }) => {
  return (
    <button
      className={cx(
        "px-10 py-1.5 rounded-full hover:bg-gray-500 hover:scale-110 uppercase transition-all",
        {
          "bg-gray-800 text-white": variant ==="base",
          "bg-gray-100 text-black": variant ==="white",
        }
      )}
      style={{ fontSize: 8 }}
    >
      {children}
    </button>
  );
};

export const Toolbar = () => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-2 w-full gap-4">
        <Button>Custom Order</Button>
        <Button variant="white">Existing Inventory</Button>
      </div>
      <div className="grid md:hidden grid-cols-1 w-full gap-4 -mt-20">
        <Button variant="white">Mobile Button</Button>
      </div>
    </div>
  );
};