import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder"
import {
  UserRules,
  UserValidator,
  UserValidatorFactory
} from "../../user.validator"
import { UserProps } from "@/users/domain/entities/user.entity"

let sut: UserValidator
let props: UserProps

describe('UserValidator uit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create()
    props = UserDataBuilder({})
  })

  it('Valid case for uiser validator class', () => {
    const isValid = sut.validate(props)
    expect(isValid).toBeTruthy()
    expect(sut.validatedData).toStrictEqual(new UserRules(props))
  })

  describe('Name field', () => {
    it('Name field is null - error', () => {
      const isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters'
      ])
    })

    it('Name field is empty - error', () => {
      const isValid = sut.validate({
        ...props,
        name: '' as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty'
      ])
    })

    it('Name field is a number - error', () => {
      const isValid = sut.validate({
        ...props,
        name: 10 as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters'
      ])
    })

    it('Name field is larger than 255 characters - error', () => {
      const isValid = sut.validate({
        ...props,
        name: 'a'.repeat(256) as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['name']).toStrictEqual([        'name must be shorter than or equal to 255 characters'
      ])
    })

    it('Name field is valid', () => {
      const isValid = sut.validate(props)
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('email field', () => {
    it('email field is null - error', () => {
      const isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
        'email must be an email'
      ])
    })

    it('email field is empty - error', () => {
      const isValid = sut.validate({
        ...props,
        email: '' as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be an email'
      ])
    })

    it('email field is a number - error', () => {
      const isValid = sut.validate({
        ...props,
        email: 10 as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be a string',
        'email must be shorter than or equal to 255 characters',
        'email must be an email'
      ])
    })

    it('email field is larger than 255 characters - error', () => {
      const isValid = sut.validate({
        ...props,
        email: 'a'.repeat(256) as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['email']).toStrictEqual([
        'email must be shorter than or equal to 255 characters',
        'email must be an email'
      ])
    })

    it('email field is valid', () => {
      const isValid = sut.validate(props)
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('password field', () => {
    it('password field is null - error', () => {
      const isValid = sut.validate(null as any)
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 255 characters',
      ])
    })

    it('password field is empty - error', () => {
      const isValid = sut.validate({
        ...UserDataBuilder({}),
        password: '' as any
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
      ])
    })

    it('password field is a number - error', () => {
      const isValid = sut.validate({
        ...UserDataBuilder({}),
        password: '10'
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be a string',
      ])
    })

    it('password field is larger than 100 characters - error', () => {
      const isValid = sut.validate({
        ...UserDataBuilder({}),
        password: 'a'.repeat(101)
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['password']).toStrictEqual([
        'password must be shorter than or equal to 100 characters',
      ])
    })

    it('password field is valid', () => {
      const props = UserDataBuilder({})
      const isValid = sut.validate(props)
      expect(isValid).toBeTruthy()
      expect(sut.validatedData).toStrictEqual(new UserRules(props))
    })
  })

  describe('CreatedAt field', () => {
    it('CreatedAt field is a number - error', () => {
      const isValid = sut.validate({
        ...props,
        createdAt: 10 as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['createdAt']).toStrictEqual([
        'createdAt must be a Date Instance'
      ])
    })

    it('CreatedAt field is a sting - error', () => {
      const isValid = sut.validate({
        ...props,
        createdAt: '2024' as any,
      })
      expect(isValid).toBeFalsy()
      expect(sut.errors['createdAt']).toStrictEqual([
        'createdAt must be a Date Instance'
      ])
    })
  })
})