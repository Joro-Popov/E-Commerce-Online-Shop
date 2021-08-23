import React from "react";
import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directory';

export default function HomePage(props) {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
