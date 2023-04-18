import { isValidEmail, isValidName } from '../components/Example'

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
    it('should return false when email is invalid', () => {
        const email = 'jorg-e.ma@mail.co'
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