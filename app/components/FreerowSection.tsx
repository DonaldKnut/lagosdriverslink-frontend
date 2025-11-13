"use client";

export default function HeroSection({
  heroTitle,
  heroSubtitle,
  ctaText = "Get started",
  ctaLink = "/hire",
}: {
  heroTitle: string;
  heroSubtitle: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  // Hardcoded service areas
  const serviceAreas = [
    "Ajah",
    "Ikeja",
    "Lekki",
    "Victoria Island",
    "Ikoyi",
    "Gbagada",
    "Surulere",
    "Yaba",
    "Maryland",
    "Magodo",
    "Ikorodu",
    "Eko Atlantic",
    "Amuwo Odofin",
    "Ilupaju",
    "Isolo",
    "Lagos Island",
    "Ogudu",
  ];

  // Service highlights with LagosDriversLink branding
  const serviceHighlights = [
    { icon: "✓", text: "Thoroughly verified & background-checked drivers" },
    { icon: "✓", text: "Rapid placement within 3-10 business days" },
    { icon: "✓", text: "Comprehensive HR management included" },
    { icon: "✓", text: "Replacement at subsidized fee when needed" },
  ];

  // Package options with LagosDriversLink branding
  const packageOptions = [
    {
      title: "Managed Service Plan",
      price: "₦50,000",
      features: [
        "LagosDriversLink handles all HR administration",
        "Driver remains our qualified staff",
        "Includes full training & verification",
        "Replacement at subsidized fee",
      ],
      bestFor: "Businesses wanting worry-free driver management",
    },
    {
      title: "Direct Employment Plan",
      price: "₦70,000",
      features: [
        "Driver becomes your direct employee",
        "Complete background checks documentation",
        "Full control over driver management",
        "Thoroughly verified & background-checked drivers",
      ],
      bestFor: "Those wanting complete employment control",
    },
  ];

  return (
    <section className="min-h-[85vh] mt-[88px] flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-12 gap-8 bg-black transition-all duration-500">
      {/* Left Column */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-yellow-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              {heroTitle}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-yellow-100 italic">
            {heroSubtitle}
          </h2>
        </div>

        <div className="space-y-2">
          {serviceHighlights.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-yellow-400 mt-0.5">{item.icon}</span>
              <p className="text-white">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href={ctaLink}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-medium text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-yellow-500/50 flex-1 text-center"
          >
            {ctaText}
          </a>
          <a
            href="/hire"
            className="px-6 py-3 border border-yellow-500 text-yellow-300 rounded-lg font-medium text-sm hover:bg-yellow-500/10 transition-all duration-300 flex-1 text-center"
          >
            Need a Driver?
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h3 className="text-yellow-300 font-semibold mb-2 text-center md:text-left">
            Serving All Major Lagos Areas:
          </h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 bg-yellow-900/30 text-yellow-200 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {packageOptions.map((pkg, index) => (
            <div
              key={index}
              className="bg-yellow-900/10 p-4 rounded-lg border border-yellow-800/50"
            >
              <div className="flex justify-between items-start">
                <h4 className="text-yellow-300 font-bold">{pkg.title}</h4>
                <span className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {pkg.price}
                </span>
              </div>
              <ul className="mt-2 space-y-1 pl-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-400 text-xs mt-1">•</span>
                    <span className="text-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-yellow-200 text-xs italic mt-2">
                {pkg.bestFor}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="flex items-center gap-3 pt-2 justify-center md:justify-start">
          <div className="flex -space-x-2">
            {["960x0.webp", "180820-hodge-mn-1115.webp", "jenny.png"].map(
              (img, idx) => (
                <div
                  key={idx}
                  className="relative w-8 h-8 rounded-full border-2 border-yellow-300 overflow-hidden"
                >
                  <Image
                    src={`/${img}`}
                    alt={`Happy client ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>
          <p className="text-sm text-yellow-400">
            <span className="font-bold text-yellow-300">200+</span> satisfied
            clients this month
          </p>
        </div> */}
      </div>
    </section>
  );
}
