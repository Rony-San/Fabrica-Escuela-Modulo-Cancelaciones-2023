import { isValidEmail, isValidPhone } from '../components/Example'

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
    it('should return false when phone is invalid', () => {
        const phone = '12345-6789'
        const result = isValidPhone(phone)
        expect(result).toBe(false)
    })
})