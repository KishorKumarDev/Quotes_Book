import React, { useEffect } from 'react'
import AddQuote from './AddQuote'
import QuoteList from './QuoteList'

const Container = () => {
  const[quotes, setQuotes]=React.useState([])

  const addItem=(quote)=>{
    const result =[quote,...quotes]
    setQuotes(result)
  }
  const removeItem=(id)=>{
    const result=quotes.filter((quote)=>{
      return quote.id !== id
    })
    setQuotes(result)
  }
  const editItem=((quote)=>{
    const result=quotes.map((q)=>{
      if(q.id === quote.id){
        return {...q,...quote}
      }else{
        return {...q}
      }
    })
    setQuotes(result)
  })
    useEffect(()=>{
    const result = JSON.parse(localStorage.getItem('quotes')) || []
    setQuotes(result)
  },[])

  useEffect(()=>{
    localStorage.setItem('quotes',JSON.stringify(quotes))
  },[quotes])
  return (
    <div className='Container'>
      <div className='ContainerQuoteList'>
      <QuoteList quotes={quotes} removeItem={removeItem} editItem={editItem}/>
      </div>
      <div className='ContainerAddQuote'>
      <AddQuote addItem={addItem}/>
      </div>
      
      
      
    </div>
  )
}

export default Container
