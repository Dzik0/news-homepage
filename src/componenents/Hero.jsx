import heroImg from "../assets/image-web-3-mobile.jpg";
import heroImgPc from "../assets/image-web-3-desktop.jpg";

export default function Hero() {
  return (
    <section className="grid gap-6 md:gap-10 xl:basis-2/3">
      <img className="md:hidden" src={heroImg} alt="Hero Image" />
      <img
        className="hidden md:block md:h-80 md:w-full md:object-cover"
        src={heroImgPc}
        alt="Hero Image"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
        <h1 className="text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        <div className="grid justify-items-start gap-4">
          <p className="text-my-darkGrayishBlue">
            We dive into the next evelution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fullfiling its promise?
          </p>
          <button className="bg-my-softRed tracking-4 p-3 px-8 font-bold uppercase md:px-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
