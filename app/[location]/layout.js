export default function LocationRootLayout({
  children,
  aqi,
  weather,
  wind,
  temparature,
}) {
  return (
    <div>
      {children}
      {aqi}
      {temparature}
      {weather}
      {wind}
    </div>
  );
}
