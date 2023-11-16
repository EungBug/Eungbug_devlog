'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navlinks from '@/data/navlinks';
import Logo from '/public/logo.png';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

const NavBar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
    console.log('바뀜');
  }, [isDark]);

  const handleChangeDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setIsDark(event.target.checked);
  };

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
      <ul className="flex gap-5">
        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isDark}
              onChange={handleChangeDarkMode}
              className="sr-only"
            />
            <div
              className={`box block h-7 w-12 rounded-full ${
                isDark ? 'bg-white' : 'bg-white border-category border'
              }`}></div>
            <div
              className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full transition bg-category ${
                isDark ? 'translate-x-full bg-darkblack' : ''
              }`}>
              {isDark ? (
                <FiMoon className="text-xs text-category" />
              ) : (
                <FiSun className="text-xs text-white" />
              )}
            </div>
          </div>
        </label>
        {navlinks.map(nav => (
          <li>
            <Link
              href={nav.link}
              key={nav.title}
              className={
                'font-semibold text-lg hover:text-main transition-colors duration-150 dark:text-white hover:dark:text-main'
              }>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
