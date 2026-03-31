"use client";

export default function Home() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSd20d5t6hz5zERi--BNJwqKnApidcb5_PDbZrpSv5teCtq4_A/viewform?embedded=true";

  return (
    <div>
      <h1>OB Mobile Garage</h1>
      <p>Mobile oil change service</p>

      <button onClick={scrollToBooking}>Request Booking</button>

      <section id="booking" style={{ marginTop: "50px" }}>
        <iframe
          src={formLink}
          width="100%"
          height="1000"
          style={{ border: "none" }}
        />
      </section>

      <a
        href="tel:7192860067"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "black",
          color: "white",
          padding: "10px 15px",
          borderRadius: "20px",
        }}
      >
        Call / Text
      </a>
    </div>
  );
}
