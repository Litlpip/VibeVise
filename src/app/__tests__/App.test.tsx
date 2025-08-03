import { render, screen } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { App } from '../index'

const renderWithChakra = (component: React.ReactElement) => {
  return render(
    <ChakraProvider value={defaultSystem}>{component}</ChakraProvider>
  )
}

describe('App Component', () => {
  test('renders without crashing', () => {
    renderWithChakra(<App />)
    expect(screen.getByText('VibeVise - Modern React App')).toBeInTheDocument()
  })

  test('renders count button', () => {
    renderWithChakra(<App />)
    expect(
      screen.getByRole('button', { name: /count is/i })
    ).toBeInTheDocument()
  })

  test('has initial count of 0', () => {
    renderWithChakra(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })
})
