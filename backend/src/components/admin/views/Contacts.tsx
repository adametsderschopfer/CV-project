import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { ContactDto } from '../../../Dto/contactsDto/Contact.dto';

type ContactsDto = { contacts: ContactDto[] };

function Contacts(props: ContactsDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Contacts" el="h2" margin={2} />

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
            <i className="material-icons">add_box</i>Add contact
          </div>
          <div className="collapsible-body">
            <form action="/admin/contacts/add" method="POST">
              <div className="input-field col s6">
                <input
                  id="where"
                  name="where"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="where">Where</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  minLength={3}
                />
                <label htmlFor="contact">Short text {'(contact)'}</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="link"
                  name="link"
                  type="text"
                  required
                  minLength={3}
                />
                <label htmlFor="link">Link</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Add contact
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.contacts.length ? (
          props.contacts.map((contact) => (
            <li className="collection-item" key={contact.id}>
              <div>
                <div
                  className="df fw"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div
                    className="df"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <b style={{ color: '#000' }}>{contact.where}</b>
                    <div className="vertical_line"></div>
                    <a href={contact.link} target="_blank">
                      {contact.contact}
                    </a>
                  </div>
                  <ul className="collapsible">
                    <li>
                      <div
                        className="collapsible-header df"
                        style={{ color: '#000' }}
                      >
                        <i className="material-icons">library_books</i>Edit
                        contact
                      </div>
                      <div className="collapsible-body">
                        <form
                          action={`/admin/contacts/edit`}
                          method="POST"
                          className="b"
                        >
                          <div className="input-field col s6">
                            <input
                              id="where"
                              name="where"
                              className="b"
                              type="text"
                              required
                              minLength={1}
                              defaultValue={contact.where}
                            />
                            <label htmlFor="where">Where</label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="contact"
                              name="contact"
                              className="b"
                              type="text"
                              required
                              minLength={3}
                              defaultValue={contact.contact}
                            />
                            <label htmlFor="contact">
                              Short text {'(contact)'}
                            </label>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="link"
                              name="link"
                              className="b"
                              type="text"
                              required
                              minLength={3}
                              defaultValue={contact.link}
                            />
                            <label htmlFor="link">Link</label>
                          </div>
                          <input
                            type="hidden"
                            name="id"
                            defaultValue={contact.id}
                          />

                          <div className="divider mt-1"></div>
                          <button
                            type="submit"
                            className="waves-effect waves-light btn mt-2"
                          >
                            Edit contact
                          </button>
                        </form>
                      </div>
                    </li>
                  </ul>

                  <a
                    href={`/admin/contacts/delete/${contact.id}`}
                    className="secondary-content"
                  >
                    <i className="material-icons">delete_forever</i>
                  </a>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>Contacts not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Contacts;
