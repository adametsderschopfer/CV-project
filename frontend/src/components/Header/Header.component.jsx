import { useEffect, useState } from "react";

import anime from "animejs";

import { HeaderMobile } from "./Header-mobile.component";
import { HeaderNavLinks } from "./HeaderNavLinks.component";
import { HeaderSocial } from "./Header-social.component";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Header.scss";

export function Header() {
  const [countOne, setCountOne] = useState(0);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (countOne === 0) {
      if (width >= 700) {
        anime({
          targets: ".animateSvg",
          strokeDashoffset: [anime.setDashoffset, 1],
          easing: "linear",
          duration: 1000,
          delay: function (el, i) {
            return i * 350;
          },
        });

        setCountOne(1);
      }
    } else if (width < 700) {
      setCountOne(0);
    }
  }, [width, countOne]);

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
