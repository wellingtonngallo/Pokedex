import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import Search from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import { ToastProvider } from 'react-toast-notifications';

describe('Tests for Search component', () => {
  it('should search pokemon', async () => {
    const { getByTestId } = render(
      <Provider store={store}> 
        <ToastProvider>
          <Search />
        </ToastProvider>
      </Provider>
    );

    const searchInput = await waitForElement(() => getByTestId('search-input'));
    const pokemonWannaSearch = '100';

    fireEvent.change(
      searchInput,
      { target: { value: pokemonWannaSearch }}
    );

    expect(searchInput.value).toEqual(pokemonWannaSearch);

    const buttonSubmit  = await waitForElement(() => getByTestId('button-submit'));

    fireEvent.click(buttonSubmit);

    expect(buttonSubmit.textContent).toEqual('Buscar');

  });
});