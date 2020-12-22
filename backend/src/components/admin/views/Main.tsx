import * as React from 'react';
import Layout from './components/Layout';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';

export default function Main(props: Props) {
  return (
    <Layout title={props.title}>
      <HeadTitle title="Admin panel" />

      <div className="row_c">
        <a className="waves-effect waves-light btn" href="/admin/aboutme">
          About Me
        </a>

        <a href="/admin/books" className="waves-effect waves-light btn">
          Books
        </a>

        <a href="/admin/certificates" className="waves-effect waves-light btn">
          Certificates
        </a>

        <a href="/admin/technologies" className="waves-effect waves-light btn">
          Technologies
        </a>

        <a className="waves-effect waves-light btn" href="/admin/references">
          References
        </a>

        <a href="/admin/projects" className="waves-effect waves-light btn">
          Projects
        </a>

        <a
          href="/admin/workexpiriences"
          className="waves-effect waves-light btn"
        >
          Work Expiriences
        </a>

        <a href="/admin/contacts" className="waves-effect waves-light btn">
          Contact list
        </a>
      </div>

      <div className="divider"></div>

      <div className="views">
        <h3>
          <b>Views: </b>
          {props.views || 0}
        </h3>
      </div>
    </Layout>
  );
}
