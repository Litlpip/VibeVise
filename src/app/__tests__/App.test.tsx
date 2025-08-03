import { render, screen } from '@testing-library/react'
import { App } from '../index'

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  test('renders count button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /count is/i })).toBeInTheDocument()
  })

  test('has initial count of 0', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })
})