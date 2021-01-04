import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, GET_BOOKS } from "../../StateManager/ducks/portfolio";

import { Loader } from "../../components/Loader/Loader.components";

import "./Books.scss";

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

  function renderBooks() {
    const readebleBooks = books.filter((i) => i.isReaded === true);
    const notReadebleBooks = books.filter((i) => i.isReaded !== true);

    const _renderBooks = (arr) =>
      arr.map((i, idx) => (
        <div
          className="books--content-readeble_container--els__element"
          key={idx}
        >
          <img
            src={i.img}
            alt=""
            className="books--content-readeble_container--els__element-img"
          />
        </div>
      ));

    return (
      <>
        {(readebleBooks.length && (
          <div className="books--content-readeble_container">
            <div className="books--content-readeble_container-title">
              Прочитанные
            </div>
            <div className="books--content-readeble_container--els">
              {_renderBooks(readebleBooks)}
            </div>
          </div>
        )) ||
          ""}
        {(notReadebleBooks.length && (
          <div className="books--content-readeble_container">
            <div className="books--content-readeble_container-title">
              В очереди на чтение
            </div>

            <div className="books--content-readeble_container--els">
              {_renderBooks(notReadebleBooks)}
            </div>
          </div>
        )) ||
          ""}
      </>
    );
  }

  return (
    <main className="books">
      <div className="books--title title--page">Книги</div>

      <div className="books--content">
        {(loading && <Loader />) ||
          (!nothing && books.length && renderBooks()) || (
            <div>Книг пока нет</div>
          )}
      </div>
    </main>
  );
}
