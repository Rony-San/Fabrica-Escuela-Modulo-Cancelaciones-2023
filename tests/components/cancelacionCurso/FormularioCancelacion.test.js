import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as reactRedux from 'react-redux'

import FormularioCancelacion from '../../../src/components/cancelacionCurso/FormularioCancelacion'

describe('FormularioCancelacion', () => {
    let comp
    test('renders FormularioCancelacion component', () => {
        comp = render(<FormularioCancelacion />)
        // comp.debug()
    })
})