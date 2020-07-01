import React from "react";

import {
  Hero,
  Layout,
  SEO,
  BookContent,
  Pricing,
  FAQ,
  Testimonials,
  About,
} from "../components";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <BookContent />
      <Testimonials />
      <Pricing />
      <About />
      <FAQ />
    </Layout>
  );
}

export default IndexPage;
