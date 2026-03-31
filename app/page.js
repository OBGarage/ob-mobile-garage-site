"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  const [oilType, setOilType] = useState("synthetic");
  const [vehicleType, setVehicleType] = useState("car");
  const [batteryAddOn, setBatteryAddOn] = useState(false);
  const [engineFilter, setEngineFilter] = useState(false);
  const [cabinFilter, setCabinFilter] = useState(false);
  const [wipers, setWipers] = useState(false);

  const estimate = useMemo(() => {
    let total = oilType === "synthetic" ? 85 : 60;

    if (vehicleType === "truck" || vehicleType === "suv") {
      total += 10;
    }

    if (engineFilter) total += 20;
    if (cabinFilter) total += 25;
    if (wipers) total += 25;

    const low = total;
    const high = total + (batteryAddOn ? 220 : 15);

    return {
      low,
      high,
      label: batteryAddOn
        ? `Estimated total: $${low}–$${high} (battery depends on vehicle/battery type)`
        : `Estimated total: $${low}–$${high}`,
    };
  }, [oilType, vehicleType, batteryAddOn, engineFilter, cabinFilter, wipers]);

  return (
    <main className="site">
      <div className="fixed-top-wrap">
        <div className="accent-bar"></div>

        <section className="availability-banner fixed-top-banner">
          <div className="availability-inner">
            <div>
              <p className="section-label">Next availability</p>
              <strong>Limited daily slots — same-day service may be available.</strong>
              <p>Fast response for oil changes, batteries, filters, and light maintenance.</p>
            </div>
            <div className="availability-actions">
              <a
                className="secondary-btn"
                href="sms:7192860067?body=Hi, I need service. My vehicle is:"
              >
                Text to Book
              </a>
              <button className="primary-btn" onClick={scrollToBooking}>
                Book Online
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="battery-banner fixed-bottom-banner">
        <div className="battery-banner-inner">
          <div>
            <p className="section-label">Fast help available</p>
            <strong>Battery dead? We come to you — same day in most cases.</strong>
            <p>
              Mobile battery replacement and quick on-site help for weak or dead
              batteries.
            </p>
          </div>
          <a className="primary-btn" href="tel:7192860067">
            Call for Battery Service
          </a>
        </div>
      </section>

      <div className="page-offset">
        <header className="topbar">
          <div className="brand">
            <img src="/logo.png" alt="OB Mobile Garage logo" className="logo" />
            <div>
              <h1>OB Mobile Garage</h1>
              <p className="tagline">Powered by Outdoor Brothers</p>
              <p className="veteran-badge">Veteran Owned &amp; Operated</p>
            </div>
          </div>

          <div className="topbar-actions">
            <a className="secondary-btn" href="tel:7192860067">
              Call Now
            </a>
            <a
              className="secondary-btn"
              href="sms:7192860067?body=Hi, I need service. My vehicle is:"
            >
              Text Us
            </a>
            <button className="primary-btn" onClick={scrollToBooking}>
              Book Service
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="hero-text">
            <span className="pill">
              Serving Peyton, Falcon, Calhan, Colorado Springs &amp; surrounding areas
            </span>
            <div className="hero-accent-line"></div>
            <h2>
              Mobile oil changes and battery service that come to you — no
              waiting, no shop visits.
            </h2>
            <p>
              Fast, clean, reliable service without the shop wait. We bring oil
              changes, battery replacement, and basic maintenance right to your
              driveway or job site.
            </p>
            <p className="hero-trust">
              Veteran Owned &amp; Operated • Trusted local mobile service • Fast response • No shop wait
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={scrollToBooking}>
                Request Booking
              </button>
              <a className="secondary-btn" href="tel:7192860067">
                Call 719-286-0067
              </a>
              <a
                className="secondary-btn"
                href="sms:7192860067?body=Hi, I need service. My vehicle is:"
              >
                Text Us
              </a>
            </div>

            <p className="hero-urgency">
              ⚡ Limited daily slots — same-day service may be available
            </p>

            <div className="hero-highlights">
              <div className="mini-stat">
                <strong>Home or Job Site</strong>
                <span>No waiting room</span>
              </div>
              <div className="mini-stat">
                <strong>Simple Pricing</strong>
                <span>Clear service options</span>
              </div>
              <div className="mini-stat">
                <strong>Quick Add-Ons</strong>
                <span>Batteries, filters, wipers</span>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <p className="section-label">Popular Services</p>
            <h3>Service Menu</h3>

            <div className="price-row">
              <span>Conventional Oil Change</span>
              <strong>$60</strong>
            </div>
            <div className="price-row">
              <span>Full Synthetic Oil Change</span>
              <strong>$85</strong>
            </div>
            <div className="price-row">
              <span>Battery Replacement Service</span>
              <strong>Starting at quote + battery</strong>
            </div>
            <div className="price-row">
              <span>Engine Air Filter</span>
              <strong>$20 + filter</strong>
            </div>
            <div className="price-row">
              <span>Cabin Air Filter</span>
              <strong>$25 + filter</strong>
            </div>
            <div className="price-row">
              <span>Fluid Top-Off</span>
              <strong>$15</strong>
            </div>
            <div className="price-row">
              <span>Wiper Blade Replacement</span>
              <strong>Quote + blades</strong>
            </div>

            <p className="small-note">
              Mobile service is free in 80831. Outside the area, a travel fee may
              apply.
            </p>
          </div>
        </section>

        <section className="why-choose-us">
          <p className="section-label">Why choose us</p>
          <h3>Built for convenience, speed, and clean service</h3>
          <div className="why-grid">
            <div className="why-card">
              <strong>We come to you</strong>
              <p>Home driveway, work site, or wherever your vehicle is parked safely.</p>
            </div>
            <div className="why-card">
              <strong>No wasted time</strong>
              <p>Skip the shop wait and get back to your day faster.</p>
            </div>
            <div className="why-card">
              <strong>Clean and professional</strong>
              <p>Simple pricing, clean setup, and clear communication every time.</p>
            </div>
          </div>
        </section>

        <section className="estimator">
          <div className="estimator-card">
            <div className="estimator-copy">
              <p className="section-label">Quick estimator</p>
              <h3>Get a fast price estimate before you book</h3>
              <p>
                This gives customers a rough total before submitting the form.
                Final pricing may vary based on vehicle, oil capacity, and battery type.
              </p>
            </div>

            <div className="estimator-controls">
              <label>
                Oil type
                <select value={oilType} onChange={(e) => setOilType(e.target.value)}>
                  <option value="conventional">Conventional</option>
                  <option value="synthetic">Full Synthetic</option>
                </select>
              </label>

              <label>
                Vehicle type
                <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                  <option value="car">Car</option>
                  <option value="suv">SUV</option>
                  <option value="truck">Truck</option>
                </select>
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={batteryAddOn}
                  onChange={(e) => setBatteryAddOn(e.target.checked)}
                />
                Battery service
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={engineFilter}
                  onChange={(e) => setEngineFilter(e.target.checked)}
                />
                Engine air filter
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={cabinFilter}
                  onChange={(e) => setCabinFilter(e.target.checked)}
                />
                Cabin air filter
              </label>

              <label className="check">
                <input
                  type="checkbox"
                  checked={wipers}
                  onChange={(e) => setWipers(e.target.checked)}
                />
                Wiper blades
              </label>
            </div>

            <div className="estimate-result">
              <strong>{estimate.label}</strong>
              <div className="estimate-actions">
                <a
                  className="secondary-btn"
                  href={`sms:7192860067?body=Hi, I got an estimate from the website and need service. Oil type: ${oilType}, Vehicle: ${vehicleType}.`}
                >
                  Text This Estimate
                </a>
                <button className="primary-btn" onClick={scrollToBooking}>
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="steps">
          <p className="section-label">How it works</p>
          <h3>Simple, fast, and built around your schedule</h3>

          <div className="step-grid">
            <div className="step-card">
              <h4>1. Submit request</h4>
              <p>Fill out the service form with your vehicle details.</p>
            </div>
            <div className="step-card">
              <h4>2. We confirm</h4>
              <p>We contact you to confirm details, pricing, and schedule.</p>
            </div>
            <div className="step-card">
              <h4>3. We come to you</h4>
              <p>Service at your home or job site with a clean setup.</p>
            </div>
          </div>
        </section>

        <section className="upsells">
          <div className="upsells-card">
            <div>
              <p className="section-label">Need more than an oil change?</p>
              <h3>Quick add-ons and light maintenance while we’re there</h3>
              <p>
                Bundle common maintenance items during your visit to save time and
                keep your vehicle taken care of in one stop.
              </p>
            </div>

            <div className="upsells-grid">
              <div className="mini-card">
                <strong>Battery Replacement</strong>
                <p>Starting at quote + battery</p>
              </div>
              <div className="mini-card">
                <strong>Wiper Blade Replacement</strong>
                <p>Quote + blades</p>
              </div>
              <div className="mini-card">
                <strong>Engine Air Filter</strong>
                <p>$20 + filter</p>
              </div>
              <div className="mini-card">
                <strong>Cabin Air Filter</strong>
                <p>$25 + filter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bundles">
          <p className="section-label">Bundle and save</p>
          <h3>Popular maintenance bundles</h3>
          <div className="bundle-grid">
            <div className="bundle-card">
              <strong>Quick Care Bundle</strong>
              <p>Oil change + engine air filter</p>
              <span>Save $10 when bundled</span>
            </div>
            <div className="bundle-card">
              <strong>Cabin Refresh Bundle</strong>
              <p>Oil change + cabin air filter</p>
              <span>Save $10 when bundled</span>
            </div>
            <div className="bundle-card">
              <strong>Full Maintenance Bundle</strong>
              <p>Oil change + both filters</p>
              <span>Save $15 when bundled</span>
            </div>
          </div>
        </section>

        <section className="service-area-list">
          <p className="section-label">Areas we serve</p>
          <h3>Local mobile service across the eastern Colorado Springs area</h3>
          <div className="area-tags">
            <span>Peyton</span>
            <span>Falcon</span>
            <span>Calhan</span>
            <span>Colorado Springs</span>
            <span>Black Forest</span>
            <span>Surrounding 80831 area</span>
          </div>
        </section>

        <section className="map-section">
          <p className="section-label">Service area</p>
          <h3>Proudly serving Peyton, Falcon, Calhan, Colorado Springs and nearby areas</h3>
          <p>
            Great for home driveways, job sites, and busy schedules around Falcon,
            Peyton, and surrounding Colorado Springs communities.
          </p>

          <div className="map-card">
            <iframe
              title="OB Mobile Garage Service Area Map"
              src="https://www.google.com/maps?q=Falcon,Colorado&output=embed"
              className="map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="gallery">
          <p className="section-label">In action</p>
          <h3>Work photos build trust fast</h3>
          <p>
            Replace these placeholders with real photos from driveway jobs, truck setup,
            clean work area, or completed service shots.
          </p>
          <div className="gallery-grid">
            <div className="gallery-card">Add truck / setup photo</div>
            <div className="gallery-card">Add driveway service photo</div>
            <div className="gallery-card">Add completed job photo</div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="booking-info">
            <p className="section-label">Book online</p>
            <h3>Request your service without leaving the website</h3>
            <p>
              Use the form below to request service. Once we receive it, we’ll
              reach out to confirm your appointment.
            </p>

            <div className="info-box">
              <h4>Before you submit</h4>
              <ul>
                <li>Have your vehicle year, make, and model ready</li>
                <li>Include the service address</li>
                <li>Tell us if you need battery service</li>
                <li>Pick your preferred day and time window</li>
              </ul>
            </div>

            <div className="contact-card">
              <strong>Need help instead?</strong>
              <div className="contact-card-actions">
                <a className="primary-btn" href="tel:7192860067">
                  Call 719-286-0067
                </a>
                <a
                  className="secondary-btn"
                  href="sms:7192860067?body=Hi, I need service. My vehicle is:"
                >
                  Text Us
                </a>
                <a className="secondary-btn" href="mailto:the.ob.garage@gmail.com">
                  Email Us
                </a>
              </div>
            </div>

            <div className="calendar-card">
              <strong>Want true time-slot booking later?</strong>
              <p>
                Add Calendly or Square Appointments here when you’re ready for live calendar booking.
              </p>
            </div>
          </div>

          <div className="form-card">
            <div className="form-header">
              <h4>Service Request Form</h4>
              <p>Fill this out and we’ll contact you shortly.</p>
            </div>
            <iframe
              src={formLink}
              title="OB Mobile Garage Booking Form"
              className="form-frame"
            ></iframe>
          </div>
        </section>

        <section className="reviews">
          <p className="section-label">Customer trust</p>
          <h3>Built on convenience, cleanliness, and reliability</h3>
          <div className="review-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                Replace this with a real review from a local customer after your first jobs.
              </p>
              <strong>Mike R. — Falcon</strong>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                Replace this with a real review that mentions convenience, driveway service, or battery help.
              </p>
              <strong>Sarah T. — Peyton</strong>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                Replace this with a real review from a truck, SUV, or job-site customer.
              </p>
              <strong>Chris D. — Colorado Springs</strong>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>OB Mobile Garage</strong>
            <p>
              Mobile oil change and battery service for 80831 &amp; surrounding areas.
            </p>
          </div>
          <div>
            <p>719-286-0067</p>
            <p>the.ob.garage@gmail.com</p>
          </div>
        </footer>
      </div>

      <div className="mobile-actions">
        <a href="tel:7192860067">Call</a>
        <a href="sms:7192860067?body=Hi, I need service. My vehicle is:">Text</a>
        <a href="#booking">Book</a>
      </div>

      <a className="sticky-call" href="tel:7192860067">
        Call / Text Now
      </a>
    </main>
  );
}
