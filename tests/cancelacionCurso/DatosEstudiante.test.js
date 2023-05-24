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
        auth: {
            user: 'usuario',
        }
    }

    beforeEach(() => {
        // Se ejecuta antes de cada test
        // Si para cada test se necesita renderizar el componente, sin cambiarle nada, se puede hacer aqui
        // Si no se debe hacer directamente en el test
        comp = render(<DatosEstudiante />)
        useSelectorMock.mockImplementation(selector => selector(mockStore))
        //console.log("beforeEach")
    })
    afterEach(()=> {
        useSelectorMock.mockClear()
    })
    it('should render the following texts', () => {
        // let comp = render(<DatosEstudiante />)
        // const todayText = screen.getByText('today')
        const nowText = screen.getByText('now')

        // comp.debug()

        //expect(todayText).toBeInTheDocument()
        expect(nowText).toBeInTheDocument()
    })
    it('should render a ul by userState', () => {
        const wrapper = shallow(<userState />)
        expect(wrapper.find('ul').length).toBe(4)
    })
    it('should render the following buttons', () => {
        // let comp = render(<DatosEstudiante />)
        const rulesBtn = screen.getByRole('button', { name: 'Reglamento' })

        expect(rulesBtn).toBeInTheDocument()
    })
})