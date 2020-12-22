import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { WorkExpirienceDto } from '../../../Dto/WorkExpirience/WorkExpirience.dto';
import Form from './components/Form';

type WorkExpiriencesDto = { expiriences: WorkExpirienceDto[] };

function WorkExpiriences(props: WorkExpiriencesDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Work Expirience" el="h2" margin={2} />

      <Form title="Add work expirience" to="workexpiriences/add">
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
      </Form>

      <ul className="collection with-header">
        {props.expiriences.length ? (
          props.expiriences.map((expirience) => (
            <li className="collection-item" key={expirience.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div className="df" style={{ maxWidth: '300px' }}>
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
                <Form to="workexpiriences/edit" title="Edit">
                  <div className="input-field col s6">
                    <input
                      id="tag"
                      name="tag"
                      defaultValue={expirience.tag}
                      type="text"
                      className="b"
                      required
                      minLength={1}
                    />
                    <label htmlFor="tag">Tag</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="companyName"
                      name="companyName"
                      defaultValue={expirience.companyName}
                      type="text"
                      className="b"
                      required
                      minLength={1}
                    />
                    <label htmlFor="companyName">Company name</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="termWork"
                      name="termWork"
                      defaultValue={expirience.termWork}
                      type="text"
                      className="b"
                      required
                      minLength={1}
                    />
                    <label htmlFor="termWork">Term of the work</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="position"
                      name="position"
                      defaultValue={expirience.position}
                      type="text"
                      className="b"
                      required
                      minLength={1}
                    />
                    <label htmlFor="position">Position</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="imglink"
                      name="imglink"
                      defaultValue={expirience.imglink}
                      type="text"
                      className="b"
                      minLength={1}
                    />
                    <label htmlFor="imglink">Img Link</label>
                  </div>

                  <input type="hidden" name="id" defaultValue={expirience.id} />
                </Form>
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

export default WorkExpiriences;
