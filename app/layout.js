import "./globals.css";

export const metadata = {
  title: "OB Mobile Garage",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
