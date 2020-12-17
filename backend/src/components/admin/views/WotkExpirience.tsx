import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { WorkExpirienceDto } from './../../../Dto/WorkExpirience/WorkExpirience.dto';

type WorkExpiriencesDto = { expiriences: WorkExpirienceDto[] };

function Contacts(props: WorkExpiriencesDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Work Expirience" el="h2" margin={2} />

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
            <i className="material-icons">add_box</i>Add Work Expirience
          </div>
          <div className="collapsible-body">
            <form action="/admin/workexpiriences/add" method="POST">
              <div className="input-field col s6">
                <input id="tag" name="tag" type="text" required minLength={1} />
                <label htmlFor="tag">Tag</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="companyName">Company name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="termWork"
                  name="termWork"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="termWork">Term of the work</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="position"
                  name="position"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="position">Position</label>
              </div>
              <div className="input-field col s6">
                <input id="imglink" name="imglink" type="text" minLength={1} />
                <label htmlFor="imglink">Img Link</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Add Work
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.expiriences.length ? (
          props.expiriences.map((expirience) => (
            <li className="collection-item" key={expirience.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div className="df">
                  <img
                    src={expirience.imglink}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <div
                    className="column"
                    style={{ display: 'flex', marginLeft: '15px' }}
                  >
                    <div style={{ color: 'gold' }}>
                      <b>Tag: </b> #{expirience.tag}
                    </div>
                    <div className="b">
                      <b>Company name:</b> {expirience.companyName}
                    </div>
                    <div className="b">
                      <b>Position: </b>
                      {expirience.position}
                    </div>
                    <div className="b">
                      <b>Term of the work:</b> {expirience.termWork}
                    </div>
                  </div>
                </div>
                <a
                  href={`/admin/workexpiriences/delete/${expirience.id}`}
                  className="secondary-content"
                >
                  <i className="material-icons">delete_forever</i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>Work Expiriences not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Contacts;
