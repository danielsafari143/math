import { useState } from 'react';
import calculate from './logic/calculate';

function Calculator() {
  const [btn, setBtn] = useState('');
  const [obj, setObj] = useState({});
  const [calc, setCalc] = useState({});

  const handleButtonClick = (e) => {
    let valeur = '';
    setBtn((p) => {
      valeur = p + e.target.value;
      setObj({ ...obj, next: parseInt(valeur, 10) });
      return valeur;
    });
  };

  const handleSigns = (e) => {
    setObj({ ...obj, total: parseInt(btn, 10), operation: e.target.value });
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
      <input type="button" onClick={handleEqual} className="signs gray" value="A/C" />
      <input type="button" onClick={handleEqual} className="signs gray" value="+/-" />
      <input type="button" onClick={handleSigns} className="signs gray" value="%" />
      <input type="button" onClick={handleSigns} className="signs orange" value="÷" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="7" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="8" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="9" />
      <input type="button" onClick={handleSigns} className="signs orange" value="x" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="4" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="5" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="6" />
      <input type="button" onClick={handleSigns} className="signs orange" value="-" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="1" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="2" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="3" />
      <input type="button" onClick={handleSigns} className="signs orange" value="+" />
      <input type="button" onClick={handleButtonClick} className="egals gray" value="0" />
      <input type="button" onClick={handleButtonClick} className="signs gray" value="." />
      <input type="button" onClick={handleEqual} className="signs orange" value="=" />
    </div>
  );
}

export default Calculator;
