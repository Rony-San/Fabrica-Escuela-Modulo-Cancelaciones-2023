import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ModalReglamento from '../../../src/components/Modals/ModalReglamento'

describe('ModalReglamento', () => {
    let comp

    let state = true
    function setState(bool) {
        state = bool
    }

    test('renders InformacionReglamento component', () => {
        comp = render(<ModalReglamento mostrarAd={state} setMostrarAd={setState} contenido={""} />)
    })
    it('should render the following buttons', () => {
        comp = render(<ModalReglamento mostrarAd={state} setMostrarAd={setState} contenido={""} />)
        const closeBtn = screen.getByRole('button', { name: 'Cerrar' })
        fireEvent.click(closeBtn)
        expect(closeBtn).toBeInTheDocument()
    })
})