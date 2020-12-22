import * as React from 'react';
import { IForm } from './../interfaces/index';

export default function Form(props: React.PropsWithChildren<IForm>) {
  return (
    <>
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
            <i className="material-icons">add_box</i>
            {props.title}
          </div>
          <div className="collapsible-body">
            <form
              action={`/admin/${props.to}`}
              method="POST"
              {...props.formMore}
            >
              {props.children}
              <button type="submit" className="waves-effect waves-light btn">
                {props.title}
              </button>
            </form>
          </div>
        </li>
      </ul>
    </>
  );
}
