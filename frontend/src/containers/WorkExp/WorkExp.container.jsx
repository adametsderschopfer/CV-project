import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataAction,
  GET_WORK_EXP,
} from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";
import { Button } from "../../components/Button/Button.component";

import "./WorkExp.scss";

export function WorkExp() {
  const {
    loading,
    workexps: { data: workexps, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!workexps.length) {
        dispatch(getDataAction(GET_WORK_EXP));
      }
    }
  }, [workexps, nothing, dispatch]);

  return (
    <main className="workexp">
      <div className="workexp__title title--page">Опыт работы</div>

      <div className="workexp-content">
        {(loading && <Loader />) ||
          (!nothing &&
            workexps.length &&
            workexps.map((i, idx) => (
              <div className="workexp-content__element" key={idx}>
                <div className="workexp-content__element-texts">
                  <div className="workexp-content__element-texts__tag">
                    {`#${i.tag.trim()}`}
                  </div>
                  <div className="workexp-content__element-texts__title">
                    Название:&nbsp;
                    <span>
                      {(i.companyName.trim().length < 10 &&
                        i.companyName.trim()) ||
                        i.companyName.trim().substring(0, 10).trim() + "..."}
                    </span>
                  </div>
                  <div className="workexp-content__element-texts__term">
                    Срок работы:&nbsp;
                    <span>
                      {(i.termWork.trim().length < 10 && i.termWork.trim()) ||
                        i.termWork.trim().substring(0, 10).trim() + "..."}
                    </span>
                  </div>
                  <div className="workexp-content__element-texts__position">
                    Должность/-ти:&nbsp;
                    <span>
                      {(i.position.trim().length < 10 && i.position.trim()) ||
                        i.position.trim().substring(0, 10).trim() + "..."}
                    </span>
                  </div>
                </div>

                <div className="workexp-content__element-img">
                  {("imglink" in i && i.imglink.length && (
                    <img src={i.imglink} alt="" />
                  )) || (
                    <div>
                      <div className="workexp-content__element-img--firstSymbol">
                        {i.companyName.trim()[0].toUpperCase()}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  uk-toggle={`target: #workexp_modal-${idx}`}
                  className="workexp-content__element__btn-description"
                >
                  Показать полностью
                </button>

                <div id={`workexp_modal-${idx}`} uk-modal="true">
                  <div className="uk-modal-dialog uk-modal-body workexp-content__element--modal">
                    <div className="workexp-content__element-img">
                      {("imglink" in i && i.imglink.length && (
                        <img src={i.imglink} alt="" />
                      )) || (
                        <div>
                          <div className="workexp-content__element-img--firstSymbol">
                            {i.companyName.trim()[0].toUpperCase()}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="workexp-content__element--modal-texts__tag">
                      {`#${i.tag.trim()}`}
                    </div>
                    <div className="workexp-content__element--modal-texts">
                      Название:&nbsp;<span>{i.companyName.trim()}</span>
                    </div>
                    <div className="workexp-content__element--modal-texts">
                      Срок работы:&nbsp;
                      <span>{i.termWork.trim()}</span>
                    </div>
                    <div className="workexp-content__element--modal-texts">
                      Должность/-ти:&nbsp;
                      <span>{i.position.trim()}</span>
                    </div>
                    <div className="descr">
                      <h3>Описание&nbsp;:</h3>
                      <div
                        className="workexp-content__element--modal-texts__description"
                        dangerouslySetInnerHTML={{ __html: i.description }}
                      ></div>
                    </div>
                    <Button className="uk-modal-close">Закрыть</Button>
                  </div>
                </div>
              </div>
            ))) || <div>Опыта работы пока нет {":("}</div>}
      </div>
    </main>
  );
}
