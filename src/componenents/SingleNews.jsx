export default function SingleNews({ title, para }) {
  return (
    <div className="border-my-darkGrayishBlue grid gap-2 border-b-2 pb-5">
      <h3 className="text-my-offWhite font-semibold">{title}</h3>
      <p className="text-my-grayishBlue">{para}</p>
    </div>
  );
}
