import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, GET_TECHS } from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";

import "./Technologies.scss";
import { Skills } from "./components/Skills.component";
import { Techs } from "./components/Techs.component";

export function Technologies() {
  const {
    loading,
    techs: { data: techs },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!Object.keys(techs).length) {
      dispatch(getDataAction(GET_TECHS));
    }
  }, [techs, dispatch]);

  return (
    <main className="techs">
      {(loading && <Loader />) || (
        <>
          {techs.skills && <Skills skills={techs.skills} />}
          {techs.technologies && <Techs technologies={techs.technologies} />}
        </>
      )}
    </main>
  );
}
