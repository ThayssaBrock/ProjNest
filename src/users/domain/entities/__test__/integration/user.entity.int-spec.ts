import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";
import { EntityValidationError } from "@/shared/erros/validation-error";

describe('UserEntity integration tests', () => {
  let props: UserProps;

  beforeEach(() => {
    props = UserDataBuilder({});
  });

  describe('Constructor method', () => {
    it('Should throw an error when creating a user with invalid name', () => {
      let invalidProps: UserProps = { ...props, name: null };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, name: '' };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, name: 10 as any };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, name: 'a'.repeat(256) };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid email', () => {
      let invalidProps: UserProps = { ...props, email: null };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, email: '' };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, email: 10 as any };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, email: 'a'.repeat(256) };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid password', () => {
      let invalidProps: UserProps = { ...props, password: null };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, password: '' };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, password: 10 as any };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, password: 'a'.repeat(101) };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid createdAt', () => {
      let invalidProps: UserProps = { ...props, createdAt: '2023' as any };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);

      invalidProps = { ...props, createdAt: 10 as any };
      expect(() => new UserEntity(invalidProps)).toThrowError(EntityValidationError);
    });

    it('Should create a valid user', () => {
      expect.assertions(0);
      const validProps: UserProps = { ...props };
      new UserEntity(validProps);
    });
  });

  describe('Update method', () => {
    it('Should throw an error when updating a user with invalid name', () => {
      const entity = new UserEntity(props);
      expect(() => entity.update(null)).toThrowError(EntityValidationError);
      expect(() => entity.update('')).toThrowError(EntityValidationError);
      expect(() => entity.update(10 as any)).toThrowError(EntityValidationError);
      expect(() => entity.update('a'.repeat(256))).toThrowError(EntityValidationError);
    });

    it('Should update to a valid user', () => {
      expect.assertions(0);
      const entity = new UserEntity(props);
      entity.update('other name');
    });
  });

  describe('UpdatePassword method', () => {
    it('Should throw an error when updating a user with invalid password', () => {
      const entity = new UserEntity(props);
      expect(() => entity.updatePassword(null)).toThrowError(EntityValidationError);
      expect(() => entity.updatePassword('')).toThrowError(EntityValidationError);
      expect(() => entity.updatePassword(10 as any)).toThrowError(EntityValidationError);
      expect(() => entity.updatePassword('a'.repeat(101))).toThrowError(EntityValidationError);
    });

    it('Should update to a valid password', () => {
      expect.assertions(0);
      const entity = new UserEntity(props);
      entity.updatePassword('other password');
    });
  });
});
