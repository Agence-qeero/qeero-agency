import React from 'react';
import Hero from '../components/Hero';
import ClientStrip from '../components/ClientStrip';
import StatsBar from '../components/StatsBar';
import Portfolio from '../components/Portfolio';
import HowItWorks from '../components/HowItWorks';
import ComparisonTable from '../components/ComparisonTable';
import AboutCEO from '../components/AboutCEO';
import BuildYourPlan from '../components/BuildYourPlan';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CoverageMap from '../components/CoverageMap';
import InteractivePlayground from '../components/InteractivePlayground';
import FounderVideo from '../components/FounderVideo';

const Home = () => {
  return (
    <>
      <Hero />
      <ClientStrip />
      <StatsBar />
      <InteractivePlayground />
      <Portfolio />
      <AboutCEO />
      <FounderVideo />
      <HowItWorks />
      <ComparisonTable />
      <BuildYourPlan />
      <Testimonials />
      <FAQ />
      <CoverageMap />
    </>
  );
};

export default Home;
