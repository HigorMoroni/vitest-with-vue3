import { render, screen } from '@testing-library/vue';
import App from './App.vue';

describe('Testa o componente App', () => {
  test('Deve haver um titulo na página', async () => {
    render(App);

    const title = await screen.findByRole("heading");

    expect(title).toBeInTheDocument();
  });

  test('Deve haver um titulo escrito "Hello World"', async () => {
    render(App);

    const title = await screen.findByRole("heading");

    expect(title.textContent).toBe("Hello World");
  });
})