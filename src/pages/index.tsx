import type { GetStaticProps, NextPage } from "next";

import Contact from "../components/Contact";
import Cursor from "../components/Mouse";
import { GET_ALL_DATA } from "../graphql/queries";
import Intro from "../components/welcome";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import MainProjects from "../components/MainProjects";
import Skills from "../components/Skills";
import Who from "../components/Who";
import { allDataType } from "../shared/types";
import { client } from "../graphql/client";
import { useRef } from "react";
import { Heading1, Heading2, SectionTitle } from "../components/Text/Text";
import { Spacer } from "../components/Spacer/Spacer";
import { Container } from "../components/Container/Container";

interface HomeProps {
  data: allDataType;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <Cursor />

      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills />
        <MainProjects projects={data.projects} />
        <Contact />

        <Container>
          <SectionTitle>Headings</SectionTitle>
          <Spacer size={32} />
          <Heading1>Heading 1</Heading1>
          <Spacer size={32} />
          <Heading2>Heading 2</Heading2>
          <Spacer size={32} />
          <SectionTitle>Colors</SectionTitle>
          <Spacer size={32} />
          <div
            style={{ padding: "50px", backgroundColor: `var(--color-purple)` }}
          ></div>
          <Spacer size={16} />
          <div
            style={{
              padding: "50px",
              backgroundColor: `var(--color-venetian)`,
            }}
          ></div>
        </Container>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request(GET_ALL_DATA);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
