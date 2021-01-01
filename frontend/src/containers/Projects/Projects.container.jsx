/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button.component";
import { Loader } from "../../components/Loader/Loader.components";
import {
  getDataAction,
  GET_PROJECTS,
} from "../../StateManager/ducks/portfolio";

import "./Projects.scss";

export function Projects() {
  const {
    loading,
    projects: { data: projects, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!projects.length) {
        dispatch(getDataAction(GET_PROJECTS));
      }
    }
  }, [projects, nothing, dispatch]);

  return (
    <main className="projects">
      <div className="projects__title title--page">Проекты</div>

      <div className="projects--container">
        {(loading && <Loader />) ||
          (!nothing &&
            projects.length &&
            projects.map((i, idx) => (
              <div className="projects--container__project" key={idx}>
                <div className="projects--container__project_text">
                  <div className="projects--container__project_text-title">
                    {i.title}
                  </div>
                  {(i.description && (
                    <div className="projects--container__project_text-description">
                      {i.description}
                    </div>
                  )) ||
                    ""}
                </div>
                <div className="projects--container__project_links">
                  {(i.website_link.length && (
                    <a
                      href={i.website_link}
                      className="projects--container__project_links-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="projects--container__project_links-link__btn">
                        Открыть сайт
                      </Button>
                    </a>
                  )) ||
                    ""}
                  {(i.repo_link.length && (
                    <a
                      href={i.repo_link}
                      className="projects--container__project_links-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="projects--container__project_links-link__btn">
                        Открыть репозиторий
                      </Button>
                    </a>
                  )) ||
                    ""}
                </div>
              </div>
            ))) || <div>Проектов пока нет.</div>}
      </div>
    </main>
  );
}
