import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";
import { EntityValidationError } from "@/shared/erros/validation-error";


let props: UserProps


describe('UserEntity integration tests', () => {
  beforeEach(() => {
    props = UserDataBuilder({})
  })

  describe('Contructor method', () => {

    it('Should thron an error when creating a user with invalid name - error', () => {
      const valid: UserProps= {
        ...props,
        name: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid name - empty', () => {
      const valid: UserProps= {
        ...props,
        name: null as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid name - large', () => {
      const valid: UserProps= {
        ...props,
        name: 'a'.repeat(256) as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })
  })

  it('Should thron an error when creating a user with invalid email - error', () => {
    const valid: UserProps= {
      ...props,
      email: '' as any
    }
    expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
  })

  it('Should thron an error when creating a user with invalid email - empty', () => {
    const valid: UserProps= {
      ...props,
      email: "qualquercoisa" as any
    }
    expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
  })

  it('Should thron an error when creating a user with invalid email - large', () => {
    const valid: UserProps= {
      ...props,
      email: 'a'.repeat(256) as any
    }
    expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
  })

  it('Should thron an error when creating a user with invalid email - error', () => {
      const valid: UserProps= {
        ...props,
        email: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid email - empty', () => {
      const valid: UserProps= {
        ...props,
        email: "qualquercoisa" as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid email - large', () => {
      const valid: UserProps= {
        ...props,
        email: 'a'.repeat(256) as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid password - error', () => {
      const valid: UserProps= {
        ...props,
        password: '' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid password - large', () => {
      const valid: UserProps= {
        ...props,
        password: 'a'.repeat(101) as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid createdAt - error', () => {
      const valid: UserProps= {
        ...props,
        createdAt: '2024' as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    it('Should thron an error when creating a user with invalid createdAt - large', () => {
      const valid: UserProps= {
        ...props,
        createdAt: 10 as any
      }
      expect(() => new UserEntity(valid)).toThrow(EntityValidationError)
    })

    describe('Update method', () => {
      it('Should throw an error when updating a user with invalid name - null', () => {
        const user = new UserEntity(props)
        expect(() => user.update(null as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid name - empty', () => {
        const user = new UserEntity(props)
        expect(() => user.update('' as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid name - no string', () => {
        const user = new UserEntity(props)
        expect(() => user.update(10 as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid name - large', () => {
        const user = new UserEntity(props)
        expect(() => user.update('a'.repeat(256) as any)).toThrow(EntityValidationError)
      })

      it('Should an valid User', () => {
        expect.assertions(0)
        const user = new UserEntity(props)
        user.update('new name')
      })
    })

    describe('Update method', () => {
      it('Should throw an error when updating a user with invalid password - null', () => {
        const user = new UserEntity(props)
        expect(() => user.updatePassword(null as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid password - empty', () => {
        const user = new UserEntity(props)
        expect(() => user.updatePassword('' as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid password - no string', () => {
        const user = new UserEntity(props)
        expect(() => user.updatePassword(10 as any)).toThrow(EntityValidationError)
      })

      it('Should throw an error when updating a user with invalid password - large', () => {
        const user = new UserEntity(props)
        expect(() => user.updatePassword('a'.repeat(256) as any)).toThrow(EntityValidationError)
      })

      it('Should an valid User', () => {
        expect.assertions(0)
        const user = new UserEntity(props)
        user.updatePassword('new name')
      })
    })
})