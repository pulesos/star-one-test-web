import {makeAutoObservable} from "mobx";

export default class LoginStore {
    constructor() {
        this._isAuth = false
        this._loginUsers = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setLogin(loginUsers) {
        this._loginUsers = loginUsers
    }

    get isAuth() {
        return this._isAuth
    }
    get loginUsers() {
        return this._loginUsers
    }
}