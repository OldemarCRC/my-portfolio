import React from 'react';
import './skills_tools.css';

const skills = [
    { name: 'JavaScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'REST API Development' },
    { name: 'SQL Databases' },
    { name: 'NoSQL Databases (MongoDB)' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Python' },
    { name: 'Agile/Scrum' }
];

const tools = [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Trello' },
    { name: 'VS Code' },
    { name: 'MongoDB Atlas' },
    { name: 'Render' },
];

const SkillsTools = () => (
    <section id="skills-tools" className="skills-mf sect-pt4 route">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">Skills</h3>
                    </div>
                    <div className="line-mf"></div>
                    {skills.map((skill, index) => (
                        <div key={index} className="col-md-3">
                            <div className="skill-box">
                                <h2 className="s-title">{skill.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">Tools</h3>
                    </div>
                    <div className="line-mf"></div>
                    {tools.map((tool, index) => (
                        <div key={index} className="col-md-3">
                            <div className="skill-box">
                                <h2 className="s-title">{tool.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default SkillsTools;