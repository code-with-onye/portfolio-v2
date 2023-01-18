import Logo from "@/components/shared/Logo";
import NavLink from "@/components/shared/NavLink";
import { navLink } from "@/data";

const Header = () => {
  return (
    <div className="flex items-center w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  p-4   drop-shadow-md fixed top-0 justify-between z-50 ">
      <Logo />
      <div className="flex gap-x-4 text-xs font-semibold">
        {navLink.map((data) => (
          <NavLink href={data} />
        ))}
      </div>
    </div>
  );
};

export default Header;
