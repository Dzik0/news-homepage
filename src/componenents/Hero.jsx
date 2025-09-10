import heroImg from "../assets/image-web-3-mobile.jpg";

export default function Hero() {
  return (
    <section className="grid gap-6">
      <img src={heroImg} alt="Hero Image" />
      <div className="grid grid-cols-1 gap-3">
        <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        <div className="grid justify-items-start gap-4">
          <p className="text-my-darkGrayishBlue">
            We dive into the next evelution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fullfiling its promise?
          </p>
          <button className="bg-my-softRed tracking-4 p-3 px-8 font-bold uppercase">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
