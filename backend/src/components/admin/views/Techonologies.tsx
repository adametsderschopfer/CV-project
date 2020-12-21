import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { TechnologyDto } from 'src/Dto/Technologies/Technology.dto';
import { SkillDto } from 'src/Dto/Technologies/Skill.dto';

type TechnologiesDto = {
  technologies: {
    technologies: TechnologyDto[];
    skills: SkillDto[];
  };
};

function Contacts(props: TechnologiesDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Technologies" el="h2" margin={2} />

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
            <i className="material-icons">add_box</i>Add Skill
          </div>
          <div className="collapsible-body">
            <form
              action="/admin/technologies/add/skill"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="file-field input-field">
                <div className="btn">
                  <span>Add Skill img</span>
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

              <div className="input-field col s6">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="name">Skill name</label>
              </div>

              <p className="range-field">
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  name="skillPercent"
                />
              </p>

              <button type="submit" className="waves-effect waves-light btn">
                Add Skill
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collapsible">
        <li>
          <div className="collapsible-header df" style={{ color: '#000' }}>
            <i className="material-icons">add_box</i>Add Technology
          </div>
          <div className="collapsible-body">
            <form
              action="/admin/technologies/add/technology"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="file-field input-field">
                <div className="btn">
                  <span>Add Technology img</span>
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
              <div className="input-field col s6">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="name">Technology name:</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Add Technology
              </button>
            </form>
          </div>
        </li>
      </ul>

      <div className="row_c" style={{ alignItems: 'flex-start' }}>
        <ul className="collection with-header">
          {props.technologies.skills.length ? (
            props.technologies.skills.map((skill) => (
              <li className="collection-item" key={skill.id}>
                <div>
                  <div
                    className="df fw"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div
                      className="column b"
                      style={{ display: 'flex', maxWidth: '300px' }}
                    >
                      <img
                        src={skill.img}
                        style={{
                          width: '300px',
                          height: '300px',
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                      <p>
                        <b>SKill name: </b>
                        {skill.name}
                      </p>
                      <p>
                        <b>Skill percent: </b>
                        {skill.skillPercent}
                      </p>
                      <ul className="collapsible">
                        <li>
                          <div
                            className="collapsible-header df"
                            style={{ color: '#000' }}
                          >
                            <i className="material-icons">library_books</i>Edit
                            skill
                          </div>
                          <div className="collapsible-body">
                            <form
                              action={`/admin/technologies/edit/skill`}
                              method="POST"
                              className="b"
                              encType="multipart/form-data"
                            >
                              <div className="file-field input-field">
                                <div className="btn">
                                  <span>Add Skill img</span>
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

                              <div className="input-field col s6">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  required
                                  className="b"
                                  minLength={1}
                                  defaultValue={skill.name}
                                />
                                <label htmlFor="name">Skill name</label>
                              </div>

                              <p className="range-field">
                                <input
                                  type="range"
                                  id="test5"
                                  min="0"
                                  max="100"
                                  name="skillPercent"
                                  defaultValue={skill.skillPercent}
                                />
                                <input
                                  type="hidden"
                                  name="id"
                                  defaultValue={skill.id}
                                />
                              </p>
                              <div className="divider mt-1"></div>
                              <button
                                type="submit"
                                className="waves-effect waves-light btn mt-2"
                              >
                                Edit skill
                              </button>
                            </form>
                          </div>
                        </li>
                      </ul>

                      <a
                        href={`/admin/technologies/delete/skill/${skill.id}`}
                        className="secondary-content"
                      >
                        <i className="material-icons">delete_forever</i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div>Skills not found yet.</div>
          )}
        </ul>

        <ul className="collection with-header">
          {props.technologies.technologies.length ? (
            props.technologies.technologies.map((technology) => (
              <li className="collection-item" key={technology.id}>
                <div>
                  <div
                    className="df fw"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div
                      className="column b"
                      style={{ display: 'flex', maxWidth: '300px' }}
                    >
                      <img
                        src={technology.img}
                        style={{
                          width: '300px',
                          height: '300px',
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                      <p>
                        <b>Technology name: </b>
                        {technology.name}
                      </p>

                      <ul className="collapsible">
                        <li>
                          <div
                            className="collapsible-header df"
                            style={{ color: '#000' }}
                          >
                            <i className="material-icons">library_books</i>Edit
                            technology
                          </div>
                          <div className="collapsible-body">
                            <form
                              action={`/admin/technologies/edit/technology`}
                              method="POST"
                              className="b"
                              encType="multipart/form-data"
                            >
                              <div className="file-field input-field">
                                <div className="btn">
                                  <span>Add Technology img</span>
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
                              <div className="input-field col s6">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  className="b"
                                  required
                                  minLength={1}
                                  defaultValue={technology.name}
                                />
                                <input
                                  type="hidden"
                                  name="id"
                                  defaultValue={technology.id}
                                />
                                <label htmlFor="name">Technology name:</label>
                              </div>
                              <div className="divider mt-1"></div>
                              <button
                                type="submit"
                                className="waves-effect waves-light btn mt-2"
                              >
                                Edit technology
                              </button>
                            </form>
                          </div>
                        </li>
                      </ul>

                      <a
                        href={`/admin/technologies/delete/technology/${technology.id}`}
                        className="secondary-content"
                      >
                        <i className="material-icons">delete_forever</i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div>Technologies not found yet.</div>
          )}
        </ul>
      </div>
    </Layout>
  );
}

export default Contacts;
