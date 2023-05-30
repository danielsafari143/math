import Input from './input';
import Sign from './sign';
import Egal from './egal';

const Calculator = () => (
  <div className="calc">
    <Input />
    <Sign color="gray" symbole="A/C" />
    <Sign color="gray" symbole="+/-" />
    <Sign color="gray" symbole="%" />
    <Sign color="orange" symbole="÷" />
    <Sign color="gray" symbole={7} />
    <Sign color="gray" symbole={8} />
    <Sign color="gray" symbole={9} />
    <Sign color="orange" symbole="×" />
    <Sign color="gray" symbole={4} />
    <Sign color="gray" symbole={5} />
    <Sign color="gray" symbole={6} />
    <Sign color="orange" symbole="-" />
    <Sign color="gray" symbole={1} />
    <Sign color="gray" symbole={2} />
    <Sign color="gray" symbole={3} />
    <Sign color="orange" symbole="+" />
    <Egal color="gray" symbole={0} />
    <Sign color="gray" symbole="." />
    <Sign color="orange" symbole="=" />
  </div>
);

export default Calculator;
