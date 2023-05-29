import { render} from '@testing-library/react'
import '@testing-library/jest-dom'
import InformacionReglamento from '../../../src/components/Modals/InformacionReglamento'

describe('InformacionReglamento', () => {
    test('renders InformacionReglamento component', () => {
        render(<InformacionReglamento />)
      })
})