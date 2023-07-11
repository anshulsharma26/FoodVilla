import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { MENU_DATA } from '../../mocks/data';
import '@testing-library/jest-dom';
import store from '../../utils/store';
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import Cart from '../Cart';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test('Add items to cart', async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(menu.getByTestId('menu')));
  const addBtn = menu.getAllByTestId('add-btn');
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);
  const cart = menu.getByTestId('cart');
  expect(cart.innerHTML).toBe('2');

  await waitFor(() => expect(menu.getByTestId('cart-items')));
  const cartItems = menu.getByTestId('cart-items');
  expect(cartItems.children.length).toBe(2);
});
