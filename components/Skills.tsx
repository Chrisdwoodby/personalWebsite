import js from '../dist/public/icons/js.png';
import mysql from '../dist/public/icons/mysql.png';
import react from '../dist/public/icons/react.png';
import node from '../dist/public/icons/node.png';
import typescript from '../dist/public/icons/typescript.png';
import html from '../dist/public/icons/html.png';
import aws from '../dist/public/icons/aws.png';
import docker from '../dist/public/icons/docker.png';

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