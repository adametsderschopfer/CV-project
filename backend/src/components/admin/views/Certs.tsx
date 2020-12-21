import * as React from 'react';
import { CertDto } from './../../../Dto/Certs/Cert.dto';
import { Props } from './interfaces/index';
import HeadTitle from './components/HeadTitle';
import Layout from './components/Layout';

type CertsDto = { certs: CertDto[] };

function Certs(props: CertsDto & Props) {
  return (
    <Layout title={props.title}>
      <a className="waves-effect waves-light btn mt-2" href="/admin">
        Go to menu
      </a>
      <HeadTitle title="Certs" el="h2" margin={2} />

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
            <i className="material-icons">add_box</i>Add cert
          </div>
          <div className="collapsible-body">
            <form
              action="/admin/certificates/add"
              method="POST"
              encType="multipart/form-data"
            >
              <div>
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Add cert img</span>
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
              </div>
              <div className="divider mt-1"></div>
              <button
                type="submit"
                className="waves-effect waves-light btn mt-2"
              >
                Add cert
              </button>
            </form>
          </div>
        </li>
      </ul>

      <ul className="collection with-header">
        {props.certs.length ? (
          props.certs.map((cert) => (
            <li className="collection-item" key={cert.id}>
              <div className="df" style={{ justifyContent: 'space-between' }}>
                <div
                  className="column b"
                  style={{ display: 'flex', maxWidth: '300px' }}
                >
                  <img
                    width="300"
                    height="250"
                    style={{ objectFit: 'cover' }}
                    src={cert.imglink}
                    alt=""
                  />
                </div>

                <a
                  href={`/admin/certificates/delete/${cert.id}`}
                  className="secondary-content"
                >
                  <i className="material-icons">delete_forever</i>
                </a>
              </div>
            </li>
          ))
        ) : (
          <div>Certs not found yet.</div>
        )}
      </ul>
    </Layout>
  );
}

export default Certs;
