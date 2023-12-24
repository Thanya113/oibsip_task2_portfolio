import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Full Stack Developer"}
            disc={`Mastering the art of both front-end and back-end technologies, I craft seamless and responsive web applications. Proficient in React.js, Node.js, and MongoDB, I bring versatility and innovation to every layer of the development stack.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Android App Developer"}
            disc={`Pioneering the mobile realm, I am adept in Flutter and Dart, delivering cross-platform excellence in Android app development. With a keen eye for UI/UX design and a solid foundation in mobile technologies, I transform ideas into feature-rich, visually appealing, and high-performance mobile applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"ReactJS Developer"}
            disc={`As a dedicated React.js enthusiast, I specialize in building dynamic and interactive user interfaces. Leveraging my expertise in JavaScript, HTML, CSS, and Bootstrap, I create engaging and visually stunning front-end experiences that captivate users and elevate the overall user experience.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
