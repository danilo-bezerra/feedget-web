import React, { useState } from 'react'

export const Header = () => {

  return (
    <header className="bg-zinc-800">
      <div className="flex justify-between items-center px-2  max-w-[1200px] m-auto">
        <div className="text-xl leading-6">LOGO</div>
        <nav>
          <ul className="flex">
            <li>
              <a
                href=""
                className="block px-4 py-5 border-b-2 border-b-transparent hover:border-brand-500 hover:text-brand-500"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-5 border-b-2 border-b-transparent hover:border-brand-500 hover:text-brand-500"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-5 border-b-2 border-b-transparent hover:border-brand-500 hover:text-brand-500"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-5 border-b-2 border-b-transparent hover:border-brand-500 hover:text-brand-500"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href=""
                className="block px-4 py-5 border-b-2 border-b-transparent hover:border-brand-500 hover:text-brand-500"
              >
                Link
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
