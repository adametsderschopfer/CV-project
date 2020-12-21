import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import { UpdateAboutmeDto } from './../../../Dto/Aboutme/UpdateContent.dto';

export default function Main(props: UpdateAboutmeDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>

      <HeadTitle title="About Me" el="h3" margin={2} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          M.textareaAutoResize(document.getElementById('textarea1'));
      `,
        }}
      ></script>

      <form action="/admin/aboutme/edit" method="POST">
        <div className="input-field col s12 mt-3">
          <textarea
            id="textarea1"
            className="materialize-textarea"
            defaultValue={props.content}
            name="content"
            required
            minLength={10}
          ></textarea>
          <label htmlFor="textarea1">Content {'{Markdown}'}</label>
        </div>

        <div className="input-field col s6">
          <input
            id="input_text"
            name="work_exp"
            type="text"
            step="any"
            defaultValue={props.work_exp}
            required
          />
          <label htmlFor="input_text">Work expirience {'(year.month)'} </label>
        </div>

        <div className="input-field col s6">
          <input
            id="input_text"
            name="projects_count"
            type="text"
            step="any"
            defaultValue={props.projects_count}
            required
          />
          <label htmlFor="input_text">Projects count</label>
        </div>

        <div className="center mt-2">
          <button type="submit" className="waves-effect waves-light btn">
            Edit 'About Me'
          </button>
        </div>
      </form>
    </Layout>
  );
}
