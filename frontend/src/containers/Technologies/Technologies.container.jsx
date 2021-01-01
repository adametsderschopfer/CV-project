import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataAction, GET_TECHS, 
} from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";

import "./Technologies.scss"

export function Technologies() {
  const {
    loading,
    techs: { data: techs, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!techs.length) {
        dispatch(getDataAction(GET_TECHS));
      }
    }
  }, [techs, nothing, dispatch]);


  return (
    <main className="techs">

    </main>
  )
}