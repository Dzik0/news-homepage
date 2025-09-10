import HeaderMobile from "./componenents/HeaderMobile";
import Hero from "./componenents/Hero";
import New from "./componenents/New";
import Ranking from "./componenents/Ranking";

export default function App() {
  return (
    <div className="grid gap-7 pb-12">
      <HeaderMobile />
      <Hero />
      <New />
      <Ranking />
    </div>
  );
}
