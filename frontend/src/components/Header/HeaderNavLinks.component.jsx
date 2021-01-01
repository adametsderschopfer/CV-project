import { NavLink } from "react-router-dom";

export function HeaderNavLinks({ classes = "" }) {
  return (
    <nav className={`header--menu--nav ${classes}`}>
      <NavLink
        activeClassName="header--menu__item-active"
        to="/"
        exact={true}
        className="header--menu__item"
      >
        Главная
      </NavLink>

      <NavLink
        activeClassName="header--menu__item-active"
        to="/about"
        className="header--menu__item"
      >
        Обо мне
      </NavLink>

      <NavLink
        activeClassName="header--menu__item-active"
        to="/contacts"
        className="header--menu__item"
      >
        Контакты
      </NavLink>
      <button
        className="header--menu__item header--menu__item--more__button"
        type="button"
      >
        Более
      </button>
      <div uk-dropdown="pos: bottom">
        <ul className="uk-nav uk-dropdown-nav">
          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/projects"
              className="header--menu__item header--menu__item--more__item"
            >
              Проекты
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/references"
              className="header--menu__item header--menu__item--more__item"
            >
              References
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/workexp"
              className="header--menu__item header--menu__item--more__item"
            >
              Опыт работы
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/certs"
              className="header--menu__item header--menu__item--more__item"
            >
              Сертификаты
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/technologies"
              className="header--menu__item header--menu__item--more__item"
            >
              Умения и Технологии
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="header--menu__item-active"
              to="/books"
              className="header--menu__item header--menu__item--more__item"
            >
              Книги
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
