import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import fs from 'fs';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  display: block;
`;

export const Home: React.FC = () => {
  const [isDir, setIsDir] = React.useState(['']);
  const [isLoad, setIsLoad] = React.useState(true);
  let dirList = [];
  while (isLoad) {
    fs.readdir('/home/hvrl/src/github.com/maasa1221', (err, dir) => {
      // es6
      for (let filePath of dir) {
        console.log(filePath);
        setIsDir(dir);
      }
      setIsLoad(false);
    });
    return <></>;
  }
  for (let dir of isDir) {
    dirList.push(
      <div>
        <Link to={routes.COUNTER}>{dir}</Link>
      </div>
    );
  }
  return (
    <div className={styles.container} data-tid="container">
      <h2>CODE MANAGER from ghq</h2>
      <StyledDiv>{dirList}</StyledDiv>
    </div>
  );
};
