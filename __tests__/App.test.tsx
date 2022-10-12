import React from 'react';
import {
  render,
  fireEvent,
  waitFor
} from "@testing-library/react-native";

import App, { INPUT_TEXT_INVALID, INPUT_TEXT_VALID } from '../App';

describe('When App is loaded', () => {

  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<App />);
  });

  it('Should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should not disable the button if the input has valid text', async () => {

    const input = component.getByTestId('input');
    const button = component.getByTestId('button');

    await waitFor(() => {
      fireEvent.changeText(input, INPUT_TEXT_VALID);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(input.props.value).toBe(INPUT_TEXT_VALID);
      expect(button).toBeEnabled();
    });
  });

  it('Should disable the button if the input has invalid text', async () => {

    const input = component.getByTestId('input');
    const button = component.getByTestId('button');

    await waitFor(() => {
      fireEvent.changeText(input, INPUT_TEXT_INVALID);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(input.props.value).toBe(INPUT_TEXT_INVALID);
      expect(button).toBeDisabled();
    });
  });
});
