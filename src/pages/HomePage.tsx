import { lazy, Suspense } from "react";
import { Hero } from "@/sections/Hero";

const WhyMOA = lazy(() => import("@/sections/WhyMOA").then(m => ({ default: m.WhyMOA })));
const RetailHorizontal = lazy(() => import("@/sections/RetailHorizontal").then(m => ({ default: m.RetailHorizontal })));
const Demographics = lazy(() => import("@/sections/Demographics").then(m => ({ default: m.Demographics })));
const ExperienceEcosystem = lazy(() => import("@/sections/ExperienceEcosystem").then(m => ({ default: m.ExperienceEcosystem })));
const PropertyBlueprint = lazy(() => import("@/sections/PropertyBlueprint").then(m => ({ default: m.PropertyBlueprint })));
const MediaNetwork = lazy(() => import("@/sections/MediaNetwork").then(m => ({ default: m.MediaNetwork })));
const SuccessStories = lazy(() => import("@/sections/SuccessStories").then(m => ({ default: m.SuccessStories })));
const VenueControl = lazy(() => import("@/sections/VenueControl").then(m => ({ default: m.VenueControl })));
const OpportunityHub = lazy(() => import("@/sections/OpportunityHub").then(m => ({ default: m.OpportunityHub })));
const Footer = lazy(() => import("@/sections/Footer").then(m => ({ default: m.Footer })));

export function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<div className="h-[50vh] bg-moa-black" />}>
        <WhyMOA />
        <RetailHorizontal />
        <Demographics />
        <ExperienceEcosystem />
        <PropertyBlueprint />
        <MediaNetwork />
        <SuccessStories />
        <VenueControl />
        <OpportunityHub />
        <Footer />
      </Suspense>
    </>
  );
}
