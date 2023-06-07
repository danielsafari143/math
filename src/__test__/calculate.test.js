import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import calculate from '../components/logic/calculate';
import Sign from '../components/Sign';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('Test Calculate addition', () => {
  const setState = jest.fn();
  const useState = jest.spyOn(React, 'useState');
  useState.mockImplementation((init) => [init, setState]);

  const [setBtn] = useState('');
  const [setObj] = useState({});

  const obj = {
    total: 10,
    next: 2,
    operation: '÷',
  };

  const handleButtonClick = jest.fn((e) => () => {
    let valeur = '';
    setBtn((p) => {
      valeur = p + e.target.value;
      setObj({ ...obj, next: valeur });
      if (Number.isNaN(parseInt(obj.total, 10))) {
        setObj({ ...obj, total: 0, next: valeur });
      }
      return valeur;
    });
  });

  const calc = calculate(obj, '=');
  it('test for addition', () => {
    render(<Sign symbole={2} color="gray" func={handleButtonClick} />);
    const equalButton = screen.getByRole('button');
    fireEvent.click(equalButton);
    expect(calc.total).toBe('5');
  });
});

describe('Test Calculate multiply', () => {
  const setState = jest.fn();
  const useState = jest.spyOn(React, 'useState');
  useState.mockImplementation((init) => [init, setState]);

  const [setBtn] = useState('');
  const [setObj] = useState({});

  const obj = {
    total: 6,
    next: 2,
    operation: 'x',
  };

  const handleButtonClick = jest.fn((e) => () => {
    let valeur = '';
    setBtn((p) => {
      valeur = p + e.target.value;
      setObj({ ...obj, next: valeur });
      if (Number.isNaN(parseInt(obj.total, 10))) {
        setObj({ ...obj, total: 0, next: valeur });
      }
      return valeur;
    });
  });

  const calc = calculate(obj, '=');
  it('test for division', () => {
    render(<Sign symbole={2} color="gray" func={handleButtonClick} />);
    const equalButton = screen.getByRole('button');
    fireEvent.click(equalButton);
    expect(calc.total).toBe('12');
  });
});
