import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Todo Input', () => {
  test('input field accepts user input', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    fireEvent.change(input, { target: { value: 'Test input' } });
    expect(input.value).toBe('Test input');
  });

  test('cannot add empty task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByText(/add task/i);
    const initialTaskCount = screen.queryAllByRole('listitem').length;

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    const afterTaskCount = screen.queryAllByRole('listitem').length;
    expect(afterTaskCount).toBe(initialTaskCount);
  });

  test('add button is present and clickable', () => {
    render(<App />);
    const button = screen.getByText(/add task/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
