import { HeaderNavLinks } from "./HeaderNavLinks.component";
import { HeaderSocial } from "./Header-social.component";

import "./Header.scss";

export function HeaderMobile() {
  return (
    <div className="header--mobile">
      <HeaderSocial classes="header--mobile__menu-svg" />
      <button className="header--mobile__button">
        <span uk-icon="icon: grid; ratio: 1.5"></span>
      </button>

      <div uk-drop="pos: bottom; animation: uk-animation-slide-top-small; duration: 1000; mode: click">
        <div className="uk-card uk-card-body uk-card-default">
          <HeaderNavLinks classes="header--mobile__menu" />
        </div>
      </div>
    </div>
  );
}
