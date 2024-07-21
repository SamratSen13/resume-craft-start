import React, {useState} from 'react';
import {Download} from "react-feather";
import Editor from '../Editor/Editor';
import styles from "./Body.module.css";
function Body() {
  const colors = ["239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    profile: "Profile",
    aboutMe: "About Me",
    academics: "Academics",
    professionalExp: "Professional Experience",
    projects: "Projects",
    skills: "Skills",
    summary: "Summary",
  }; 

  const [resumeInformation, setResumeInformation] = useState({
    [sections.profile]: {
        id: sections.profile,
        sectionTitle: sections.profile,
        detail: {},
    },
    [sections.professionalExp]: {
        id: sections.professionalExp,
        sectionTitle: sections.professionalExp,
        details: [],
    },
    [sections.projects]: {
        id: sections.projects,
        sectionTitle: sections.projects,
        details: [],
    },
    [sections.academics]: {
        id: sections.academics,
        sectionTitle: sections.academics,
        details: [],
    },
    [sections.skills]: {
        id: sections.skills,
        sectionTitle: sections.skills,
        points: [],
    },
    [sections.summary]: {
        id: sections.summary,
        sectionTitle: sections.summary,
        detail: "",
    },
  });

  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {colors.map((item) =>(
                        <span
                          key={item}
                          style={{ backgroundColor: item }}
                          className={styles.color}
                         /> 
                    ))}
            </div>
            <button>Download <Download /></button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections} information={resumeInformation}/>
        </div>
    </div>
  )
}

export default Body
