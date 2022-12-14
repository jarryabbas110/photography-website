import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image } from "../Styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to Make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="image" />
      </Image>
    </About>
  );
};

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
