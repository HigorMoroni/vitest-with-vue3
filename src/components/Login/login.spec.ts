import {render, screen} from '@testing-library/vue';
import Login from './index.vue';

describe('Test the Login component', () => {
  it('should have a title write "Login"', async () => {
    render(Login);

    const title = await screen.findByRole('heading', {
      name: 'Login'
    });

    expect(title).toBeInTheDocument();
  });

  it('should have a email input in the screen', async () => {
    render(Login);

    const input = await screen.findByPlaceholderText('Insira seu e-mail');

    expect(input).toBeInTheDocument();
  });

  it('should have a password input in the screen', async () => {
    render(Login);

    const input = await screen.findByPlaceholderText('Insira sua senha');

    expect(input).toBeInTheDocument();
  });

  it('should have a login button in the screen', async () => {
    render(Login);

    const button = await screen.findByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('Login');
  });
});