export default function OBMobileGarageBookingSite() {
  const services = [
    { name: "Conventional Oil Change", price: "$60" },
    { name: "Full Synthetic Oil Change", price: "$85" },
    { name: "Engine Air Filter", price: "$20 + filter" },
    { name: "Cabin Air Filter", price: "$25 + filter" },
    { name: "Fluid Top-Off", price: "$15" },
  ];

  const embeddedFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  const scrollToBooking = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OB Mobile Garage Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">OB Mobile Garage</h1>
              <p className="text-sm text-zinc-600">Powered by Outdoor Brothers</p>
            </div>
          </div>

          <button
            onClick={scrollToBooking}
            className="rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Book Service
          </button>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-green-800 via-zinc-900 to-orange-500" />
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Serving 80831 & surrounding areas
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mobile oil change service at your home or job site.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
              Fast, clean, reliable service without the shop wait. OB Mobile Garage
              brings oil changes and basic maintenance right to your driveway.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToBooking}
                className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Request Booking
              </button>
              <a
                href="tel:7192860067"
                className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Call 719-286-0067
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 p-4 shadow-sm">
                <p className="text-sm font-semibold">Convenient</p>
                <p className="mt-1 text-sm text-zinc-600">We come to you.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4 shadow-sm">
                <p className="text-sm font-semibold">Transparent</p>
                <p className="mt-1 text-sm text-zinc-600">Simple, upfront pricing.</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4 shadow-sm">
                <p className="text-sm font-semibold">Reliable</p>
                <p className="mt-1 text-sm text-zinc-600">Clean, professional service.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-lg">
            <h3 className="text-xl font-bold">Pricing</h3>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3"
                >
                  <span className="font-medium">{service.name}</span>
                  <span className="font-bold">{service.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-zinc-600">
              Mobile service is free in 80831. Outside the area, a travel fee may apply.
            </p>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h3 className="text-2xl font-bold tracking-tight">How booking works</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-green-800">1. Submit request</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Fill out the quick service request form with your vehicle details and preferred time.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-orange-600">2. We confirm</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  We contact you to lock in your appointment and service details.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">3. We come to you</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Service at your home or job site with no waiting room and no wasted time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Book your service online</h3>
              <p className="mt-4 leading-7 text-zinc-600">
                Use the form below to request service without leaving the website.
                Once we receive it, we’ll reach out to confirm your appointment.
              </p>

              <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm">
                <p className="text-sm font-semibold">Before you submit</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  <li>• Have your vehicle year, make, and model ready</li>
                  <li>• Include the service address</li>
                  <li>• Pick your preferred day and time window</li>
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 p-5 shadow-sm">
                <p className="text-sm font-semibold">Need help instead?</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="tel:7192860067"
                    className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                  >
                    Call 719-286-0067
                  </a>
                  <a
                    href="mailto:the.ob.garage@gmail.com"
                    className="rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
              <div className="border-b border-zinc-200 px-6 py-4">
                <p className="text-lg font-semibold">Service Request Form</p>
                <p className="mt-1 text-sm text-zinc-600">Fill this out and we’ll contact you shortly.</p>
              </div>
              <iframe
                src={embeddedFormLink}
                title="OB Mobile Garage Booking Form"
                className="h-[1864px] w-full"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">
                Customer trust
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight">
                Built on convenience, cleanliness, and reliability
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                OB Mobile Garage is focused on simple pricing, professional service,
                and making maintenance easier for busy drivers in 80831 and surrounding areas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <div className="text-lg">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  “Super convenient and easy. Having the oil change done at home saved me a ton of time.”
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">Local customer</p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <div className="text-lg">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  “Clean, professional, and straightforward pricing. Exactly what I was looking for.”
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">Mobile service client</p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
                <div className="text-lg">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  “Great option for busy schedules. The service at my job site made it easy.”
                </p>
                <p className="mt-4 text-sm font-semibold text-zinc-900">
                  Colorado Springs area customer
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="tel:7192860067"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-2xl hover:opacity-90 md:hidden"
      >
        Call / Text Now
      </a>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-10" />
            <div>
              <p className="font-semibold">OB Mobile Garage</p>
              <p className="text-sm text-zinc-600">
                Mobile oil change service for 80831 & surrounding areas.
              </p>
            </div>
          </div>
          <div className="text-sm text-zinc-600">
            <p>719-286-0067</p>
            <p>the.ob.garage@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
