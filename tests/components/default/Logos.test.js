import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as reactRedux from 'react-redux'

import Logos from '../../../src/components/default/Logos'

describe('Logos', () => {
    let comp
    test('renders Logos component', () => {
        comp = render(<Logos />)
        comp.debug()
    })
})