"use client";

export default function OBMobileGarageBookingSite() {
  const services = [
    { name: 'Conventional Oil Change', price: '$60' },
    { name: 'Full Synthetic Oil Change', price: '$85' },
    { name: 'Battery Replacement Service', price: 'Quote + battery' },
    { name: 'Engine Air Filter', price: '$20 + filter' },
    { name: 'Cabin Air Filter', price: '$25 + filter' },
    { name: 'Fluid Top-Off', price: '$15' },
  ];

  const embeddedFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-green-800 via-zinc-300 to-orange-500" />

      {/* Header */}
      <header className="border-b border-white/10 bg-zinc-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold">OB Mobile Garage</h1>
              <p className="text-sm text-zinc-400">Powered by Outdoor Brothers</p>
            </div>
          </div>

          <button
            onClick={scrollToBooking}
            className="rounded-xl bg-gradient-to-r from-green-800 to-orange-500 px-5 py-2 text-sm font-semibold"
          >
            Book Service
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm text-green-400">
          Serving 80831 & surrounding areas
        </p>

        <h2 className="mt-4 text-5xl font-bold leading-tight">
          Mobile oil changes and battery service that come to you.
        </h2>

        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          Fast, clean, reliable service without the shop wait. We bring oil
          changes, battery replacement, and basic maintenance right to your
          driveway or job site.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={scrollToBooking}
            className="rounded-xl bg-gradient-to-r from-green-800 to-orange-500 px-6 py-3 font-semibold"
          >
            Request Booking
          </button>

          <a
            href="tel:7192860067"
            className="rounded-xl border border-white/20 px-6 py-3"
          >
            Call 719-286-0067
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Popular Services</h3>

        <div className="grid gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex justify-between border border-white/10 rounded-xl p-4 bg-zinc-900"
            >
              <span>{service.name}</span>
              <span className="text-orange-400 font-bold">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">How it works</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-zinc-900 p-5 rounded-xl">
            <h4 className="text-green-400 font-semibold">1. Submit request</h4>
            <p className="text-zinc-400 mt-2">
              Fill out the service form with your vehicle details.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h4 className="text-orange-400 font-semibold">2. We confirm</h4>
            <p className="text-zinc-400 mt-2">
              We contact you to confirm details and schedule.
            </p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-xl">
            <h4 className="font-semibold">3. We come to you</h4>
            <p className="text-zinc-400 mt-2">
              Service at your home or job site.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-2xl font-bold mb-4">
          Book your service online
        </h3>

        <iframe
          src={embeddedFormLink}
          className="w-full h-[1800px] border-0"
        />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="font-semibold">OB Mobile Garage</p>
        <p className="text-zinc-400">
          Mobile oil change and battery service
        </p>
        <p className="mt-2">719-286-0067</p>
      </footer>

      {/* STICKY CALL */}
      <a
        href="tel:7192860067"
        className="fixed bottom-5 right-5 bg-gradient-to-r from-green-800 to-orange-500 px-5 py-3 rounded-full"
      >
        Call / Text Now
      </a>
    </div>
  );
}
