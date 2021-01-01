import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import anime from "animejs";

// import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "../../components/Button/Button.component";

import nameSvg from "../../assets/images/name.jsx";
import AboutImg from "../../assets/images/about.jsx";

import "./About.scss";
import { getDataAction, GET_ABOUT } from "../../StateManager/ducks/portfolio";
import { Loader } from "../../components/Loader/Loader.components";

export function About() {
  const { loading, about: { data: about } } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  // const { width } = useWindowDimensions();
  const age = new Date().getFullYear() - 2002;

  useEffect(() => {
    if (!Object.keys(about).length) {
      dispatch(getDataAction(GET_ABOUT));
    }
  }, [about, dispatch]);
  
  useEffect(() => {
    anime({
      targets: ".about__head-center",
      scale: 1,
      rotate: "1turn",

      duration: 1600,
      easing: "spring(1, 60, 5, 10",
    });

    anime({
      targets: ".about__head-name",
      scale: 1,

      duration: 800,
      easing: "spring(1, 80, 5, 10",
    });
  });

  return (
    <main className="about">
      <section className="about__head">
        {nameSvg}
        <AboutImg cls="about__head-center" />
        <div className="about__head--buttons">
          <NavLink to="/contacts" className="about__head--buttons-button">
            <Button bordered={true}>Связаться со мной</Button>
          </NavLink>
          <a
            className="about__head--buttons-button"
            href="https://kaliningrad.hh.ru/resume/31118886ff07f1c2a30039ed1f424a4b764567"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Смотреть резюме hh.ru</Button>
          </a>
        </div>
      </section>

      <section className="about__info">
        <div className="about__info--element">
          <div className="about__info--element_value">{age}</div>
          <div className="about__info--element_name">Возраст</div>
        </div>
        {about && about.projects_count && (
          <div className="about__info--element">
            <div className="about__info--element_value">
              {about.projects_count}
            </div>
            <div className="about__info--element_name">Кол-во проектов</div>
          </div>
        )}
        {about && about.work_exp && (
          <div className="about__info--element">
            <div className="about__info--element_value">{about.work_exp}</div>
            <div className="about__info--element_name">
              Общий опыт работы в IT
            </div>
          </div>
        )}
      </section>

      <section className="about__content">
        <div className="about-container">
          <h1 className="about__content--title">Обо мне</h1>
          {loading ? (
            <Loader />
          ) : (
            <ReactMarkdown plugins={[gfm]} children={about.content} />
          )}
        </div>
      </section>
    </main>
  );
}
