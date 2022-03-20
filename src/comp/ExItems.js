import '../index.css'
import '../comp/Exitem.css'
import React from 'react'
import Date from './Date';



function ExItems(prop){
 return(
     <div className='expense-item'>
  <Date date={prop.date}/>
     <div className='expense-item__description'>
         <h2>{prop.title}</h2>
         <div className='expense-item__price'>{prop.amount}</div>
     </div>
     </div>
 );
}

export default ExItems;