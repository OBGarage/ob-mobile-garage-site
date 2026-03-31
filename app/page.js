"use client";

export default function Home() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  return (
    <main className="site">
      <div className="accent-bar"></div>

      <section className="battery-banner">
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

      <header className="topbar">
        <div className="brand">
          <img src="/logo.png" alt="OB Mobile Garage logo" className="logo" />
          <div>
            <h1>OB Mobile Garage</h1>
            <p className="tagline">Powered by Outdoor Brothers</p>
          </div>
        </div>

        <div className="topbar-actions">
          <a className="secondary-btn" href="tel:7192860067">
            Call Now
          </a>
          <button className="primary-btn" onClick={scrollToBooking}>
            Book Service
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="pill">
            Serving Peyton, Falcon, Calhan, Colorado Springs & surrounding areas
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
            Trusted local mobile service • Fast response • No shop wait
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={scrollToBooking}>
              Request Booking
            </button>
            <a className="secondary-btn" href="tel:7192860067">
              Call 719-286-0067
            </a>
            <a className="secondary-btn" href="sms:7192860067">
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
            <strong>Starting at $20 + battery</strong>
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
            <strong>$10 + blades</strong>
          </div>

          <p className="small-note">
            Mobile service is free in 80831. Outside the area, a travel fee may
            apply.
          </p>
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
              <a className="secondary-btn" href="mailto:the.ob.garage@gmail.com">
                Email Us
              </a>
            </div>
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
              Super convenient and easy. Having the oil change done at home
              saved me a ton of time.
            </p>
            <strong>Local customer</strong>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Clean, professional, and straightforward pricing. Exactly what I
              was looking for.
            </p>
            <strong>Mobile service client</strong>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p>
              Great option for busy schedules. The service at my job site made
              it easy.
            </p>
            <strong>Colorado Springs area customer</strong>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>OB Mobile Garage</strong>
          <p>
            Mobile oil change and battery service for 80831 & surrounding areas.
          </p>
        </div>
        <div>
          <p>719-286-0067</p>
          <p>the.ob.garage@gmail.com</p>
        </div>
      </footer>

      <a className="sticky-call" href="tel:7192860067">
        Call / Text Now
      </a>
    </main>
  );
}
