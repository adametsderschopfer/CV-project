import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getDataAction,
  GET_CONTACTS,
} from "../../StateManager/ducks/portfolio";

import anime from "animejs";

import AboutImg from "../../assets/images/about.jsx";

import "./Contacts.scss";
import { Loader } from "../../components/Loader/Loader.components";
import { CANCEL_IS_ERROR, sendEmail } from "../../StateManager/ducks/contact";

export function Contacts() {
  const { formLoading, isError, msg, sended } = useSelector(
    (state) => state.contact
  );
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    content: ``,
  });

  const {
    loading,
    contacts: { data: contacts, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!contacts.length) {
      dispatch(getDataAction(GET_CONTACTS));
    }
  }, [contacts, dispatch]);

  useEffect(() => {
    anime({
      targets: ".contacts--img",
      scale: 1,
      rotate: "1turn",

      duration: 1600,
      easing: "spring(1, 60, 5, 10",
    });
  });

  useEffect(() => {
    if (isError || sended) {
      window.UIkit.notification({
        message: msg,
        pos: "top-left",
        status: sended ? "success" : isError ? "warning" : "",
      });
    }
  }, [isError, sended, msg]);

  function setFormData_i_(e) {
    if (isError) {
      dispatch({ type: CANCEL_IS_ERROR });
    }

    setFormData((prevObj) => ({ ...prevObj, [e.target.name]: e.target.value }));
  }

  function formEmailSubmit(e) {
    e.preventDefault();

    const { email, name, content } = formData;

    if (email && name && content) {
      if (!sended) if (!isError) dispatch(sendEmail(formData));
    }
  }

  return (
    <main className="contacts">
      <div className="contacts__container">
        <div className="contacts--text">
          <div className="title--page">Связаться со мной</div>
          <div className="contacts--text-content">
            {loading ? (
              <Loader />
            ) : (
              (!nothing &&
                contacts.length &&
                contacts.map((i, idx) => (
                  <div className="contacts--text-contact" key={idx}>
                    <p className="contacts--text-contact__where">
                      <b>{i.where}</b>:&nbsp;
                    </p>
                    <a
                      className="contacts--text-contact__link"
                      target="__blank"
                      href={i.link}
                    >
                      {i.contact}
                    </a>
                  </div>
                ))) || <div>Контактов пока нет</div>
            )}
          </div>

          <div className="title--page contacts--text__form_title">
            Форма обратной связи
          </div>
          <form className="contacts--text__form" onSubmit={formEmailSubmit}>
            <fieldset className="uk-fieldset">
              <div className="uk-margin">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" uk-icon="icon: mail"></span>
                  <input
                    className={`uk-input ${sended && "uk-button-secondary"}`}
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={setFormData_i_}
                    disabled={sended}
                    required
                  />
                </div>
              </div>

              <div className="uk-margin">
                <input
                  className={`uk-input ${sended && "uk-button-secondary"}`}
                  type="phone"
                  name="phone"
                  placeholder="Телефон"
                  onChange={setFormData_i_}
                  disabled={sended}
                  required
                  minLength={3}
                  maxLength={15}
                />
              </div>

              <div className="uk-margin">
                <input
                  className={`uk-input ${sended && "uk-button-secondary"}`}
                  type="text"
                  name="name"
                  placeholder="Как к вам обращаться?"
                  onChange={setFormData_i_}
                  disabled={sended}
                  required
                  minLength={2}
                />
              </div>

              <div className="uk-margin">
                <textarea
                  className={`uk-textarea ${sended && "uk-button-secondary"}`}
                  rows={5}
                  name="content"
                  placeholder="Сообщение"
                  onChange={setFormData_i_}
                  disabled={sended}
                  minLength={30}
                  maxLength={5000}
                  style={{ resize: "vertical" }}
                  required
                ></textarea>
              </div>

              <button
                className={`uk-button uk-button-primary ${
                  (isError && "uk-button-danger") ||
                  (sended && "uk-button-secondary")
                }`}
                disabled={formLoading}
              >
                {(sended && "Отправленно") || "Отправить"}
              </button>
            </fieldset>
          </form>
        </div>

        <AboutImg cls="contacts--img" />
      </div>
    </main>
  );
}
