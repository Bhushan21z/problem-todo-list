import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Todo List', () => {
  test('renders multiple tasks correctly', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByText(/add task/i);

    // Add multiple tasks
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    tasks.forEach(task => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.click(button);
    });

    // Check if all tasks are rendered
    tasks.forEach(task => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });

  test('tasks are rendered in list items', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter a task/i);
    const button = screen.getByText(/add task/i);

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });

  test('list is initially empty', () => {
    render(<App />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
