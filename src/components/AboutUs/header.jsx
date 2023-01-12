import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.scss';
import { LinkButton, ButtonContainer } from '@site/src/theme/LinkButton';

export default function AboutUsHeader() {
  return (
    <div className="container">
      <div className={styles.box}>
        <h1>
          We create <span className={styles.header}>open source</span>,<br/>
          AI-first infrastructure.
        </h1>
        <p className="text-center">
          We believe that the next wave of software infrastructure is AI-first and that a strong open-source community is a basis for creating high-quality software.
        </p>
        <p className="text-center">
          Our flagship product is the vector search engine Weaviate.
        </p>
      </div>

      <ButtonContainer>
        <LinkButton link="#our_company_values" newTab={false}>Our Values</LinkButton>
        <LinkButton link="#meet_the_team" newTab={false}>Meet the Team</LinkButton>
        {/* TODO: make it a redirect to blog with meta tag */}
        {/* <LinkButton>How We Work</LinkButton> */}
      </ButtonContainer>
    </div>
  );
}
