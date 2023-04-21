import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
// import { prettyDOM } from '@testing-library/dom'
// importamos el componente y las funciones que queremos probar
import Example, { isValidEmail, isValidName, isValidPhone } from '../src/components/Example'

describe('isValidEmail', () => {
    // Can use test ot it
    test('should return false when email is empty', () => {
        const email = ''
        const result = isValidEmail(email)
        expect(result).toBe(false)
    })
    it('should return true when email is valid', () => {
        const email = 'jorge.perez@mail.com'
        const result = isValidEmail(email)
        expect(result).toBe(true)
    })
    it('should return true when email is valid', () => {
        const email = 'jorgeperez@mail.com'
        const result = isValidEmail(email)
        expect(result).toBe(true)
    })
    it('should return false when email is invalid', () => {
        const email = 'jorg-e.ma@mail.co'
        const result = isValidEmail(email)
        expect(result).toBe(false)
    })
    it('should return false when email is invalid', () => {
        const email = 'jorganasj.ansjssjandmqm@mail.co'
        const result = isValidEmail(email)
        expect(result).toBe(false)
    })
})

describe('isValidName', () => {
    it('should return false when name is empty', () => {
        const name = ''
        const result = isValidName(name)
        expect(result).toBe(false)
    })
    it('should return true when name is valid', () => {
        const name = 'Jorge Perez'
        const result = isValidName(name)
        expect(result).toBe(true)
    })
})

describe('isValidPhone', () => {
    it('should return false when phone is empty', () => {
        const phone = ''
        const result = isValidPhone(phone)
        expect(result).toBe(false)
    })
    it('should return true when phone is valid', () => {
        const phone = '1234567890'
        const result = isValidPhone(phone)
        expect(result).toBe(true)
    })
    it('should return false when phone is invalid', () => {
        const phone = '123456789'
        const result = isValidPhone(phone)
        expect(result).toBe(false)
    })
})

describe('Example', () => {
    let comp
    beforeAll(() => {
        // Se ejecuta antes de todos los tests
    })
    beforeEach(() => {
        // Se ejecuta antes de cada test
        // Si para cada test se necesita renderizar el componente, sin cambiarle nada, se puede hacer aqui
        // Si no se debe hacer directamente en el test
        comp = render(<Example />)
        //console.log("beforeEach")
    })
    afterEach(() => {
        // Se ejecuta despues de cada test
    })
    afterAll(() => {
        // Se ejecuta despues de todos los tests
    })
    it('should render the following fields', () => {
        // let comp = render(<Example />)
        const nameField = screen.getByLabelText('Name')
        const emailField = screen.getByLabelText('Email')
        const phoneField = screen.getByLabelText('Phone')

        // pasa visualizar una parte o elemento especifica del html
        // util en casos de que el componente renderize muchos elementos
        // console.log(emailField)
        // se pueden inportar la librearía prettyDOM para visualizar mejor el elemento
        // console.log(prettyDOM(nameField))
        
        // en caso de que el test falle cuando no deería, podemos usar el metodo debug
        // para visulizar por consola lo que se esta renderizando
        
        // comp.debug()

        expect(nameField).toBeInTheDocument()
        expect(emailField).toBeInTheDocument()
        expect(phoneField).toBeInTheDocument()
    })
    it('should render the following buttons', () => {
        // let comp = render(<Example />)
        const submitBtn = screen.getByRole('button', { name: 'Submit' })
        // const resetBtn = screen.getByRole('button', { name: 'Reset' })

        expect(submitBtn).toBeInTheDocument()
        // expect(resetBtn).toBeInTheDocument()
    })
    it('should call onSubmit once when I click the submit button.', () => {
        // let comp = render(<Example />)
        const submitBtn = screen.getByRole('button', { name: 'Submit' })
        const onSubmit = jest.fn()
        // obtengamos el formulario
        const form = comp.container.querySelector('form')
        // asignemos la funcion onSubmit al evento onSubmit del formulario
        form.onsubmit = onSubmit
        // click en el boton
        fireEvent.click(submitBtn)
        // comprobemos que la funcion onSubmit se haya llamado una vez
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })
    
    it('should reset the form fields if the data is valid', () => {
        // let comp = render(<Example />)
        // obtengamos los campos
        const nameField = screen.getByLabelText('Name')
        const emailField = screen.getByLabelText('Email')
        const phoneField = screen.getByLabelText('Phone')
        // asignemos valores a los campos
        fireEvent.change(nameField, { target: { value: 'Jorge Perez' } })
        fireEvent.change(emailField, { target: { value: 'jorge.perez@mail.com' } })
        fireEvent.change(phoneField, { target: { value: '1234567890' } })
        // obtengamos el boton
        const submitBtn = screen.getByRole('button', { name: 'Submit' })
        // click en el boton
        fireEvent.click(submitBtn)
        // comprobemos que los campos esten vacios
        expect(nameField.value).toBe('')
        expect(emailField.value).toBe('')
        expect(phoneField.value).toBe('')
    })
})