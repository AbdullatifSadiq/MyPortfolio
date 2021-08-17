import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Button } from './TimeLineStyles';

const Timeline = () => {

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a software engineer with 2 years of experience, currently specializing in web development. I work a lot with HTML, CSS, Bootstrap,Javascript and React to build web applications.<br />
        Currently, I am a part of a team of two as a front-end developer where I focus on building the client side of the application. To know more please download my CV.
      </SectionText>
      <Button download href="/CV/abdulLatifSadiq.pdf" target="_blank" rel="noreferrer">
        Download CV</Button>
    </Section>
  );
};

export default Timeline;
