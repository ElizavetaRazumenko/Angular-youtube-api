import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  test('should initialize with default values', () => {
    expect(loginService.isAuthUser.getValue()).toBeFalsy();
    expect(loginService.buttonLogTextContent.getValue()).toBe('Login');
  });

  test('should set auth user and update button text on login', () => {
    loginService.UserIsAuth();

    expect(loginService.isAuthUser.getValue()).toBeTruthy();
    expect(loginService.buttonLogTextContent.getValue()).toBe('Logout');
  });

  test('should unset auth user and update button text on logout', () => {
    loginService.UserIsNotAuth();

    expect(loginService.isAuthUser.getValue()).toBeFalsy();
    expect(loginService.buttonLogTextContent.getValue()).toBe('Login');
  });

  test('should update localStorage on login', () => {
    loginService.UserIsAuth();

    expect(localStorage.getItem('authToken')).toBe('123456');
  });

  test('should remove authToken from localStorage on logout', () => {
    loginService.UserIsNotAuth();

    expect(localStorage.getItem('authToken')).toBeNull();
  });
});
