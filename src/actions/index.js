export const INCREMENT = 'INCREMENT'; 
export const DECREMENT = 'DECREMENT'; 
export const RESET = 'RESET'; 
export const PUSH = 'PUSH';

export function increment() {
     return { type: INCREMENT }; 
    } 
export function decrement() {
     return { type: DECREMENT }; 
    } 
export function reset() {
    return { type: RESET }; 
    } 
export function push() {
 return { type: PUSH }; 
    } 

