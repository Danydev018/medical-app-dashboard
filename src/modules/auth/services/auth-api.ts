import { post } from "../../../config/http";
import { ISignInResponse, ISignUpResponse } from "../interfaces/auth-interfaces";

export const login = async (email: string, password: string) => {
    const data = { email, password };
    console.log(data);
    const response: ISignInResponse = await post('/auth/sign-in', data);

    if (!response.access_token) {
        throw new Error('No access token');
    }

    const adaptResponse = {
        accessToken: response.access_token
    }

    return adaptResponse;
}

export const register = async (email: string, password: string) => {
    const data = { email, password };
    const response: ISignUpResponse = await post('/auth/sign-up', data);

    const adaptResponse = {
        accessToken: response.access_token
    }

    return adaptResponse;
}
