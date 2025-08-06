

export default function HeroSection() {
  return (
    <section
      className="
        -mx-6                     /* keluarkan 1.5rem padding-x main */
        relative h-[60vh]
        flex items-center justify-center text-center
        text-white
        bg-[url('/jumbotron.jpg')] bg-cover bg-center
      "
    >
      <div className="bg-black/40 p-10 rounded">
        <h1 className="text-4xl font-bold">Find a Home</h1>
        <p className="mt-3 text-lg">that suits your lifestyle</p>
      </div>
    </section>
  );
}
