import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../firebase/config'

export class AuthRepository {
  async createUserWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }
}
