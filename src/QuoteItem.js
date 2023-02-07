import React from 'react'
import EditQuote from './EditQuote'
const QuoteItems = (props) => {
    const {id,name,body,removeItem,editItem}=props
    const[toggle,setToggle]=React.useState(false)

    const handleToggle=()=>{
      setToggle(!toggle)
    }
    

    const handleRemove=()=>{
        const confirmRemove=(window.confirm("Are You Sure ?"))
        if(confirmRemove){
            removeItem(id)
        }
    }
  return (
    <div>
      {
        toggle ? (
          <div className='EditQuote'>
            <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle}/>
              <button onClick={handleToggle}>Cancel</button>
          </div>
        ):(
          <div className='QuoteItems'>
            <div className="quoteItems">
            <blockquote>“{body}” </blockquote>
            <p>-{name}</p>
            <div className="butt">
            <button  onClick={handleToggle}>Edit</button>
            <button   onClick={handleRemove}>Remove</button>
            </div>
          
            </div>
          </div>
          
        )
      }
       
    </div>
  )
}
export default QuoteItems


