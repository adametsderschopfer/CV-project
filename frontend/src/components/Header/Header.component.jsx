import { HeaderMobile } from "./Header-mobile.component";
import { HeaderNavLinks } from "./HeaderNavLinks.component";
import { HeaderSocial } from "./Header-social.component";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Header.scss";

export function Header() {
  const { width } = useWindowDimensions();

  if (width <= 700) {
    return (
      <header className="header">
        <HeaderMobile />
      </header>
    );
  }

  return (
    <header className="header">
      <HeaderSocial />

      <div className="header--menu">
        <HeaderNavLinks />
      </div>
    </header>
  );
}
