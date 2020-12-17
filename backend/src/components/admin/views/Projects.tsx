import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { ProjectDto } from './../../../Dto/WorkExpirience/Project.dto';
import { Repository } from 'typeorm';

type ProjectsDto = { projects: ProjectDto[] };

function Contacts(props: ProjectsDto & Props) {
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
            <i className="material-icons">add_box</i>Add Work Expirience
          </div>
          <div className="collapsible-body">
            <form action="/admin/projects/add" method="POST">
              <div className="input-field col s6">
                <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="description"
                  name="description"
                  type="text"
                  required
                  minLength={1}
                />
                <label htmlFor="description">Description</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="repo_link"
                  name="repo_link"
                  type="text"
                  minLength={1}
                />
                <label htmlFor="repo_link">Repository link</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="website_link"
                  name="website_link"
                  type="text"
                  minLength={1}
                />
                <label htmlFor="website_link">Website link</label>
              </div>
              <button type="submit" className="waves-effect waves-light btn">
                Add Work
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.projects.length ? (
          props.projects.map((project) => (
            <li className="collection-item" key={project.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div className="column b" style={{ display: 'flex' }}>
                  <p>
                    <b>Name: </b> {project.title}
                  </p>
                  <p>
                    <b>Description: </b>
                    <i style={{ maxWidth: 300, wordBreak: 'break-word' }}>
                      {project.description}
                    </i>
                  </p>
                  {project.repo_link && (
                    <p>
                      <b>Repository: </b>
                      <a href={project.repo_link} target="_blank">
                        {project.repo_link}
                      </a>
                    </p>
                  )}

                  {project.website_link && (
                    <p>
                      <b>Website: </b>
                      <a href={project.website_link} target="_blank">
                        {project.website_link}
                      </a>
                    </p>
                  )}
                </div>
                <a
                  href={`/admin/projects/delete/${project.id}`}
                  className="secondary-content"
                >
                  <i className="material-icons">delete_forever</i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>Projects not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Contacts;
