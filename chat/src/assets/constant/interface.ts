/* user signup */
export interface UserSignup {
    name: string
    email: string
    password: string
    confirmPassword: string
    alert: number
    errors: {
        name: string
        email: string
        password: string
        confirmPassword: string
    }
}

/* sign up props & event */
export interface PropsSignup {
    addSignupUser: (data: UserSignup) => void;
    user: UserSignup[];
    history?: any
}

/* sign in props & event */
export interface UserSignin {
    email: string
    password: string
    alert: number
    errors: {
        email: string
        password: string
    }
}

export interface PropsSignin {
    checkSigninUser: (data: UserSignin) => void;
    user: UserSignin[];
    history?: any
}

/* State interfaces */

export interface StateList {
    user: []
}

export interface MyAction {
    type: string;
    payload?: any;
}

/* user update name */
export interface UserUpdateName {
    updateName: string
    errors: {
        updateName: string
    }
}

/* user update password */
export interface UserUpdatePassword {
    oldPassword: string
    newUpdatePassword: string
    newConfirmPassword: string
    errors: {
        oldPassword: string
        newUpdatePassword: string
        newConfirmPassword: string
    }
}

// ********************************************

export interface UserState {
    name: string
    email: string
    password: string
}

export interface SessionState {
    status: number
    userEmail: string
    userName: string
}

export interface requestState {
    from: string
    to: string
    fromName: string
    toName: string
    status: number
}

export interface chatState {
    from: string
    to: string
    message: string
    time: string
}

export interface reduxState {
    user: UserState[]
    session: SessionState
    request: requestState[]
    chat: chatState[]
}