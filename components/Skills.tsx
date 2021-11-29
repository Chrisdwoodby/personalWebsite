import js from '../dist/js.png';
import mysql from '../dist/mysql.png';
import react from '../dist/react.png';
import node from '../dist/node.png';
import typescript from '../dist/typescript.png';
import html from '../dist/html.png';
import aws from '../dist/aws.png';
import docker from '../dist/docker.png';

export default function Skills() {
  return (
      <div id="skills">
        <h1>Skills</h1>
        <img id="skill" src={js}/>
        <img id="skill" src={typescript}/>
        <img id="skill" src={react}/>
        <img id="skill" src={html}/>
        <img id="skill" src={node}/>
        <img id="skill" src={mysql}/>
        <img id="aws" src={aws}/>
        <img id="skill" src={docker}/>
      </div>
  )
}