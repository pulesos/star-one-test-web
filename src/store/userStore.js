import {makeAutoObservable} from "mobx";

export default class LoginStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setLogin(login) {
        this._login = login
    }

    get isAuth() {
        return this._isAuth
    }
    get login() {
        return this._login
    }
}