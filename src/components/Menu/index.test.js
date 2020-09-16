import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Menu from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter } from 'react-router-dom';

describe('Tests for Menu component', () => {
  it('should render Menu', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
      <Provider store={store}> 
        <ToastProvider>
          <Menu  />
        </ToastProvider>
      </Provider>
      </BrowserRouter>
    );

    const home = await waitForElement(() => getByTestId('link-home'));
    const pokeball = await waitForElement(() => getByTestId('link-pokeball'));
    const image = await waitForElement(() => getByTestId('logo'));

    expect(home.textContent).toEqual('Início');
    expect(pokeball.textContent).toEqual('Pokebola');
    expect(image.src).toEqual('http://localhost/pokeball.svg');
  });
});