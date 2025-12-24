import featuresData from "../data/featureData";
import FeatureComponent from "../components/featureComponent";
import TrustedBy from "../components/trustedBy";

const Features = () => {
  return (
    <section className="bg-black px-6 py-16">
      
      
      <div className="mx-auto mb-20 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {featuresData.map((item) => (
            <FeatureComponent
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <TrustedBy />

    </section>
  );
};

export default Features;
