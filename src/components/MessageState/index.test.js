import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import MessageState from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import { ToastProvider } from 'react-toast-notifications';

describe('Tests for Menu component', () => {
  it('should render Menu', async () => {
    const { getByTestId } = render(
      <Provider store={store}> 
        <ToastProvider>
          <MessageState  message={'Teste emptyState'} logo={'test-logo.png'} />
        </ToastProvider>
      </Provider>
    );

    const message = await waitForElement(() => getByTestId('message'));
    const image = await waitForElement(() => getByTestId('logo'));

    expect(message.textContent).toEqual('Teste emptyState');
    expect(image.src).toEqual('http://localhost/test-logo.png');
  });
});