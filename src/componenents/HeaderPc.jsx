import logo from "../assets/logo.svg";

export default function HeaderPc() {
  return (
    <header className="mb-5 flex items-center justify-between pt-10">
      <div className="w-15">
        <img src={logo} alt="" />
      </div>
      <ul className="text-my-grayishBlue flex gap-10">
        <li className="hover:text-my-softOrange hover:cursor-pointer hover:underline">
          Home
        </li>
        <li className="hover:text-my-softOrange hover:cursor-pointer hover:underline">
          New
        </li>
        <li className="hover:text-my-softOrange hover:cursor-pointer hover:underline">
          Popular
        </li>
        <li className="hover:text-my-softOrange hover:cursor-pointer hover:underline">
          Trending
        </li>
        <li className="hover:text-my-softOrange hover:cursor-pointer hover:underline">
          Categories
        </li>
      </ul>
    </header>
  );
}
