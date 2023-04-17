import { isValidEmail } from './Example'

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
        const email = 'jorge.-ma@ma.co'
        const result = isValidEmail(email)
        expect(result).toBe(false)
    })
})