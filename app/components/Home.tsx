import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import fs from 'fs'
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 10rem;
  display: block;
  `;

export const Home:React.FC = ( ) => {
  const [isDir, setIsDir] = React.useState([""]);
  const [isLoad, setIsLoad] = React.useState(true);
  while(isLoad){
  fs.readdir(".", (err, dir) => {
    // es6
    for(let filePath of dir) {
      console.log(filePath);
      setIsDir(dir)
    }
    setIsLoad(false)
  });
  return (
    
      <div className={styles.container} data-tid="container">
        <h2>CODE MANAGER</h2>
        <StyledDiv><Link to={routes.COUNTER}>{isDir}</Link></StyledDiv>
        
        {/* <input type="file" webkitdirectory></input> */}
      </div>
    
    );}
    return (
    
      <div className={styles.container} data-tid="container">
        <h2>CODE MANAGER</h2>
        <StyledDiv>
        <Link to={routes.COUNTER}>{isDir[1]}</Link>
        <Link to={routes.COUNTER}>{isDir[2]}</Link></StyledDiv>
        {/* <input type="file" webkitdirectory></input> */}
      </div>
    
    );
};
