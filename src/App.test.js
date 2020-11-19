import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculate button', () => {
  render(<App />);
  const calcElement = screen.getByText(/Calculate/i);
  expect(calcElement).toBeInTheDocument();
});
