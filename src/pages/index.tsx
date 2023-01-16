// import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Welcome from "@/components/Welcome";
import { hero } from "@/data";

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Welcome
        welcome={hero.welcome}
        heading={hero.heading}
        description={hero.description}
        button1={hero.button1}
        button2={hero.button2}
      />
    </Main>
  );
};

export default Index;
