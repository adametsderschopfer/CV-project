import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, GET_CERTS } from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";
import zoomInImg from "../../assets/images/zoom-in.svg";

import "./Certs.scss";

export function Certs() {
  const {
    loading,
    certs: { data: certs, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!certs.length) {
        dispatch(getDataAction(GET_CERTS));
      }
    }
  }, [certs, nothing, dispatch]);

  return (
    <main className="certs">
      <div className="certs--title title--page">Сертификаты</div>

      <div className="certs--content" uk-grid uk-lightbox="animation: slide">
        {(loading && <Loader />) ||
          (!nothing &&
            certs.length &&
            certs.map((i, idx) => (
              <a className="uk-inline certs--content__element" href={i.imglink}>
                <div className="certs--content__element-hovered">
                  <img src={zoomInImg} alt="" />
                </div>
                <img
                  src={i.imglink}
                  alt=""
                  className="certs--content__element-img"
                />
              </a>
            ))) || <div>Сертификатов пока нет {":("}</div>}
      </div>
    </main>
  );
}
