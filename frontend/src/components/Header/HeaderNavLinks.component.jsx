import { NavLink } from "react-router-dom";

export function HeaderNavLinks({ classes = "" }) {
  function openMore() {
    return window.UIkit.dropdown(
      document.getElementById("dropdown-more")
    ).show();
  }

  function closeMore(isdesk) {
    return () => {
      let elem;

      if (isdesk) {
        elem = document.getElementById("dropdown-more");
      } else {
        elem = document.getElementById("dropdown-menu");
      }

      window.UIkit.dropdown(document.getElementById("dropdown-more")).hide();

      window.UIkit.dropdown(elem).hide();
    };
  }

  return (
    <nav className={`header--menu--nav ${classes}`}>
      <NavLink
        activeClassName="header--menu__item-active"
        to="/"
        exact={true}
        className="header--menu__item"
        onClick={closeMore()}
      >
        Главная
      </NavLink>

      <NavLink
        activeClassName="header--menu__item-active"
        to="/about"
        className="header--menu__item"
        onClick={closeMore()}
      >
        Обо мне
      </NavLink>

      <NavLink
        activeClassName="header--menu__item-active"
        to="/contacts"
        className="header--menu__item"
        onClick={closeMore()}
      >
        Контакты
      </NavLink>
      <button
        className="header--menu__item header--menu__item--more__button"
        type="button"
        onClick={openMore}
      >
        Более
      </button>
      <div uk-dropdown="pos: bottom" id="dropdown-more">
        <ul className="uk-nav uk-dropdown-nav">
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/workexp"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              Опыт работы
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/projects"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              Проекты
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/technologies"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              Умения и Технологии
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/certs"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              Сертификаты
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/books"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              Книги
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/references"
              className="header--menu__item header--menu__item--more__item"
              onClick={closeMore(true)}
            >
              References
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
