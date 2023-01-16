import Link from "next/link";

type navLinkProps = {
  href: string;
};

const NavLink = ({ href }: navLinkProps) => {
  return (
    <div>
      <Link href={`${href}`} className="uppercase ">
        <p className="tracking-wider">{href}</p>
      </Link>
    </div>
  );
};

export default NavLink;
