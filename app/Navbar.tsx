'use client';
import React from 'react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item) => (
          <Link
            key={item.label}
            className={classNames({
              'text-zinc-900': item.href === currentPath,
              'text-zinc-500': item.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
