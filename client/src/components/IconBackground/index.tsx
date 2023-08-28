import React from 'react';
import { styles } from './IconBackground.styles';

type Props = {
  children: React.ReactNode;
};

const IconBackground: React.FC<Props> = ({ children }) => {
  return <div style={styles.div}>{children}</div>;
};

export default IconBackground;
