import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as reactRedux from 'react-redux'

import Asignaturas from '../../../src/components/componentesProfesores/Asignaturas'

describe('Asignaturas', () => {
    let comp
    test('renders Asignaturas component', () => {
        comp = render(<Asignaturas />)
        comp.debug()
    })
})