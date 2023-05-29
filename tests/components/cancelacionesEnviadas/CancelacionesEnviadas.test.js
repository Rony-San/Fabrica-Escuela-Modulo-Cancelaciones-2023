import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import CancelacionesEnviadas from '../../../src/components/cancelacionesEnviadas/CancelacionesEnviadas'

describe('CancelacionesEnviadas', () => {
    let comp
    test('renders CancelacionesEnviadas component', () => {
        comp = render(<CancelacionesEnviadas />)
        // comp.debug()
    })
})