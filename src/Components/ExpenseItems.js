import "./ExpenseItems.css";
function ExpenseItems(propsData){   
    const month = propsData.date.toISOString()
    return (       
         <div className='expense-item'>
             <div className='expense-item__description'>{propsData.date.toISOString()}</div>
             <div>
                 <h2>{propsData.title}</h2>
                 <div className='expense-item__price '>Rs {propsData.amount}</div>
             </div>
         </div>
      );
}

export default ExpenseItems;