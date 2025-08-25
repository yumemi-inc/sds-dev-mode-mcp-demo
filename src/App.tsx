import { Footer, Header, Hero } from "compositions";
import { AllProviders } from "data";
import { TextContentTitle } from "primitives";
import { FAQs } from "./examples/FAQs";
import { PricingGrid } from "./examples/PricingGrid";

function App() {
  return (
    <AllProviders>
      <Header />
      <Hero>
        <TextContentTitle
          align="center"
          title="Title"
          subtitle="Subtitle"
        />
      </Hero>
      <PricingGrid />
      <FAQs />
      <Footer />
    </AllProviders>
  );
}

export default App;
