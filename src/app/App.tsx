import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Image,
  Card,
  Flex,
} from '@chakra-ui/react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import './globals.module.css'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <Box
      className={styles['appContainer']}
      bg={isDark ? 'gray.900' : 'gray.50'}
      color={isDark ? 'white' : 'gray.800'}
    >
      <Container maxW="md" py={8}>
        <Flex justify="flex-end" mb={4}>
          <Button
            className={styles['themeToggle']}
            onClick={toggleTheme}
            variant="ghost"
            size="lg"
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
          </Button>
        </Flex>

        <VStack gap={8}>
          <HStack gap={4}>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={viteLogo}
                alt="Vite logo"
                boxSize="60px"
                className={styles['logo']}
              />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={reactLogo}
                alt="React logo"
                boxSize="60px"
                className={`${styles['logo']} ${styles['logoSpin']}`}
              />
            </a>
          </HStack>

          <Heading size="4xl" textAlign="center" color="blue.500">
            VibeVise - Modern React App
          </Heading>

          <Card.Root
            bg={isDark ? 'gray.800' : 'white'}
            shadow="md"
            borderRadius="xl"
            width="full"
          >
            <Card.Body textAlign="center">
              <VStack gap={4}>
                <Button
                  colorPalette="blue"
                  size="lg"
                  onClick={() => setCount(count + 1)}
                >
                  count is {count}
                </Button>
                <Text fontSize="sm" color={isDark ? 'gray.400' : 'gray.600'}>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </Text>
              </VStack>
            </Card.Body>
          </Card.Root>

          <Text
            fontSize="sm"
            color={isDark ? 'gray.400' : 'gray.500'}
            textAlign="center"
          >
            Click on the Vite and React logos to learn more
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default App
