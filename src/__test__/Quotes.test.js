import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

describe('Confirming display of quote', () => {
  it('quote displays', () => {
    const quoteDisplay = renderer.create(<Quote />).toJSON();
    expect(quoteDisplay).toMatchSnapshot();
  });
});
