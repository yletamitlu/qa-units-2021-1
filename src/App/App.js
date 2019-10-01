import React, {useState} from 'react';
import './App.css';
import {fakeOrders} from '../mock/fakeOrders';
import Order from '../Order/Order';
import {sortOrders, sortTypes} from '../utils/sortOrders';

function Orders(orders) {
  if (!orders || !orders.length) {
    return;
  }

  return orders.map((order, index) => (
    <Order
      key={index}
      order={order}
    />
  ))
}

function App() {
  const [sortType, setSortType] = useState(sortTypes.COUNT);
  sortOrders(fakeOrders, sortType);

  return (
    <div className='App'>
      <header className='App-header'>
        <span className='App-header-title'>Сортировать заказы</span>

        <select onChange={(event) => setSortType(event.target.value)}>
          <option value={sortTypes.COUNT}>по количеству</option>
          <option value={sortTypes.DATE}>по дате</option>
          <option value={sortTypes.ITEM_NAMES}>по названиям товаров</option>
        </select>
      </header>

      <div className='App-container'>
        {Orders(fakeOrders)}
      </div>
    </div>
  );
}

export default App;
