import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Button } from '../TimeLine/TimeLineStyles';
// import { Button } from './TimeLineStyles';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>
      Project
    </SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, visit, tags }) => (
        <BlogCard key={id}>
          <img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>
              Stack
            </TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))
              }
            </TagList>
            <UtilityList>
              <Button href={visit} target="_blank" rel="noreferrer">Visit</Button>
            </UtilityList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;