import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Confirming the display of calculator', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('calculator displays', () => {
    const calculatorDisplay = render(<Calculator />);
    expect(calculatorDisplay).toMatchSnapshot();
  });
});
