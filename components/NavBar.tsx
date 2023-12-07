'use client';

import { useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import navlinks from '@/data/navlinks';
import Logo from '/public/logo.png';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

const NavBar = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    console.log(systemTheme);
    const isComment = document.querySelector('iframe.utterances-frame');
    if (isComment) {
      const utterancesTheme =
        theme === 'system' ? systemTheme : theme === 'light' ? 'github-light' : 'photon-dark';
      const utterancesEl = document.querySelector('iframe.utterances-frame') as HTMLIFrameElement;

      utterancesEl?.contentWindow?.postMessage(
        { type: 'set-theme', theme: utterancesTheme },
        'https://utteranc.es/'
      );
    }
  }, [theme]);

  useEffect(() => {
    (theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  const handleChangeDarkMode = () => {
    setTheme((theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark' ? 'light' : 'dark');
  };

  const style = {
    switch: `block h-7 w-12 rounded-full ${
      theme === 'dark' ? 'bg-white' : 'bg-white border-category border'
    }`
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
        <li key="theme_button">
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={(theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark'}
                onChange={handleChangeDarkMode}
                className="sr-only"
              />
              <div
                className={`block h-7 w-12 rounded-full ${
                  (theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark'
                    ? 'bg-white'
                    : 'bg-white border-category border'
                }`}></div>
              <div
                className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full transition bg-category ${
                  (theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark'
                    ? 'translate-x-full bg-darkblack'
                    : ''
                }`}>
                {(theme === 'system' ? systemTheme : theme ?? 'dark') === 'dark' ? (
                  <FiMoon className="text-xs text-category" />
                ) : (
                  <FiSun className="text-xs text-white" />
                )}
              </div>
            </div>
          </label>
        </li>
        {navlinks.map(nav => (
          <li key={nav.title}>
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
