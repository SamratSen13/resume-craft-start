import React, { useState } from "react";
import styles from "./Editor.module.css";
import InputController from "../InputController/InputController";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const workExpBody = ( 
    <div className={styles.detail}>
        <div className={styles.row}>
            <InputController
                Label="Title"
                placeholder="Enter title eg FrontEnd Developer"
             />
             <InputController
                Label="Company Name"
                placeholder="Enter Company Name eg Amazon"
             />      
        </div> 
        <div className={styles.row}>
            <InputController 
                Label="Certificate Link"
                placeholder="Enter Certification Link"
            />
            <InputController
                Label="Location"
                placeholder="Enter Location eg.Remote"
            />
        </div>    
        <div className={styles.row}>       
            <InputController
                Label="Start Date"
                type="date"
                placeholder="Enter start date of work"
            />
            <InputController
                Label="End Date"
                type="date"
                placeholder="Enter end date of work"
            />           
        </div>

        <div className={styles.column}>
            <label>Enter Work Description</label>
            <InputController placeholder="Line 1" />
            <InputController placeholder="Line 2" />
            <InputController placeholder="Line 3" />
        </div>
  </div>
  );

  const projectBody = (
    <div className={styles.detail}>
        <div className={styles.row}>
            <InputController 
                Label="Title"
                placeholder="Enter title eg. Chat App"
            />
        </div>    
            <InputController
                Label="Overview"
                placeholder="Enter basic Overview of Project"
            />
        <div className={styles.row}>
            <InputController
                Label="Deployed Link"
                placeholder="Enter deployed link of project"
            />
            <InputController 
                Label="Github Link"
                placeholder="Enter Github Link Of Project"
            />             
        </div>
        <div className={styles.column}>
            <label>Enter Project Description</label>
            <InputController placeholder="Line 1" />
            <InputController placeholder="Line 2" />
            <InputController placeholder="Line 3" />
            <InputController placeholder="Line 4" />
        </div>
    </div>
  );

    const academicsBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputController
                    Label="Title"
                    placeholder="Enter title eg. B-tech"
                />    
            </div>
            <InputController
                Label="College/School Name"
                placeholder="Enter Name of your college/school"
            />
            <div className={styles.row}>
                <InputController
                    Label="Start Date"
                    type="date"
                    placeholder="Enter start date of this education"
                />
                <InputController
                    Label="End Date"
                    type="date"
                    placeholder="Enter end date of this education"
                />
            </div>
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputController
                    Label="Name"
                    placeholder="Enter your Full name eg.Samrat"
                />
                <InputController
                    Label="Title"
                    placeholder="Enter your title eg. FrontEnd Developer"
                 />       
            </div>
            <div className={styles.row}>
                <InputController
                    Label="Linkedin Link"
                    placeholder="Enter your Linkedin profile link"
                />
                <InputController
                    Label="Github Link"
                    placeholder="Enter your Github Profile Link"
                />
            </div>
            <div className={styles.row}>
                <InputController
                    Label="Email"
                    placeholder="Enter Your Email"
                />
                <InputController
                    Label="Enter Phone"
                    placeholder="Enter your phone number"    
                />    
            </div>
        </div>
    );

    const aboutMeBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <InputController
                    Label="About Me"
                    textarea=""
                />    
            </div>
        </div>
    );

    const skillsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>List Your Skills</label>
                <InputController placeholder="Line1" />
                <InputController placeholder="Line2" />
                <InputController placeholder="Line3" />
                <InputController placeholder="Line4" />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
            <InputController
                label="Summary"
                placeholder="Enter your Objective/Summary"
            />    
        </div>
    );

  const generateBody=()=>{
    switch(sections[activeSectionKey]){
        case sections.profile: return basicInfoBody;
        case sections.professionalExp: return workExpBody;
        case sections.aboutMe: return aboutMeBody;
        case sections.projects: return projectBody;
        case sections.academics: return academicsBody;
        case sections.skills: return skillsBody;
        case sections.summary: return summaryBody;
        default: return null; 
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
         <InputController Label="Title" placeholder="Enter section title"/>

            <div className={styles.chips}>
            <div className={styles.chip}>
                <p>Project 1</p>
                <X />    
            </div>
            <div className={styles.chip}>
                <p>Project 2</p>
                <X />
            </div>
            </div>

         {generateBody()}
      </div>
    </div>
  );
}

export default Editor;
