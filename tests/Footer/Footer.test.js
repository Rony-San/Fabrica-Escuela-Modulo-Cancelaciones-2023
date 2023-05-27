import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../src/components/Footer/Footer'

describe('Footer', () => {
    let comp
    test('renders Footer component', () => {
        comp = render(<Footer />)
    })
    beforeEach(() => {
        comp = render(<Footer />)
    })
    it('should render hiperlinks on a container', () => {
        const info = comp.container.querySelector('a')
        expect(info).toBeInTheDocument()
    })
})