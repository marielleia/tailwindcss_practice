import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Toolbar } from "./components/Toolbar";
import { tesla_images } from "./images/tesla_images";

function App() {
  return (
    <div>
      <Section bg={tesla_images.model_3}>
        <Hero title="Model 3" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
      <Section bg={tesla_images.model_y}>
        <Hero title="Model Y" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
      <Section bg={tesla_images.model_x}>
        <Hero title="Model X" subtitle="Order Online for Touchless Delivery" />
        <Toolbar />
      </Section>
    </div>
  );
}

export default App;