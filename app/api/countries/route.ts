import { NextResponse } from "next/server";

// This is a placeholder for future data integration
// In a real application, this would fetch data from a database or external API
export async function GET() {
  // Sample data - this would be replaced with real data in the future
  const countries = [
    {
      id: "us",
      name: "United States",
      region: "North America",
      visaFree: ["Canada", "Mexico", "United Kingdom"],
    },
    {
      id: "ca",
      name: "Canada",
      region: "North America",
      visaFree: ["United States", "United Kingdom", "France"],
    },
    {
      id: "uk",
      name: "United Kingdom",
      region: "Europe",
      visaFree: ["United States", "Canada", "European Union countries"],
    },
  ];

  return NextResponse.json({ countries });
}
