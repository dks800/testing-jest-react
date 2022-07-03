import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('tests correct initial button color', () => {
  render(<App />)
  const btn = screen.getByRole("button", {name: 'Change to Blue'});
  expect(btn.textContent).toBe('Change to Blue');
  expect(btn).toHaveStyle({backgroundColor: "Red"});
  fireEvent.click(btn);
  expect(btn).toHaveStyle({backgroundColor: 'Blue'});
  expect(btn.textContent).toBe('Change to Red');
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