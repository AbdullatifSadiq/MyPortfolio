import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMoon, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" /><Span>Sadiq</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about" >
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" >
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" >
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http:/https://github.com/AbdullatifSadiq" target="_blank" rel="noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="http:/https://twitter.com/sadiq_abl" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/abdul-latif-sadiq" target="_blank" rel="noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons>
        <AiFillMoon size="3rem"/>
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;