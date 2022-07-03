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
