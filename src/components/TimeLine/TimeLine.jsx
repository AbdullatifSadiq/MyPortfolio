import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Button } from './TimeLineStyles';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a software engineer with 3 years of experience with solid computer
        science background. I'm currently specializing in front-end web
        development where I focus on building the fast and responsive web
        application.
        {/* I use HTML, CSS, Tailwind ,Javascript, Typescript and React to build fast and responsive web applications.<br />  */}{' '}
        <br />
        To know more please download my CV here.
      </SectionText>
      <Button
        download
        href='/CV/abdulLatifSadiq.pdf'
        target='_blank'
        rel='noreferrer'
      >
        Download CV
      </Button>
    </Section>
  );
};

export default Timeline;
