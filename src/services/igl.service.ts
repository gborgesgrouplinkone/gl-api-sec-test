import { GLPaylaod } from "./gl.payload";

export interface IGLService{
    test(payload: GLPaylaod) : Promise<void>;
}