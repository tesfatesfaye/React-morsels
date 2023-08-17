import { useEffect, useRef, useState } from 'react'
import './App.css'
import chime from './audio/chime.mp3'
function App() {
  const [form, setForm] = useState({ DocumentType: "coverLetter", myResume: "https://drive.google.com/file/d/1RDVao_y-3-QPI9Li9lD346cyiJ0vMXV7/view?usp=drive_link", roleDescription: "", moreTechnical: false, companyInfo: "", myPersonalityInfo: true, extraInfo: "", removeAll: false, showDocumentType: true, newResumeLink: "" })
  const [text, setText] = useState("")
  const [copy, setCopy] = useState(false)
  const [alert] = useState("Text has been copied")
  const ref = useRef(null)
  const submitRef = useRef(null)
  const [playAudio, setPlayAudio] = useState(true)
  const audio = new Audio(chime);




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
      let string = ""
      string += obj[form.DocumentType] + " " + additonalInfo + " "
      string += `You can find my resume at : ${form.newResumeLink ? form.newResumeLink : "https://drive.google.com/file/d/114UlOvjid2zVvyNJWysQ5R1zLSPgn1ZZ/view?usp=drive_link"} ` + "  "
      form.myPersonalityInfo ? string += obj.myPersonalityInfo + " " : ""
      if (form.roleDescription.length) string += obj.roleDescription+" "+form.roleDescription + " "
      if (form.companyInfo.length) string += "Information regarding the company :" + form.companyInfo
      form.moreTechnical ? string += ". Make the generated text more technical" : " Make the generated text more personal"
      form.extraInfo.length ? string += form.extraInfo : ""
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
      return { ...prev, extraInfo: "", companyInfo: "", roleDescription: "", removeAll: false, showDocumentType: true }
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
        <label htmlFor='removeAll'>PlayAudio</label>
        <input style={{ marginLeft: "10px", marginRight: "auto" }}
          type='checkbox'
          id="playAudio"
          name='playAudio'
          value={playAudio}
          checked={playAudio}
          onChange={() => setPlayAudio(prev => !prev)}
        />

        <button ref={submitRef} style={{ marginLeft: "10px", marginRight: "auto" }} onClick={(e) => submit(e)}>Submit</button>
        <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clear}>Clear</button>
        <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={submitClear}>Submit/Clear</button>
        <button ref={ref} style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clipboard}>Copy</button>
        {(form.newResumeLink && text) && <button style={{ marginLeft: "10px", marginRight: "auto" }} onClick={clearResume}>Clear my resume</button>}

      </div >

      <div className='textDiv'>
        {text}
        {copy && <h1 style={{ color: "green" }}>{alert}</h1>}

     
      </div>
    </div>
  )
}

export default App
