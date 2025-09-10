export default function SingleRankingItem({ image, number, title, para }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <img src={image} alt="" className="h-full object-cover" />
      <div className="col-span-2 flex flex-col justify-between py-2">
        <div className="text-my-softRed text-3xl font-bold">{number}</div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-my-darkGrayishBlue text-sm">{para}</p>
      </div>
    </div>
  );
}
