import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  static add(a: number, b: number) {
    return a + b;
  }

  static subtract(a: number, b: number) {
    return a - b;
  }

  static multiply(a: number, b: number) {
    return a * b;
  }

  static divide(a: number, b: number) {
    return a / b;
  }

}
