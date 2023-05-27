import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as reactRedux from 'react-redux'

import DatosEstudiante from '../../src/components/cancelacionCurso/DatosEstudiante'

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

describe('DatosEstudiante', () => {
    //Test
    let comp
    const useSelectorMock = reactRedux.useSelector
    const mockStore = {
        nombre: 'nombre',
        apellido: 'apellido',
        programaAcademico: 'progAcademico',
        nivelAcademico: 'nivelAcademico',
        auth: {
            user: 'usuario',
        }
    }
    let userState = useSelectorMock.mockImplementation(selector => selector(mockStore))
    test('renders DatosEstudiante component', () => {
        comp = render(<DatosEstudiante />)
        // comp.debug()
    })
    beforeEach(() => {
        userState = useSelectorMock.mockImplementation(selector => selector(mockStore))
        comp = render(<DatosEstudiante />)
    })
    afterEach(()=> {
        useSelectorMock.mockClear()
    })
    it('should render the following texts', () => {
        const date = new Date().toLocaleDateString('es-co')
        const nowText = screen.getByText(date).textContent
        expect(nowText).toBe(date)
    })
    it('should render the following buttons', () => {
        const rulesBtn = screen.getByRole('button', { name: 'Reglamento' })
        expect(rulesBtn).toBeInTheDocument()
    })
    it('should call onClick once when I click the rules button.', () => {
        const rulesBtn = screen.getByRole('button', { name: 'Reglamento' })
        const onClick = jest.fn()
        rulesBtn.onclick = onClick
        fireEvent.click(rulesBtn)
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})