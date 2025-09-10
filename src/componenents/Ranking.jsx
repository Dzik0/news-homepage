import SingleRankingItem from "./SingleRankingItem";

export default function Ranking() {
  const data = [
    {
      image: "./public/image-retro-pcs.jpg",
      number: "01",
      title: "Reviving Retro PCs",
      para: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: "./public/image-top-laptops.jpg",
      number: "02",
      title: "Top 10 Laptops of 2022",
      para: "Our best picks for various needs and budgets",
    },
    {
      image: "./public/image-gaming-growth.jpg",
      number: "03",
      title: "THe Growth of Gaming",
      para: "How the pandemic as sparked fresh opportunites",
    },
  ];
  return (
    <section className="mt-10 grid gap-8">
      {data.map((item) => (
        <SingleRankingItem
          image={item.image}
          number={item.number}
          title={item.title}
          para={item.para}
        />
      ))}
    </section>
  );
}
