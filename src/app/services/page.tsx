// Path: src/app/services/page.tsx

export default function ServicesPage() {
  return (
    <div>
      {/* Jumbotron Services */}
      <section
        className="
          -mx-6
          h-[60vh]
          bg-[url('/services/jumbotronServices.jpg')]
          bg-cover bg-[position:50%_20%]
          relative
        "
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-6">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </section>

      {/* Services Grid with English Text + White Paragraphs */}
      <div className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Residential Sales */}
          <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="/services/residentialSeler.jpg"
              alt="Residential Sales"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Residential Sales
              </h3>
              <p className="text-white">
                We assist clients in selling and purchasing homes with comprehensive
                marketing strategies and optimal negotiation to secure the best price.
              </p>
            </div>
          </div>

          {/* Rental Management */}
          <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="/services/rentalManagement.jpg"
              alt="Rental Management"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Rental Management
              </h3>
              <p className="text-white">
                Full-service rental management: tenant screening, monthly rent
                collection, and routine property maintenance to keep your investment
                performing.
              </p>
            </div>
          </div>

          {/* Property Valuation */}
          <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
            <img
              src="/services/propertyValuation.png"
              alt="Property Valuation"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Property Valuation
              </h3>
              <p className="text-white">
                In-depth market analysis to determine accurate property values,
                helping you set competitive sale or rental prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
