import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    fireEvent.change(screen.getByPlaceholderText("Add todo"), {
      target: { value: "New Todo" },
    });

    fireEvent.click(screen.getByText("Add"));

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

    test("deletes a todo", () => {
    render(<TodoList />);

    // Find the specific todo item
    const todoItem = screen.getByText("Write Tests").closest("li");

    // Find the delete button within that todo
    const deleteButton = within(todoItem).getByText("X");

    fireEvent.click(deleteButton);

    // Re-query the DOM to confirm deletion
    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();
    });
});