import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote = (props) => {
    const {addItem}=props

    const formSubmit=(formData)=>{
        addItem(formData)

    }
  return (
    <div className='addquote'>
        <QuoteForm formSubmit={formSubmit}/>
      
    </div>
  )
}

export default AddQuote
