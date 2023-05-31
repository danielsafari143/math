import { useState } from 'react';
import calculate from './logic/calculate';
import Sign from './Sign';

function Calculator() {
  const [btn, setBtn] = useState('');
  const [obj, setObj] = useState({});
  const [calc, setCalc] = useState({});

  const handleButtonClick = (e) => {
    let valeur = '';
    setBtn((p) => {
      valeur = p + e.target.value;
      setObj({ ...obj, next: valeur });
      if (Number.isNaN(parseInt(obj.total, 10))) {
        setObj({ ...obj, total: 0, next: valeur });
      }
      return valeur;
    });
  };

  const handleSigns = (e) => {
    setObj({ ...obj, total: btn, operation: e.target.value });
    setBtn('');
  };

  const handleEqual = (e) => {
    setCalc(() => ({ ...calc, obj, buttonName: e.target.value }));
    if (e.target.value === '=') {
      if (calc.obj !== undefined) {
        const num = calculate(calc.obj, calc.buttonName);
        setBtn(num.total);
        setCalc({});
      }
    } else if (e.target.value === '+/-') {
      if (calc.obj !== undefined) {
        const num = calculate(calc.obj, calc.buttonName);
        setBtn(num.next);
        setCalc({});
      }
    } else {
      setBtn('');
      setObj({});
      setCalc({});
    }
  };

  const handleInput = (e) => {
    setBtn(e.target.value);
  };

  return (
    <div className="calc">
      <input value={btn} onChange={handleInput} className="inpute" />
      <Sign func={handleEqual} color="gray" symbole="A/C" />
      <Sign func={handleEqual} color="gray" symbole="+/-" />
      <Sign func={handleSigns} color="gray" symbole="%" />
      <Sign func={handleSigns} color="orange" symbole="÷" />
      <Sign func={handleButtonClick} color="gray" symbole="7" />
      <Sign func={handleButtonClick} color="gray" symbole="8" />
      <Sign func={handleButtonClick} color="gray" symbole="9" />
      <Sign func={handleSigns} color="orange" symbole="x" />
      <Sign func={handleButtonClick} color="gray" symbole="4" />
      <Sign func={handleButtonClick} color="gray" symbole="5" />
      <Sign func={handleButtonClick} color="gray" symbole="6" />
      <Sign func={handleSigns} color="signs orange" symbole="-" />
      <Sign func={handleButtonClick} color="gray" symbole="1" />
      <Sign func={handleButtonClick} color="gray" symbole="2" />
      <Sign func={handleButtonClick} color="gray" symbole="3" />
      <Sign func={handleSigns} color="orange" symbole="+" />
      <Sign func={handleButtonClick} color="egals gray" symbole="0" />
      <Sign func={handleButtonClick} color="gray" symbole="." />
      <Sign func={handleEqual} color="orange" symbole="=" />
    </div>
  );
}

export default Calculator;
