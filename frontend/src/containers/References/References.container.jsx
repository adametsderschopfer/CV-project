import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader.components";
import {
  getDataAction,
  GET_REFERENCES,
} from "../../StateManager/ducks/portfolio";
import anime from "animejs";

import "./References.scss";
import ReferenceImg from "../../assets/images/References";

export function References() {
  const {
    loading,
    references: { data: references, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!references.length) {
        dispatch(getDataAction(GET_REFERENCES));
      }
    }
  }, [references, nothing, dispatch]);

  useEffect(() => {
    anime({
      targets: ".references--img",
      scale: 1,
      rotate: "1turn",

      duration: 1600,
      easing: "spring(1, 60, 5, 10",
    });
  });

  return (
    <main className="references">
      <div className="references__container">
        <div className="references--text">
          <div className="title--page">References</div>
          <div className="references--text-content">
            {loading ? (
              <Loader />
            ) : (
              (!nothing &&
                references.length &&
                references.map((i, idx) => (
                  <div className="references--text-reference" key={idx}>
                    <div className="references--text-reference" key={idx}>
                      <p className="references--text-reference__where">
                        <b>{i.name}</b>:&nbsp;
                      </p>
                      <a
                        className="references--text-references__link"
                        target="__blank"
                        href={i.link}
                      >
                        {i.link}
                      </a>
                    </div>
                  </div>
                ))) || <div>Рефов пока нет.</div>
            )}
          </div>
        </div>

        <ReferenceImg cls="references--img" />
      </div>
    </main>
  );
}
