import React from 'react'
import {v4 as uuidv4} from "uuid"

const QuoteForm = (props) => {
    const {formSubmit, id:slNo, name:quoteName, body:quoteBody,handleToggle}=props
    const [id, setId]=React.useState(slNo ? slNo :uuidv4())
    const [name, setName]=React.useState( quoteName ? quoteName :'')
    const [body, setBody]=React.useState( quoteBody ? quoteBody :'')

    const handleChangeName=(e)=>{
        setName(e.target.value)
    }

    const handleChangeBody=(e)=>{
        setBody(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            name:name,
            body:body
        }
       formSubmit(formData)
       if(handleToggle){
        handleToggle()
       }

       setId(uuidv4())
       setName('')
       setBody('')
    }
  return (
    <div className='QuoteForm'>
         <span className="logo">Add Your Favorite Quotes</span>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChangeName} placeholder="Author" />
            <textarea type="text" value={body} onChange={handleChangeBody} placeholder="Type Something......."/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
      
    </div>
  )
}

export default QuoteForm
