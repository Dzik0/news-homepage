import CompanyLogo from "../assets/logo.svg";
import BurgerImg from "../assets/icon-menu.svg";

export default function HeaderMobile() {
  function go() {
    console.log("lets go");
  }

  return (
    <header className="flex items-center justify-between">
      <div className="w-10">
        <img src={CompanyLogo} alt="Company Logo" />
      </div>
      <div>
        <button className="cursor-pointer" onClick={go}>
          <span>
            <img src={BurgerImg} alt="burger logo" />
          </span>
        </button>
      </div>
    </header>
  );
}
