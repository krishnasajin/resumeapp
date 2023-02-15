import React, { useState } from "react";

import InputControl from "../InputControl/InputControl";

import styles from './Editor.module.css'

function Editor(props) {
    const sections = props.sections;

    const [activeSectionKey,setActiveSectionKey]= useState(
      Object.keys(sections)[0]
    );
    
    

    
  const workExpBody= ( 
  <div className={styles.detail}>
    < div className={styles.row}>
      <InputControl label="Title"
      placeholder="Enter title eg.  developer"
      />
      <InputControl label="Company Name"
      placeholder="Enter company name eg. amazon"
      />
  </div>
  <div className={styles.row}>
    <InputControl label ="Certified Link"
    placeholder="Enter certificate link"
    />
    <InputControl label="Enter the location"
    placeholder="Enter location eg. Remote"
    />
  </div>
  <div className={styles.row}>
    <InputControl
    label="Start Date"
    type="date"
    placeholder="Enter start date of work"
    />
    <InputControl
    label="End date"
    type="date"
    placeholder="enter end date of work"
    />
  </div>

  <div className={styles.column}>
    <label>Enter work description</label>
    <InputControl placeholder="Line 1"/>
    <InputControl placeholder="Line 2"/>
    <InputControl placeholder="Line 3"/>
  </div>
  </div>
  );

  const projectBody =(
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label ="Title"
         placeholder="Enter title eg: Chat app"
        />
    </div>
    <InputControl label="Overview" 
    placeholder=" Enter basic overview of project"
    />
    <div className={styles.row}>
      <InputControl label=" Deployed Link"
      placeholder="enter deployed link of project"
      />
      <InputControl label= "Github Link"
      placeholder="Enter github link of project"
      />
    </div>
    <div className={styles.column}>
      <label>Enter project description</label>
      <InputControl placeholder="Line 1"/>
      <InputControl placeholder="Line 2"/>
      <InputControl placeholder="Line 3"/>
      <InputControl placeholder="Line 4"/>
    </div>
    </div>
  );
  const educationBody=(
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" 
        placeholder="Enter title eg. B-tech"/>
        </div>
        <InputControl label="College/School Name"
        placeholder="Enter name of your college/school"
        />
        <div className={styles.row}>
          <InputControl 
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          />
          <InputControl 
          label= "End Date"
          type="date"
          placeholder="Enter end date of this education"
          /> 
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl 
        label="Name"
        placeholder="Enter your full name eg. Aashu"
        />
        <InputControl 
        label="Title"
        placeholder="Enter your title eg.Frontend developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl 
        label="Linkedin Link"
        placeholder="Enter your linkedin profile link"
        />
        <InputControl
        label="Github link"
        placeholder="Enter your github profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" 
        placeholder="Enter your email"
        />
        <InputControl label="Enter phone"
        placeholder="Enter your phone number"
        />
      </div>
    </div>
  );

  const achievmentsBody =(
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievments</label>
        <InputControl placeholder="Line 1"/>
        <InputControl placeholder="Line 2"/>
        <InputControl placeholder="Line 3"/>
        <InputControl placeholder="Line 4"/>
      </div>
    </div>
  );

const summaryBody =(
  <div className={styles.detail}>
    <InputControl 
    label="Summary"
    placeholder="Enter your objective/summary"
    />
  </div>
);

const otherBody =(
  <div className={styles.detail}>
    <InputControl 
    label="Other"
    placeholder="Enter something"
    />
  </div>
);

const generateBody =()=> {
  switch(sections[activeSectionKey]){
    case sections.basicInfo:
      return basicInfoBody;
    case sections.workExp:
      return workExpBody;
    case sections.project:
      return projectBody;
    case sections.education:
      return educationBody;
    case sections.achievment:
      return achievmentsBody;
    case sections.summary:
      return summaryBody;
    case sections.other:return otherBody;
    default:
      return null;
  }
};


  return (
    <div className={styles.container}>
        <div className={styles.header}>
          {Object.keys(sections)?.map((key)=> (
          <div 
          className={`${styles.sections}${
            activeSectionKey ===  key ? styles.active : ""
          }`}
             key={key}
             onClick={() => setActiveSectionKey(key)}
             >
            {sections[key]}
            </div>
          ))}
        </div>
        <div className={styles.body}>
          <InputControl label = "Title" 
          placeholder="Enter  the section title"/>
          {generateBody()}
        </div>
    </div>
  );
}

export default Editor;