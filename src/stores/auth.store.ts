import { makeAutoObservable } from 'mobx'
import type { UserType } from '../types/user'
import { userStorage } from '../utils/localStorage'

export interface AuthContextType {
  user?: UserType | null
  login: () => void
  signout: () => void
}

class AuthStore {
  user?: UserType | null = userStorage.getUser() || null

  constructor() {
    makeAutoObservable(this)
  }

  login(user: UserType) {
    userStorage.setUser(user)
    this.user = user
  }

  signout() {
    this.user = null;
    userStorage.clearUser();
  }
}

const authStore = new AuthStore()
export default authStore
