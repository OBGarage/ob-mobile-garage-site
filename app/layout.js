import "./globals.css";

export const metadata = {
  title: "OB Mobile Garage",
  description: "Mobile oil change service for 80831 and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
