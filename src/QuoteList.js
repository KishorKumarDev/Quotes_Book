import React from 'react'
import QuoteItems from './QuoteItems'

const QuoteList = (props) => {
    const{quotes,removeItem,editItem}=props
  return (
    <div className='list'>
        {
            quotes.length === 0 ?(
                <div className='text'>
                    <h2>No Quotes Found</h2>
                    <h2>Add Your First Quote</h2>
                </div>
            ):(
                <div className='QuoteList'>
                    <h2>My Quotes: {quotes.length}</h2>
                    <div className='QuoteItems'>
                    {quotes.map((quote)=>{
                        return <QuoteItems key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
                        })
                    }
                    </div>
                    
                </div>
            )
        }
      
    </div>
  )
}

export default QuoteList
