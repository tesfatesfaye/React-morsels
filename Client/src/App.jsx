import { useEffect, useRef, useState } from 'react'
import './App.css'
import chime from './audio/chime.mp3'
function App() {
  const [form, setForm] = useState({ DocumentType: "coverLetter", myResume: "https://drive.google.com/file/d/1RDVao_y-3-QPI9Li9lD346cyiJ0vMXV7/view?usp=drive_link", roleDescription: "", moreTechnical: false, companyInfo: "", myPersonalityInfo: true, extraInfo: "", removeAll: false, showDocumentType: true, newResumeLink: "",mern:true ,stringResume:true})
  const [text, setText] = useState("")
  const [copy, setCopy] = useState(false)
  const [alert] = useState("Text has been copied")
  const ref = useRef(null)
  const submitRef = useRef(null)
  const [playAudio, setPlayAudio] = useState(true)
  const audio = new Audio(chime);
  const rezi = "Tesfa Tesfaye Cambridge, Massachusetts, United States t@tesfaget.dev 215-980-5093 LinkedIn GitHub SKILLS • JavaScript | TypeScript | React.js | Redux | Next.js | Node.js | Frontend | Backend | Full-Stack | Electron • Express | MongoDB | MySQL | NoSQL | tRPC | Prisma | CI/CD | Mongoose | Git | Unit Testing | Framer Motion • HTML | CSS | Bootstrap | Tailwinds | Java | Python | Jest | OOP | Data Structures and Algorithms | Bash • AWS | Amplify | S3 | EC2 | Algolia | Vercel | Firebase | GitHub Actions | MUI | React Query | RESTful APIs EXPERIENCE Software Developer at Aedificare, September 2021 - Present, Boston, MA ● Collaborated on a MERN application aimed at analyzing and storing data regarding foreign direct investments in developing countries, achieving a 25% improvement in data processing speed. ● Integrated robust features and performed stability and reliability tests, resulting in a 15% reduction in load times. ● Contributed to the efficiency of data analysis through the implementation of advanced data visualization tools, improving data accessibility by 20%. ● Streamlined application's data flow and state management through strategic utilization of the context, memo, callback, and custom hooks. Thereby, reducing time spent debugging by approximately 10%. ● Collaborated on a real-time data updating feature using socket.io, enhancing user experience and improving the application's responsiveness by 15%. Software Engineer, Intern at Infinity Wealth Management February 2021 - August 2021, Denver, CO ● Implemented new front-end features for an investment portal with React, increasing client engagement by 20%. ● Participated in the development of a comprehensive dashboard system using the MERN stack. This initiative increased data accessibility by 30%. ● Ported a web application to a desktop platform with Electron augmenting productivity by 25%. ● Co-authored detailed documentation for the developed codebase, decreasing onboarding time by 15%. Software Engineer, Intern at WEL, Siena College  June 2020 - December 2020, Loudonville, NY● Collaborated with a small team to develop a web application using React and sampled the viability of custom component layouts as dictated by web designers. Using best practices, reducing the refactoring time by 10%. ● Boosted front-end test coverage by 15% through rigorous stability and reliability testing with Jest and RTL. ● Refactored front-end code to utilize custom hooks, increasing client-side performance by approximately 20%. ● Engaged in comprehensive code reviews, gaining valuable insights into best practices for enhancing code quality and readability, contributing to a 10% improvement in overall code maintainability and efficiency. ● Decreased bug requests by 35% through rigorous debugging and Refactoring. PROJECTS FreePass (2023) ● A free and secure user-friendly platform for managing passwords built using the T3 stack, ensuring full-stack type safety and modularity. ● Decreased runtime errors by 50%, and increased reliability by 30% by switching from the MERN stack to the T3 stack. ● Future iterations promise a desktop and a mobile app built leveraging Electron and React Native, potentially increasing user accessibility by 60%. EDUCATION Bachelor of Science"+
   " in Computer Science and Bachelor of Arts in Economics Siena College • Loudonville, NY • 2020"




  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => {
      return { ...prev, [name]: type === "checkbox" ? checked : value }
    })
  }

  let additonalInfo = "You may use any additional info I pass to you such as my resume and a summary of my personality which you can use, I will pass information about the job posting and or the company summary, make sure that you only refer to the  technologies listed in my resume, it is pertinent that you don't add things that are not in my resume unless I explicitly instruct you to do it later on in this prompt I will discussed"
  let obj = {
    coverLetter: "Write me a cover letter 200-300 word ",
    summary: "Write me a summary for a job application two to ﬁve phrases written in a bulleted form or brief paragraph will do",
    myPersonalityInfo: ".This summary of my personality for addition info you don't have to use it word for word you can just use it to estimate my character:this summary of my personality for addition info you don't have to use it word for word you can just use it to estimate my character.The personality profile:  “if you want to improve be content to be thought foolish and stupid”, is emblematic of my existence. If a person with the mindset that the quality of their work, whatever it may be, is one of the strongest indicators of who they are as a person—in unison with the humility to accept their standing limitations to work past them, to evolve into the person required for the job, is proof of excellence, then I am  person for which you are looking. ",
    reason: "Write me  reason I would like to work for a company I am applying to relate it to how I appreciate what they do and use the information about them or me ",
    roleDescription: "the role description: "

  };

  const submit = (e) => {
    if(e)e.preventDefault()
    if (!form.removeAll) {
      let string = "My name is Tesfa Tesfaye, I need you to  "
      string += obj[form.DocumentType] + " " + additonalInfo + " "
      
      form.myPersonalityInfo ? string += obj.myPersonalityInfo + " " : ""
      if (form.roleDescription.length) string += obj.roleDescription+" "+form.roleDescription + " "
      if(form.mern) string += " Put an emphasis on mern stack technologies, also tails winds and Next js"
       if (form.companyInfo.length) string += "Information regarding the company :" + form.companyInfo
      form.moreTechnical ? string += ". Make the generated text more technical" : " Make the generated text more personal"
      form.extraInfo.length ? string += form.extraInfo : "You can not add any technologies that are not in my resume"
      string += ` ${form.newResumeLink ? form.newResumeLink : (!form.stringResume ? `You can find my resume at : https://drive.google.com/file/d/114UlOvjid2zVvyNJWysQ5R1zLSPgn1ZZ/view?usp=drive_link you are to parse it and use the information within as part of the cover letter ` + " " : "The text extracted from my resume pdf :" + rezi + " ")} `
      setText(string)
    }
    else {
      let val = form.removeAll && !form.showDocumentType ? form.extraInfo : `${obj[form.DocumentType]} ${form.extraInfo}`
      setText(`Based on the information given generate me a ${val}`)
    }
  }
  const clear = (e) => {
    e.preventDefault()
    setForm(prev => {
      return { ...prev, extraInfo: "", companyInfo: "", 
      roleDescription: "", removeAll: false, showDocumentType: true }
    })
    setText('')
  }
  const submitClear = (e) => {
    submit(e)
    clear(e)

  }
  const clearResume = () => {
    
    setForm(prev => {
      return { ...prev, newResumeLink: "" }
    })
    submit()
  }
  const clipboard = () => {


    navigator.clipboard.writeText(text)
      .then(() => {
        if (playAudio) {
          audio.play();

        }
        setCopy(true);

      }).then(() => {
        setTimeout(() => {
          setCopy(false)
        }, 3000)
      })
  }


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "`") {
        ref.current.click()
      }
      else if (event.key === "=") {
        submitRef.current.click()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <div className="App">
      <div className='fieldsetClass'>
        <label htmlFor='DocumentType'>What type of document is it ?</label>
        <select
          id='DocumentType'
          value={form.DocumentType}
          onChange={onChange}
          name='DocumentType'>
          <option value="coverLetter">Cover Letter</option>
          <option value="summary">Summary</option>
          <option value="reason">Reason for job</option>
        </select>
        <label htmlFor='RoleDescription'> Job Post details</label>
        <input type="text"
          value={form.roleDescription}
          onChange={onChange}
          id='RoleDescription'
          name='roleDescription'
        />

        <label htmlFor='companyInfo' >Information about company</label>
        <input type="text"
          value={form.companyInfo}
          onChange={onChange}
          id='companyInfo'
          name='companyInfo'
        />
        <label htmlFor='extraInfo'>Extra Info</label>
        <input
          type='text'
          id='extraInfo'
          name='extraInfo'
          value={form.extraInfo}
          onChange={onChange}
        />
        <label htmlFor='newResumeLink'>New resume link</label> 
        <input
          type='text'
          name='newResumeLink'
          value={form.newResumeLink}
          onChange={onChange}
          id='newResumeLink'
        />
        <label htmlFor='myPersonalityInfo'>Use personal info</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id='myPersonalityInfo'
          name='myPersonalityInfo'
          checked={form.myPersonalityInfo}
          value={form.myPersonalityInfo}
          onChange={onChange}
        />
        <label htmlFor=''>Use personal info</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id='myPersonalityInfo'
          name='myPersonalityInfo'
          checked={form.myPersonalityInfo}
          value={form.myPersonalityInfo}
          onChange={onChange}
        />

        <label htmlFor='moreTechnical'>More Technical</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          checked={form.moreTechnical}
          id='moreTechnical'
          name='moreTechnical'
          value={form.moreTechnical}
          onChange={onChange}
        />
        <label htmlFor='removeAll'>Show none</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="removeAll"
          name='removeAll'
          value={form.removeAll}
          checked={form.removeAll}
          onChange={onChange}
        />
        <label htmlFor='removeAll'>showDocumentType</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="showDocumentType"
          name='showDocumentType'
          value={form.showDocumentType}
          checked={form.showDocumentType}
          onChange={onChange}
        />
        <label htmlFor='stringResume'>string resume</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="stringResume"
          name='stringResume'
          value={form.stringResume}
          checked={form.stringResume}
          onChange={onChange}
        />
        <label htmlFor='playAudio'>PlayAudio</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="playAudio"
          name='playAudio'
          value={playAudio}
          checked={playAudio}
          onChange={() => setPlayAudio(prev => !prev)}
        />
        <label htmlFor='mern'>MERN</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="mern"
          name='mern'
          value={form.mern}
          checked={form.mern}
          onChange={onChange}
        />
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap",width:"100%"}}>
          <button ref={submitRef} style={{ marginLeft: "10px", marginRight: "auto" }} onClick={(e) => submit(e)}>Submit</button>
          <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clear}>Clear</button>
          <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={submitClear}>Submit/Clear</button>
          <button ref={ref} style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clipboard}>Copy</button>
          {(form.newResumeLink && text) && <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clearResume}>Clear my resume</button>}
          
        </div>
       

      </div >

      <div className='textDiv'>
        {text}
        {copy && <h1 style={{ color: "green" }}>{alert}</h1>}

     
      </div>
    </div>
  )
}

export default App
