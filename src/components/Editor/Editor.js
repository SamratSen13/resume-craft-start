import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputController from "../InputController/InputController";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );

  const [sectionTitle, setSectionTitle] = useState(sections[Object.keys(sections)[0]]);

  const [values,setValues] = useState({
    name:activeInformation?.detail?.name || "",
    title:activeInformation?.detail?.title || "",
    linkedin:activeInformation?.detail?.linkedin || "" ,
    github:activeInformation?.detail?.github || "",
    phone:activeInformation?.detail?.phone || "",
    email:activeInformation?.detail?.email || ""
  });

  const handlePointUpdate = (value,index) =>{
    const tempValues = {...values}
    tempValues.points[index]=value
    setValues(tempValues)

  }

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputController
          Label="Title"
          placeholder="Enter title eg FrontEnd Developer"
          defaultValue = {values.title}
          onChange = {(event)=>setValues((prev)=>({...prev, title: event.target.value})
        )
       }
        />
        <InputController
          Label="Company Name"
          placeholder="Enter Company Name eg Amazon"
          defaultValue = {values.companyName}
          onChange = {(event)=>setValues((prev)=>({...prev, companyName: event.target.value})
        )
       }
        />
      </div>
      <div className={styles.row}>
        <InputController
          Label="Certificate Link"
          placeholder="Enter Certification Link"
          defaultValue = {values.certificationLink}
          onChange = {(event)=>setValues((prev)=>({...prev, certificationLink: event.target.value})
        )
       }
        />
        <InputController
          Label="Location"
          placeholder="Enter Location eg.Remote"
          defaultValue = {values.location}
          onChange = {(event)=>setValues((prev)=>({...prev, location: event.target.value})
        )
       }
        />
      </div>
      <div className={styles.row}>
        <InputController
          Label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          defaultValue = {values.startDate}
          onChange = {(event)=>setValues((prev)=>({...prev, startDate: event.target.value})
        )
       }
        />
        <InputController
          Label="End Date"
          type="date"
          placeholder="Enter end date of work"
          defaultValue = {values.endDate}
          onChange = {(event)=>setValues((prev)=>({...prev, endDate: event.target.value})
        )
       }
        />
      </div>

      <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputController placeholder="Line 1" 
        defaultValue={values.points?values.points[0]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,0)}
        />
        <InputController placeholder="Line 2" 
        defaultValue={values.points?values.points[1]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,1)}
        />
        <InputController placeholder="Line 3" 
        defaultValue={values.points?values.points[2]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,2)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputController Label="Title" 
        placeholder="Enter title eg. Chat App" 
        defaultValue={values.title}    
        onChange = {(event)=>setValues((prev)=>({...prev, title: event.target.value})
        )
       }
        />
      </div>
      <InputController
        Label="Overview"
        placeholder="Enter basic Overview of Project"
        defaultValue={values.overview}
        onChange = {(event)=>setValues((prev)=>({...prev, overview: event.target.value})
        )
       }
      />
      <div className={styles.row}>
        <InputController
          Label="Deployed Link"
          placeholder="Enter deployed link of project"
          defaultValue={values.link}
          onChange = {(event)=>setValues((prev)=>({...prev, link: event.target.value})
        )
       }
        />
        <InputController
          Label="Github Link"
          placeholder="Enter Github Link Of Project"
          defaultValue={values.github}
          onChange = {(event)=>setValues((prev)=>({...prev, github: event.target.value})
        )
       }
        />
      </div>
      <div className={styles.column}>
        <label>Enter Project Description</label>
        <InputController placeholder="Line 1" 
        defaultValue={values.points?values.points[0]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,0)}
        />
        <InputController placeholder="Line 2" 
        defaultValue={values.points?values.points[1]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,1)}
        />
        <InputController placeholder="Line 3" 
        defaultValue={values.points?values.points[2]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,2)}
        />
        <InputController placeholder="Line 4" 
        defaultValue={values.points?values.points[3]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,3)}
        />
      </div>
    </div>
  );

  const academicsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputController Label="Title" 
        placeholder="Enter title eg. B-tech" 
        defaultValue={values.title}
        onChange = {(event)=>setValues((prev)=>({...prev, title: event.target.value})
        )
       }
        />
      </div>
      <InputController
        Label="College/School Name"
        placeholder="Enter Name of your college/school"
        defaultValue={values.academy}
        onChange = {(event)=>setValues((prev)=>({...prev, academy: event.target.value})
        )
       }
      />
      <div className={styles.row}>
        <InputController
          Label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          defaultValue={values.startDate}
          onChange = {(event)=>setValues((prev)=>({...prev, startDate: event.target.value})
        )
       }
        />
        <InputController
          Label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          defaultValue={values.endDate}
          onChange = {(event)=>setValues((prev)=>({...prev, endDate: event.target.value})
        )
       }
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
          defaultValue={values.name}
          onChange = {(event)=>setValues((prev)=>({...prev, name: event.target.value})
        )
       }
        />
        <InputController
          Label="Title"
          placeholder="Enter your title eg. FrontEnd Developer"
          defaultValue={values.title}
          onChange = {(event)=>setValues((prev)=>({...prev, title: event.target.value})
        )
       }
        />
      </div>
      <div className={styles.row}>
        <InputController
          Label="Linkedin Link"
          placeholder="Enter your Linkedin profile link"
          defaultValue={values.linkedin}
          onChange = {(event)=>setValues((prev)=>({...prev, linkedin: event.target.value})
        )
       }
        />
        <InputController
          Label="Github Link"
          placeholder="Enter your Github Profile Link"
          defaultValue={values.github}
          onChange = {(event)=>setValues((prev)=>({...prev, github: event.target.value})
        )
       }
        />
      </div>
      <div className={styles.row}>
        <InputController Label="Email" 
        placeholder="Enter Your Email" 
        defaultValue={values.email}
        onChange = {(event)=>setValues((prev)=>({...prev, email: event.target.value})
        )
       }
        />
        <InputController
          Label="Enter Phone"
          placeholder="Enter your phone number"
          defaultValue={values.phone}
          onChange = {(event)=>setValues((prev)=>({...prev, phone: event.target.value})
        )
       }
        />
      </div>
    </div>
  );

  const aboutMeBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <InputController Label="About Me" 
        textarea="" 
        defaultValue={values.aboutMe}
        onChange = {(event)=>setValues((prev)=>({...prev, aboutMe: event.target.value})
        )
       }
        />
      </div>
    </div>
  );

  const skillsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List Your Skills</label>
        <InputController placeholder="Line 1" 
        defaultValue={values.points?values.points[0]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,0)}
        />
        <InputController placeholder="Line 2" 
        defaultValue={values.points?values.points[1]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,1)}
        />
        <InputController placeholder="Line 3" 
        defaultValue={values.points?values.points[2]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,2)}
        />
        <InputController placeholder="Line 4" 
        defaultValue={values.points?values.points[3]:""}
        onChange= {(event) =>handlePointUpdate(event.target.value,3)}
        />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputController
        label="Summary"
        placeholder="Enter your Objective/Summary"
        defaultValue={values.summary}
        onChange = {(event)=>setValues((prev)=>({...prev, summary: event.target.value})
        )
       }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.profile:
        return basicInfoBody;
      case sections.professionalExp:
        return workExpBody;
      case sections.aboutMe:
        return aboutMeBody;
      case sections.projects:
        return projectBody;
      case sections.academics:
        return academicsBody;
      case sections.skills:
        return skillsBody;
      case sections.summary:
        return summaryBody;
      default:
        return null;
    }
  };

  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
  }, [activeSectionKey]);

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
        <InputController Label="Title" placeholder="Enter section title" 
         value={sectionTitle}
         onChange ={(event)=>setSectionTitle(event.target.value)} 
        />
        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div className={styles.chip} key={item.title + index}>
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X />
                </div>
              ))
            : ""}
        </div>

        {generateBody()}

        <button>Save</button>
      </div>
    </div>
  );
}

export default Editor;
