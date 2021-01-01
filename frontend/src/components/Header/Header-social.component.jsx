import vk from "../../assets/images/icons/vk";
import telegram from "../../assets/images/icons/telegram";
import github from "../../assets/images/icons/github";

export function HeaderSocial({ classes = "" }) {
  return (
    <div className={`header--social ${classes}`}>
      <a
        href="https://vk.com/adametsofficial"
        className="header--social__item"
        target="_blank"
        rel="noreferrer"
      >
        {vk}
      </a>

      <a
        href="https://telegram.me/adametsofficial"
        className="header--social__item"
        target="_blank"
        rel="noreferrer"
      >
        {telegram}
      </a>

      <a
        href="https://github.com/adametsofficial"
        target="_blank"
        rel="noreferrer"
        className="header--social__item"
      >
        {github}
      </a>
    </div>
  );
}
