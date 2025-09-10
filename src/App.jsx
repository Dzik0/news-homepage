import HeaderMobile from "./componenents/HeaderMobile";
import HeaderPc from "./componenents/HeaderPc";
import Hero from "./componenents/Hero";
import New from "./componenents/New";
import Ranking from "./componenents/Ranking";

export default function App() {
  return (
    <div className="mx-auto grid max-w-[1400px] gap-7 pb-12">
      <div className="md:hidden">
        <HeaderMobile />
      </div>
      <div className="hidden md:block">
        <HeaderPc />
      </div>
      <div className="xl:flex xl:gap-6">
        <Hero />
        <New />
      </div>
      <Ranking />
    </div>
  );
}
