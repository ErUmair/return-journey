import { REGISTER_USER } from "./type";


export function registerUser(dataToSubmit) {
    console.log("dataToSubmit", dataToSubmit);
    return {
        type: REGISTER_USER,
        payload: dataToSubmit
    }
}