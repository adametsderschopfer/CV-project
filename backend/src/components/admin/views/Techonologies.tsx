import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { TechnologyDto } from '../../../Dto/Technologies/Technology.dto';
import { SkillDto } from '../../../Dto/Technologies/Skill.dto';
import Form from './components/Form';

type TechnologiesDto = {
  technologies: {
    technologies: TechnologyDto[];
    skills: SkillDto[];
  };
};

function Technologies(props: TechnologiesDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Technologies" el="h2" margin={2} />

      <Form
        title="Add skill"
        to="technologies/add/skill"
        formMore={{
          encType: 'multipart/form-data',
        }}
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
          <input id="name" name="name" type="text" required minLength={1} />
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
      </Form>

      <Form
        title="Add technology"
        to="technologies/add/technology"
        formMore={{
          encType: 'multipart/form-data',
        }}
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
          <input id="name" name="name" type="text" required minLength={1} />
          <label htmlFor="name">Technology name:</label>
        </div>
      </Form>

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
                    <div className="column listElem">
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
                      <Form
                        title="Edit skill"
                        to="technologies/edit/skill"
                        formMore={{ encType: 'multipart/form-data' }}
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
                      </Form>

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
                    <div className="column listElem">
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
                      <Form
                        title="Edit technology"
                        to="technologies/edit/technology"
                        formMore={{ encType: 'multipart/form-data' }}
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
                      </Form>

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

export default Technologies;
