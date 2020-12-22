import * as React from 'react';
import { HeadTitleProps } from '../interfaces';

function HeadTitle(props: HeadTitleProps) {
  return (
    <div>
      <hr
        className={
          props.margin ? `mt-${props.margin} mb-${props.margin}` : 'mt-3 mb-3'
        }
      />
      <props.el style={{ color: '#fff', textAlign: 'center' }}>
        {props.title}
      </props.el>
      <hr
        className={
          props.margin ? `mb-${props.margin} mt-${props.margin}` : 'mb-3 mt-3'
        }
      />
    </div>
  );
}

HeadTitle.defaultProps = {
  el: 'h1',
  margin: 2,
  title: 'Page',
};

export default HeadTitle;
