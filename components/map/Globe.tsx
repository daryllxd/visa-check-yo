"use client";

import { useEffect, useRef, useState } from "react";
import ReactGlobe from "react-globe.gl";
// Import will be handled dynamically

// Sample data of countries with different visa statuses
const SAMPLE_COUNTRIES = [
  {
    id: "us",
    name: "United States",
    lat: 37.0902,
    lng: -95.7129,
    status: "visa-required",
  },
  {
    id: "ca",
    name: "Canada",
    lat: 56.1304,
    lng: -106.3468,
    status: "visa-free",
  },
  {
    id: "uk",
    name: "United Kingdom",
    lat: 55.3781,
    lng: -3.436,
    status: "visa-on-arrival",
  },
  { id: "fr", name: "France", lat: 46.2276, lng: 2.2137, status: "visa-free" },
  { id: "jp", name: "Japan", lat: 36.2048, lng: 138.2529, status: "e-visa" },
  {
    id: "au",
    name: "Australia",
    lat: -25.2744,
    lng: 133.7751,
    status: "visa-required",
  },
];

const Globe = () => {
  const globeRef = useRef(null);
  const [countries, setCountries] = useState([]);
  const [windowSize, setWindowSize] = useState({ width: 800, height: 600 });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: 600, // Fixed height, adjust as needed
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch country data
  useEffect(() => {
    // In a real app, you'd fetch this data from your API
    setCountries(SAMPLE_COUNTRIES);
  }, []);

  // Control auto-rotation
  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
    }
  }, [ReactGlobe]); // Only set auto-rotate after Globe is loaded

  const getStatusColor = (status) => {
    switch (status) {
      case "visa-free":
        return "rgba(0, 255, 0, 0.8)";
      case "visa-on-arrival":
        return "rgba(255, 255, 0, 0.8)";
      case "e-visa":
        return "rgba(0, 128, 255, 0.8)";
      case "visa-required":
        return "rgba(255, 0, 0, 0.8)";
      default:
        return "rgba(200, 200, 200, 0.8)";
    }
  };

  if (!ReactGlobe) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p>Loading globe visualization...</p>
      </div>
    );
  }

  return (
    <ReactGlobe
      ref={globeRef}
      height={windowSize.height}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={countries}
      pointLat="lat"
      pointLng="lng"
      pointColor={(d) => getStatusColor(d.status)}
      pointRadius={0.5}
      pointAltitude={0.07}
      pointLabel={(d) => `
        <div class="bg-black/80 text-white p-2 rounded-md text-xs">
          <strong>${d.name}</strong><br />
          Status: ${d.status.replace("-", " ")}
        </div>
      `}
      pointsTransitionDuration={1000}
    />
  );
};

export default Globe;
