import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/react'
import Todo from './Todo'

describe('Todo component', () => {
  let container

  beforeEach(() => {
    const todo = {
      _id: "67b72c25172ea028e4e17f58",
      text: "Add more tools to my toolbelt",
      done: false,
      __v: 0
    }

    const mockDelete = vi.fn()
    const mockComplete = vi.fn()

    container = render(
      <Todo todo={todo} completeTodo={mockComplete} deleteTodo={mockDelete} />
    ).container
  })

  test('displays todo text', () => {
    const div = container.querySelector('.todo')
    expect(div).toHaveTextContent(
      "Add more tools to my toolbelt"
    )
  })
})