import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span} from './HeaderStyles';

const Header = () =>  (

<Container>
<Div1>
      <Link href="/">
          <DiCssdeck size="3rem" /> 
          <Span>Portfolio</Span>
        
      </Link>
    </Div1>
<Div2>
  <li>
    <Link href='#projects'>
      <NavLink> Projects</NavLink>
    </Link>
  </li>
  <li>
    <Link href='#tech'>
      <NavLink> Technologies</NavLink>
    </Link>
  </li>
  <li>
    <Link href='#about'>
      <NavLink> Abouts</NavLink>
    </Link>
  </li>
</Div2>
<Div3>
  <SocialIcons href='http://www.github.com'>
      <AiFillGithub size="3rem"/>
  </SocialIcons>

  <SocialIcons href='http://www.linkedin.com'>
      <AiFillLinkedin size="3rem"/>
  </SocialIcons>

  <SocialIcons href='http://www.instagram.com'>
      <AiFillInstagram size="3rem"/>
  </SocialIcons>
</Div3>
</Container>


);

export default Header;
