import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import Card from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import { ToastProvider } from 'react-toast-notifications';

const mock = {
  name: 'Pokemon test',
  weight: 1,
  height: 2,
  sprites: {
    other: {
      dream_world: {
        front_default: 'img.svg'
      }
    }
  },
  stats: [
    {
      base_stat: 1
    },
    {
      base_stat: 2,
    },
    {
      base_stat: 3
    },
    {
      base_stat: 4,
    },
    {
      base_stat: 5
    },
    {
      base_stat: 6
    }
  ],
  types: [
    {
      type: {
        name: 'Type'
      }
    }
  ]
}

describe('Tests for Card component', () => {
  it('should change status activePokeball when click button', async () => {
    const { getByTestId } = render(
      <Provider store={store}> 
        <ToastProvider>
          <Card data={mock} />
        </ToastProvider>
      </Provider>
    );
    const buttonCard = await waitForElement(() => getByTestId('button-card'));

    expect(buttonCard.textContent).toEqual('Capturar');

    fireEvent.click(buttonCard);

    expect(buttonCard.textContent).toEqual('Devolver');
  });

  it('should test render image', async () => {
    const { getByTestId } = render(
      <Provider store={store}> 
        <ToastProvider>
          <Card data={mock} />
        </ToastProvider>
      </Provider>
    );

    const imageCard = await waitForElement(() => getByTestId('img-card'));

    expect(imageCard.src).toEqual('http://localhost/pokeball.svg');
  })
});