import React from "react";
import {withRouter} from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

function MenuItem({ title, subtitle, imageUrl, size, history, match, linkUrl }) {
  return (
    <MenuItemContainer
      large={size === "large"}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>{subtitle}</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
