import React from "react";
import SvgLogocmp from "../svg/svglogo";
import { AppRoute } from "/src/const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
     <SvgLogocmp />
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <SvgLogocmp />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
