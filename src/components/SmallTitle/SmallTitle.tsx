import React from 'react';
import styles from './SmallTitle.module.scss';
import classNames from 'classnames';

type Props = {
  children: string,
  className?: string;
}

export const SmallTitle = React.memo<Props>(({ children, className }) => (
  <h1 className={classNames([styles.title], className)}>
    {children}
  </h1>
));
