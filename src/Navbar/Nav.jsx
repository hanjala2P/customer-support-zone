import React from 'react';

const Nav = () => {
    return (
<div className="navbar bg-neutral-100 text-black border-b border-neutral-400 shadow-lg px-4 ">

  {/* START */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      
      <ul
        tabIndex={0}
        className="nav-ul menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow z-10">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>

    <a className="text-[16px] font-bold ml-2 sm:text-xl">CS — Ticket System</a>
  </div>

  {/* RIGHT SIDE */}
  <div className="navbar-end gap-4">

    {/* Menu (Desktop only) */}
    <ul className="menu menu-horizontal hidden lg:flex">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>

    {/* Button */}
    <button className="btn border-none bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
      hover:from-[#9F62F2] hover:to-[#632EE3]
      text-white font-semibold px-5 rounded-lg shadow-md">
      + New Ticket
    </button>
  </div>

</div>

    );
};

export default Nav;