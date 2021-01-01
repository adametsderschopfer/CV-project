import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataAction, GET_BOOKS, 
} from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";

import "./Books.scss"

export function Books() {
  const {
    loading,
    books: { data: books, nothing },
  } = useSelector((state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!nothing) {
      if (!books.length) {
        dispatch(getDataAction(GET_BOOKS));
      }
    }
  }, [books, nothing, dispatch]);


  return (
    <main className="books">

    </main>
  )
}