import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { BookDto } from './../../../Dto/Books/Book.dto';

type BooksDto = { books: BookDto[] };

function Contacts(props: BooksDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Books" el="h2" margin={2} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
         document.addEventListener('DOMContentLoaded', function() {
          M.Collapsible.init(document.querySelectorAll('.collapsible'));
         });
      `,
        }}
      ></script>

      <ul className="collapsible">
        <li>
          <div className="collapsible-header df" style={{ color: '#000' }}>
            <i className="material-icons">add_box</i>Add book
          </div>
          <div className="collapsible-body">
            <form
              action="/admin/books/add"
              method="POST"
              encType="multipart/form-data"
            >
              <div>
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Add book img</span>
                    <input type="file" multiple name="file" />
                  </div>
                  <div className="file-path-wrapper">
                    <input
                      className="file-path validate"
                      type="text"
                      placeholder="Upload one or more files"
                    />
                  </div>
                </div>

                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    defaultChecked={false}
                    name="isReaded"
                  />
                  <span>isReaded ?</span>
                </label>
              </div>
              <div className="divider mt-1"></div>
              <button
                type="submit"
                className="waves-effect waves-light btn mt-2"
              >
                Add Book
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.books.length ? (
          props.books.map((book) => (
            <li className="collection-item" key={book.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div className="column b" style={{ display: 'flex' }}>
                  <img
                    width="250"
                    height="300"
                    style={{ objectFit: 'cover' }}
                    src={book.img}
                    alt=""
                  />
                  <p>
                    <b>Book readed: </b> <i>{book.isReaded.toString()}</i>
                  </p>
                </div>

                <ul className="collapsible">
                  <li>
                    <div
                      className="collapsible-header df"
                      style={{ color: '#000' }}
                    >
                      <i className="material-icons">library_books</i>Set
                      isReaded
                    </div>
                    <div className="collapsible-body">
                      <form
                        action={`/admin/books/isReaded/${book.id}`}
                        method="POST"
                        className="b"
                      >
                        <label>
                          <p>
                            <label className="b">
                              <input
                                name="isReaded"
                                type="radio"
                                defaultChecked={
                                  book.isReaded.toString() == 'true'
                                }
                                defaultValue="true"
                              />
                              <span>Yes</span>
                            </label>
                          </p>
                          <p>
                            <label className="b">
                              <input
                                name="isReaded"
                                type="radio"
                                defaultChecked={
                                  book.isReaded.toString() == 'false'
                                }
                                defaultValue="false"
                              />
                              <span>No</span>
                            </label>
                          </p>
                          <span>isReaded ?</span>
                        </label>
                        <div className="divider mt-1"></div>
                        <button
                          type="submit"
                          className="waves-effect waves-light btn mt-2"
                        >
                          Edit readed
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>

                <a
                  href={`/admin/books/delete/${book.id}`}
                  className="secondary-content"
                >
                  <i className="material-icons">delete_forever</i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>Books not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Contacts;
