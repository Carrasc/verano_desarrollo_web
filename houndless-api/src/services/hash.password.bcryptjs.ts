import {genSalt, hash} from 'bcryptjs';
import {compare} from 'bcryptjs';
import {inject} from '@loopback/core';
import {PasswordHasherBindings} from '../key';

/**
 * Service HashPassword using module 'bcryptjs'.
 * It takes in a plain password, generates a salt with given
 * round and returns the hashed password as a string
 */
export type HashPassword = (
  contrasenia: string,
  rounds: number,
) => Promise<string>;
// bind function to `services.bcryptjs.HashPassword`
export async function hashPassword(
  contrasenia: string,
  rounds: number,
): Promise<string> {
  const salt = await genSalt(rounds);
  return await hash(contrasenia, salt);
}

export interface PasswordHasher<T = string> {
  hashPassword(contrasenia: T): Promise<T>;
  comparePassword(providedPass: T, storedPass: T): Promise<boolean>;
}

export class BcryptHasher implements PasswordHasher<string> {
  constructor(
    @inject(PasswordHasherBindings.ROUNDS)
    private readonly rounds: number,
  ) {}

  async hashPassword(contrasenia: string): Promise<string> {
    const salt = await genSalt(this.rounds);
    return await hash(contrasenia, salt);
  }

  async comparePassword(
    providedPass: string,
    storedPass: string,
  ): Promise<boolean> {
    const passwordIsMatched = await compare(providedPass, storedPass);
    return passwordIsMatched;
  }
}