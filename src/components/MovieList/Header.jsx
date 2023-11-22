import Link from "next/link";

const Header = ({ title }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-amber-400">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
