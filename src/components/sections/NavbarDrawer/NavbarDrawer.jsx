import React from 'react';
import NavMenu from './NavMenu';
import PageLogo from '../../shared/PageLogo';

function NavbarDrawer({ children }) {
  return (
    // daisyUi drawer
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        
        <div className="navbar px-12 lg:px-32 py-[1.6rem] border border-gray-200 flex justify-between items-center w-full">
          {/* Mobile menu button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-10 w-10 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* nav logo */}
          <PageLogo headingClass={'text-dark-01'}></PageLogo>

          {/* Desktop menu */}
          <div className="hidden flex-none lg:block">
            <NavMenu className="menu menu-horizontal"></NavMenu>
          </div>
        </div>

        {/* Main content (everything except navbar) */}
        <div className="flex-1">{children}</div>
      </div>

      {/* Sidebar / Drawer menu */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <NavMenu className="menu bg-base-200 min-h-full w-80 p-4 flex-col"></NavMenu>
      </div>
    </div>
  );
}


export default NavbarDrawer;