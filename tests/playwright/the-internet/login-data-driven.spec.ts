import { test, expect } from '@playwright/test';

// Zadanie: dla każdego przypadku poniżej wygeneruj osobny test, który loguje się na
// https://the-internet.herokuapp.com/login i sprawdza komunikat błędu.

const cases = [
  { username: 'wrong_user', password: 'SuperSecretPassword!', error: 'Your username is invalid!' },
  { username: 'tomsmith', password: 'wrong_password', error: 'Your password is invalid!' },
  { username: '', password: '', error: 'Your username is invalid!' },
];

// TODO
