import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { ReferenceDto } from './../../../Dto/References/Reference.dto';

type ReferencesDto = { references: ReferenceDto[] };

function Contacts(props: ReferencesDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="References" el="h2" margin={2} />

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
            <i className="material-icons">add_box</i>Add reference
          </div>
          <div className="collapsible-body">
            <form action="/admin/references/add" method="POST">
              <div className="input-field col s6">
                <input
                  id="reference_name"
                  name="name"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="reference_name">References name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="reference_link"
                  name="link"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="reference_link">References link</label>
              </div>

              <button type="submit" className="waves-effect waves-light btn">
                Add References
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.references.length ? (
          props.references.map((reference) => (
            <li className="collection-item" key={reference.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div
                  className="column b"
                  style={{ display: 'flex', maxWidth: '300px' }}
                >
                  <p>
                    <b>Reference Name: </b> {reference.name}
                  </p>
                  <p>
                    <b>Reference Link: </b>
                    <a href={reference.link}>{reference.link}</a>
                  </p>
                </div>

                <ul className="collapsible">
                  <li>
                    <div
                      className="collapsible-header df"
                      style={{ color: '#000' }}
                    >
                      <i className="material-icons">library_books</i>Edit
                      workExp
                    </div>
                    <div className="collapsible-body">
                      <form
                        action={`/admin/references/edit`}
                        method="POST"
                        className="b"
                      >
                        <div className="input-field col s6">
                          <input
                            id="reference_name"
                            name="name"
                            type="text"
                            defaultValue={reference.name}
                            required
                            className="b"
                            minLength={1}
                          />
                          <label htmlFor="reference_name">
                            References name
                          </label>
                        </div>
                        <div className="input-field col s6">
                          <input
                            id="reference_link"
                            name="link"
                            type="text"
                            defaultValue={reference.link}
                            required
                            className="b"
                            minLength={1}
                          />
                          <label htmlFor="reference_link">
                            References link
                          </label>
                        </div>

                        <input
                          type="hidden"
                          name="id"
                          defaultValue={reference.id}
                        />

                        <div className="divider mt-1"></div>
                        <button
                          type="submit"
                          className="waves-effect waves-light btn mt-2"
                        >
                          Edit reference
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>
                <a
                  href={`/admin/references/delete/${reference.id}`}
                  className="secondary-content"
                  target="blank"
                >
                  <i className="material-icons">delete_forever</i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>Reference not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Contacts;
