"use client";

export default function OBMobileGarageBookingSite() {
  const services = [
    { name: 'Conventional Oil Change', price: '$60' },
    { name: 'Full Synthetic Oil Change', price: '$85' },
    { name: 'Battery Replacement Service', price: 'Quote + battery' },
    { name: 'Engine Air Filter', price: '$20 + filter' },
    { name: 'Cabin Air Filter', price: '$25 + filter' },
    { name: 'Fluid Top-Off', price: '$15' },
    { name: 'Wiper Blade Replacement', price: 'Quote + blades' },
  ];

  const embeddedFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="h-1.5 w-full bg-gradient-to-r from-green-800 via-zinc-300 to-orange-500" />

      <header className="border-b border-white/10 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white p-2 shadow-lg shadow-black/30">
              <img
                src="/logo.png"
                alt="OB Mobile Garage Logo"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">OB Mobile Garage</h1>
              <p className="text-sm text-zinc-400">Powered by Outdoor Brothers</p>
            </div>
          </div>
          <button
            onClick={scrollToBooking}
            className="rounded-2xl bg-gradient-to-r from-green-800 to-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:opacity-95"
          >
            Book Service
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(to_bottom,_#09090b,_#18181b)]">
          <div className="border-b border-white/10 bg-gradient-to-r from-red-950/80 via-zinc-900 to-orange-950/70">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold uppercase tracking-[0.16em] text-orange-300">Battery dead? We come to you.</p>
                <p className="mt-1 text-zinc-300">Mobile battery replacement and quick on-site help for weak or dead batteries.</p>
              </div>
              <a
                href="tel:7192860067"
                className="inline-flex rounded-2xl bg-gradient-to-r from-green-800 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:opacity-95"
              >
                Call for Battery Service
              </a>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-green-700/30 bg-green-900/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Serving 80831 & surrounding areas
              </p>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Mobile oil changes and battery service that come to you.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Fast, clean, reliable service without the shop wait. OB Mobile Garage brings oil changes, battery replacement, and light maintenance right to your driveway or job site.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={scrollToBooking}
                  className="rounded-2xl bg-gradient-to-r from-green-800 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:opacity-95"
                >
                  Request Booking
                </button>
                <a
                  href="tel:7192860067"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call 719-286-0067
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Driveway Convenience</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">We come to your home or job site.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Simple Pricing</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Clear service options with no shop wait.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur">
                  <p className="text-sm font-semibold text-white">Quick Help</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Oil changes, batteries, filters, and fluid top-offs.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Service Menu</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">Popular Services</h3>
                </div>
                <div className="h-10 w-1 rounded-full bg-gradient-to-b from-green-700 to-orange-500" />
              </div>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-4"
                  >
                    <span className="font-medium text-zinc-100">{service.name}</span>
                    <span className="font-bold text-orange-300">{service.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Mobile service is free in 80831. Outside the area, a travel fee may apply. Battery pricing depends on vehicle and battery type.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                Why customers book
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">Built for busy drivers who want it done right</h3>
              <p className="mt-4 text-zinc-400 leading-7">
                OB Mobile Garage is focused on convenience, professional service, and keeping routine maintenance simple.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold text-green-300">Oil Changes</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Conventional and full synthetic service at your location.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold text-orange-300">Battery Service</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Battery replacement help for dead or weak batteries.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold text-green-300">Filter Changes</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Engine air and cabin air filter replacement available.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold text-orange-300">No Shop Wait</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Home or job site service that saves you time.</p>
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,_rgba(20,83,45,0.28),_rgba(24,24,27,0.92)_45%,_rgba(234,88,12,0.22))] p-6 shadow-2xl shadow-black/20">
              <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">Need more than an oil change?</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">Quick add-ons and light maintenance while we’re there</h3>
                  <p className="mt-4 text-zinc-300 leading-7">
                    Bundle common maintenance items during your visit to save time and keep your vehicle taken care of in one stop.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-white">Battery Replacement</p>
                    <p className="mt-2 text-sm text-zinc-300">Quote + battery</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-white">Wiper Blade Replacement</p>
                    <p className="mt-2 text-sm text-zinc-300">Quote + blades</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-white">Engine Air Filter</p>
                    <p className="mt-2 text-sm text-zinc-300">$20 + filter</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-semibold text-white">Cabin Air Filter</p>
                    <p className="mt-2 text-sm text-zinc-300">$25 + filter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h3 className="text-3xl font-bold tracking-tight text-white">How booking works</h3>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-green-300">1. Submit request</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">Fill out the quick service request form with your vehicle details, requested service, and preferred time.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">2. We confirm</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">We contact you to confirm your appointment, quote battery service if needed, and lock in the details.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-100">3. We come to you</p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">Service at your home or job site with a clean setup and straightforward communication.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-green-700/30 bg-green-900/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Service area
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">Proudly serving 80831 and nearby areas</h3>
              <p className="mt-4 text-zinc-400 leading-7">
                Great for home driveways, job sites, and busy schedules around Falcon, Peyton, and surrounding Colorado Springs communities.
              </p>
            </div>

            <div className="mt-10 rounded-[30px] border border-white/10 bg-zinc-900 p-4 shadow-2xl shadow-black/20">
              <iframe
                title="OB Mobile Garage Service Area Map"
                src="https://www.google.com/maps?q=80831&output=embed"
                className="h-[420px] w-full rounded-[24px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[linear-gradient(to_bottom,_#18181b,_#09090b)]">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="inline-flex rounded-full border border-green-700/30 bg-green-900/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                Book online
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">Request your service without leaving the site</h3>
              <p className="mt-4 text-zinc-400 leading-7">
                Use the form below to request an oil change, battery replacement, filters, or fluid service. We’ll reach out shortly to confirm your appointment.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">Before you submit</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-400">
                  <li>• Have your vehicle year, make, and model ready</li>
                  <li>• Include the service address</li>
                  <li>• Tell us if you need battery service so we can prepare</li>
                  <li>• Pick your preferred day and time window</li>
                </ul>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-lg shadow-black/20">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-200">Need help instead?</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="tel:7192860067"
                    className="rounded-2xl bg-gradient-to-r from-green-800 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:opacity-95"
                  >
                    Call 719-286-0067
                  </a>
                  <a
                    href="mailto:the.ob.garage@gmail.com"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-2xl shadow-black/40">
              <div className="border-b border-zinc-200 bg-gradient-to-r from-zinc-50 to-orange-50 px-6 py-4">
                <p className="text-lg font-semibold text-zinc-900">Service Request Form</p>
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

        <section className="bg-zinc-900">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300">
                Customer trust
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">Built on convenience, cleanliness, and reliability</h3>
              <p className="mt-4 text-zinc-400 leading-7">
                OB Mobile Garage is focused on simple pricing, professional service, and making maintenance easier for busy drivers in 80831 and surrounding areas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <div className="text-lg text-orange-300">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  “Super convenient and easy. Having the oil change done at home saved me a ton of time.”
                </p>
                <p className="mt-4 text-sm font-semibold text-white">Local customer</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <div className="text-lg text-orange-300">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  “Clean, professional, and straightforward pricing. Exactly what I was looking for.”
                </p>
                <p className="mt-4 text-sm font-semibold text-white">Mobile service client</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-lg shadow-black/20">
                <div className="text-lg text-orange-300">★★★★★</div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  “Great option for busy schedules. The service at my job site made it easy.”
                </p>
                <p className="mt-4 text-sm font-semibold text-white">Colorado Springs area customer</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="tel:7192860067"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-gradient-to-r from-green-800 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/30 transition hover:opacity-95 md:hidden"
      >
        Call / Text Now
      </a>

      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white p-2 shadow-lg shadow-black/30">
              <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-white">OB Mobile Garage</p>
              <p className="text-sm text-zinc-400">Mobile oil change and battery service for 80831 & surrounding areas.</p>
            </div>
          </div>
          <div className="text-sm text-zinc-400">
            <p>719-286-0067</p>
            <p>the.ob.garage@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
