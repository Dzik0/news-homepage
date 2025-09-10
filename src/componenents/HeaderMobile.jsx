import CompanyLogo from "../assets/logo.svg";
import BurgerImg from "../assets/icon-menu.svg";
import { useState } from "react";
import clsx from "clsx";

export default function HeaderMobile() {
  const [toggle, setToggle] = useState(false);

  function toggleBurger() {
    setToggle((pS) => !pS);
  }
  return (
    <header className="relative mt-5 flex items-center justify-between">
      <div className="w-10">
        <img src={CompanyLogo} alt="Company Logo" />
      </div>
      <div>
        <button className="cursor-pointer" onClick={toggleBurger}>
          <span>
            <img src={BurgerImg} alt="burger logo" />
          </span>
        </button>
      </div>
      <nav
        className={clsx(
          `absolute top-13 right-0 flex w-[40%] justify-end rounded-bl-xl bg-white p-4 text-right ${toggle ? "block" : "hidden"}`,
        )}
      >
        <ul className="flex flex-col gap-3">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}
