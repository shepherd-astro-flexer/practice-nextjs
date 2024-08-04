import Link from "next/link";

type NavLink = {
  id: number;
  path: string;
  name: string;
};

const navlink: NavLink[] = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "/about",
    name: "About",
  },
  {
    id: 3,
    path: "/tours",
    name: "Tours",
  },
  {
    id: 4,
    path: "/counter",
    name: "Counter",
  },
];

function Navbar() {
  return (
    <nav className="max-w-3xl m-auto flex gap-x-4">
      {navlink.map((navlink) => {
        const { id, path, name } = navlink;

        return (
          <Link href={path} key={id}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
export default Navbar;
