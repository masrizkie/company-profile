export default function FeaturedProperties() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border rounded shadow hover:shadow-lg transition"
          >
            <img
              src={`/house${i}.jpeg`}
              alt={`House ${i}`}
              className="rounded-t h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Luxury Home {i}</h3>
              <p className="text-gray-600">$500,000</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
