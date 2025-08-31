import { Footer, Header, Hero } from "compositions";
import { AllProviders } from "data";
import { TextContentTitle } from "primitives";
import { FAQs } from "./examples/FAQs";

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
      <FAQs />
      <Footer />
    </AllProviders>
  );
}

export default App;
