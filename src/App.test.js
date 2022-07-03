import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelcaseWithSpace} from './App';

test('tests correct initial button color', () => {
  render(<App />)
  const btn = screen.getByRole("button", {name: 'Change to Midnight Blue'});
  expect(btn.textContent).toBe('Change to Midnight Blue');
  expect(btn).toHaveStyle({backgroundColor: "Medium Violet Red"});
  fireEvent.click(btn);
  expect(btn).toHaveStyle({backgroundColor: 'Midnight Blue'});
  expect(btn.textContent).toBe('Change to Medium Violet Red');
});

test('tests initial conditions', ()=> {
  render(<App />);
  const btn = screen.getByRole("button");
  expect(btn).toBeEnabled();
  const cbx = screen.getByRole("checkbox");
  expect(cbx).not.toBeChecked();
})

test('tests checkbox clicks to enable or disable button', () => {
  render(<App />)
  const btn = screen.getByRole("button");
  const cbx = screen.getByRole("checkbox", {name: 'Disable button'});
  fireEvent.click(cbx);
  expect(cbx).toBeChecked();
  expect(btn).toBeDisabled();
  fireEvent.click(cbx);
  expect(cbx).not.toBeChecked();
  expect(btn).toBeEnabled();
})

test('tests if button turn grey when disabled', () => {
  render(<App />)
  const btn = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const cbx = screen.getByRole('checkbox');
  fireEvent.click(cbx);
  expect(btn).toBeDisabled();
  expect(btn).toHaveStyle({backgroundColor: 'grey'});
  fireEvent.click(cbx);
  expect(btn).toBeEnabled();
  expect(btn).toHaveStyle({backgroundColor: "Medium Violet Red"});
  fireEvent.click(btn);
  expect(btn).toHaveStyle({backgroundColor: "Midnight Blue"});
  fireEvent.click(cbx);
  expect(btn).toBeDisabled();
  fireEvent.click(cbx);
  expect(btn).toBeEnabled();
  expect(btn).toHaveStyle({backgroundColor: "Midnight Blue"});
})

describe('spaces before camel case letters', () => {
  test('tests no camelcase in word', () => {
    expect(replaceCamelcaseWithSpace("Red")).toBe("Red")
  })
  test('tests single camelcase in word', () => {
    expect(replaceCamelcaseWithSpace("MidnightBlue")).toBe("Midnight Blue")
  })
  test('tests multiple camelcase in word', () => {
    expect(replaceCamelcaseWithSpace("MediumVioletRed")).toBe("Medium Violet Red")
  })
})