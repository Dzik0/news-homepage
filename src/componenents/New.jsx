import { useState } from "react";
import SingleNews from "./SingleNews";

export default function New() {
  const [news, setNews] = useState([
    {
      title: "Hydrogen VS Electric Cars",
      para: "Will hydrogen-fueled cars ever catch up to EVs",
    },
    {
      title: "The Downsides of AI Artistry",
      para: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      para: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ]);

  return (
    <section className="bg-my-veryDarkBlue mt-12 grid gap-5 p-4 md:mt-8 xl:mt-0 xl:basis-1/3">
      <h2 className="text-my-softOrange text-2xl font-bold">New</h2>
      {news.map((item, i) => (
        <SingleNews title={item.title} para={item.para} key={i} />
      ))}
    </section>
  );
}
