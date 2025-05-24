export default function LocationRootLayout({ children, aqi }) {
  return (
    <div>
      {children}
      {aqi}
    </div>
  );
}
