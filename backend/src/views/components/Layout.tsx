import * as React from 'react';
import { Props } from './../interfaces/index';

export default function Layout(props: React.PropsWithChildren<Props>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />

        <link rel="stylesheet" href="/admin/css/style.css" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

        <title>Admin panel{props.title ? ` - ${props.title}` : ''}</title>
      </head>
      <body style={{ background: '#212121', fontFamily: 'Roboto', color: '#fff' }}>
        {props.isAdmin ? <header></header> : null}
        <main>
          <div className="container">{props.children}</div>
        </main>

        <script src="/admin/js/main.js"></script>
      </body>
    </html>
  );
}
