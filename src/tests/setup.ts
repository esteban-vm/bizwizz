import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/react'

beforeAll(() => {
  configure({ throwSuggestions: true })
})
