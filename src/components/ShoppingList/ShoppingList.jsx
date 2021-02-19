
import ShoppingItem from '../ShoppingItem/ShoppingItem'

function ShoppingList({shoppingList, handleRemove, buyItem}) {
  console.log('shoppingList', shoppingList);
  return (
  <>  
   <h3>Shopping List</h3>
      <div>
        <button onClick={resetList}>Reset</button>
        <button onClick={clearList}>Clear</button>
      
        {shoppingList.map(item => (
          <ShoppingItem
          key={item.id}
          item={item}
          handleRemove={handleRemove}
          buyItem={buyItem}
          />
  ))}    
    </div>
  </>  
  );
}

export default ShoppingList;
