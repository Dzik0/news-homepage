export default function SingleRankingItem({ image, number, title, para }) {
  return (
    <div className="flex gap-6">
      <img
        src={image}
        alt=""
        className="h-full w-20 object-cover md:h-30 md:w-40 xl:h-40"
      />
      <div className="flex flex-col justify-between py-2">
        <div className="text-my-softRed text-3xl font-bold">{number}</div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-my-darkGrayishBlue text-sm">{para}</p>
      </div>
    </div>
  );
}
