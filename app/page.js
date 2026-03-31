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
      <div className="accent-bar" />

      <header className="topbar">
        <div className="brand">
          <img src="/logo.png" alt="OB Mobile Garage logo" className="logo" />
          <div>
            <h1>OB Mobile Garage</h1>
            <p className="tagline">Powered by Outdoor Brothers</p>
          </div>
        </div>

        <button className="primary-btn" onClick={scrollToBooking}>
          Request Booking
        </button>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="pill">Serving 80831 & surrounding areas</span>
          <div className="hero-accent-line" />
          <h2>Mobile oil change service at your home or job site.</h2>
          <p>
            Fast, clean, reliable service without the shop wait. OB Mobile Garage
            brings oil changes and basic maintenance right to your driveway.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={scrollToBooking}>
              Book Service
            </button>
            <a className="secondary-btn" href="tel:7192860067">
              Call 719-286-0067
            </a>
          </div>
        </div>

        <div className="pricing-card brand-card">
          <h3>Pricing</h3>
          <div className="price-row">
            <span>Conventional Oil Change</span>
            <strong>$60</strong>
          </div>
          <div className="price-row">
            <span>Full Synthetic Oil Change</span>
            <strong>$85</strong>
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
          <p className="small-note">
            Mobile service is free in 80831. Outside the area, a travel fee may apply.
          </p>
        </div>
      </section>

      <section className="steps">
        <h3>How booking works</h3>
        <div className="step-grid">
          <div className="step-card brand-card">
            <h4>1. Submit request</h4>
            <p>Fill out the form with your vehicle details and preferred time.</p>
          </div>
          <div className="step-card brand-card">
            <h4>2. We confirm</h4>
            <p>We contact you to lock in your appointment and service details.</p>
          </div>
          <div className="step-card brand-card">
            <h4>3. We come to you</h4>
            <p>Service at your home or job site with no waiting room and no wasted time.</p>
          </div>
        </div>
      </section>

      <section id="booking" className="booking">
        <div className="booking-info">
          <h3>Book your service online</h3>
          <p>
            Use the form below to request service without leaving the website.
            Once we receive it, we’ll reach out to confirm your appointment.
          </p>

          <div className="info-box brand-card">
            <h4>Before you submit</h4>
            <ul>
              <li>Have your vehicle year, make, and model ready</li>
              <li>Include the service address</li>
              <li>Pick your preferred day and time window</li>
            </ul>
          </div>
        </div>

        <div className="form-card brand-card">
          <div className="form-header">
            <h4>Service Request Form</h4>
            <p>Fill this out and we’ll contact you shortly.</p>
          </div>
          <iframe
            src={formLink}
            title="OB Mobile Garage Booking Form"
            className="form-frame"
          />
        </div>
      </section>

      <section className="reviews">
        <h3>Built on convenience, cleanliness, and reliability</h3>
        <div className="review-grid">
          <div className="review-card brand-card">
            <div className="stars">★★★★★</div>
            <p>
              Super convenient and easy. Having the oil change done at home saved me a ton of time.
            </p>
            <strong>Local customer</strong>
          </div>
          <div className="review-card brand-card">
            <div className="stars">★★★★★</div>
            <p>
              Clean, professional, and straightforward pricing. Exactly what I was looking for.
            </p>
            <strong>Mobile service client</strong>
          </div>
          <div className="review-card brand-card">
            <div className="stars">★★★★★</div>
            <p>
              Great option for busy schedules. The service at my job site made it easy.
            </p>
            <strong>Colorado Springs area customer</strong>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-accent" />
        <div>
          <strong>OB Mobile Garage</strong>
          <p>Mobile oil change service for 80831 & surrounding areas.</p>
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
