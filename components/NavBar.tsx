import navlinks from "@/data/navlinks";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";


const NavBar = () => {
  return (
    <nav className={`w-full flex flex-row items-center justify-between`}>
      <Link href={'/'}>
        <Image
          src={Logo}
          alt="Logo"
          width={120}
          height={60}
          className={'w-[120px] h-[60px]'}
        />
      </Link>
      <div>
        {navlinks.map(nav => (
          <Link href={nav.link} key={nav.title} className={'mr-5 font-semibold text-lg hover:text-main transition-colors duration-150'}>
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;