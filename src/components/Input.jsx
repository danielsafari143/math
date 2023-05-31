import { useState } from 'react';

const Input = () => {
  const [numb, setNum] = useState(0);
  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return <input onChange={handleChange} value={numb} className="inpute" />;
};

export default Input;
