import {USER_LEVEL} from "../shared/constants";

export class IUser {
    _id: string;
    firstName: string;
    email: string;
    password: string;
    userLvl: string;
    token:string;
    lastName?: string;
    moviesLiked: [];

    static create(user: Partial<IUser> = {}) {
        const newUser = Object.assign(new IUser(), {
            _id: null,
            firstName: null,
            lastName:null,
            email:null,
            password:null,
            userLvl: USER_LEVEL.USER,
            token:null,
            ...user
        });
        return newUser;
    }
};
