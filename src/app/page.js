import Hero from "@/components/hero/Hero";
import LatestGuides from "@/components/latestGuides/LatestGuides";
import Places from "@/components/places/Places";
import RoadTrips from "@/components/road-trips/RoadTrips";
import Welcome from "@/components/welcome/Welcome";
import Captures from "@/components/captures/Captures";
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Places />
      <LatestGuides />
      <Captures />
      <RoadTrips />
    </>
  );
}
