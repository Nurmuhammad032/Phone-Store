import Link from "next/link";
import links from "../constants/links";
import { useRouter } from "next/router";

const AppBar = () => {
  const router = useRouter();
  const activeLink = router.pathname;

  return (
    <aside className="w-[263px] bg-blue h-screen fixed top-[80px] left-0 rounded-tr-[30px]">
      <div className="pt-[54px] pl-[30px]">
        {links.map((link) => (
          <Link
            href={`${link.path}`}
            key={link.id}
            className={`flex text h-[50px] my-[11px] hover:text-blue transition-all text-white hover:bg-white items-center rounded-l-3xl ${
              activeLink === link.path ? "activeLink" : ""
            }`}
          >
            <div className="flex space-x-4 ml-[30px] items-center">
              <div className="text-[1.2rem]">{link.icon}</div>
              <p>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AppBar;
