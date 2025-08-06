// Path: src/app/about/page.tsx

export default function AboutPage() {
  return (
    <div>
      {/* Jumbotron Founder */}
      <section
        className="
          -mx-6
          h-[60vh]
          bg-[url('/aboutUs/founder.jpg')]
          bg-cover bg-left-top
          relative
        "
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-6">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Our History & Our Culture */}
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our History */}
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Our History</h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Founded in 2007.</li>
              <li>Became one of the Top 10 residential agency companies in Indonesia.</li>
              <li>Employing over 1,000 freelance marketers.</li>
              <li>Growing and evolving in line with the nation’s economic expansion.</li>
            </ul>
          </div>

          {/* Our Culture */}
          <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Our Culture</h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Customer satisfaction is our top priority.</li>
              <li>Honesty is our most important foundational value.</li>
              <li>Employee professionalism drives our sales growth.</li>
              <li>Intensive communication with clients to achieve their goals.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
