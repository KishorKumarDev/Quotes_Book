import React from 'react'
import QuoteForm from './QuoteForm'

const EditQuote = (props) => {
    const {id,name,body, editItem,handleToggle}=props
    const formSubmit=(formData)=>{
        editItem(formData)
    }
  return (
    <div className="EditQuoteForm">
        <QuoteForm id={id} name={name} body={body} handleToggle={handleToggle} formSubmit={formSubmit}/>
      
    </div>
  )
}

export default EditQuote
