import renderer from 'react-test-renderer';
import Sign from '../components/Sign';

it('Test if the UI matches ', () => {
  const handleEquale = jest.fn((e) => e.target.value);
  const tree = renderer.create(<Sign symbole={2} color="gray" func={handleEquale} />).toJSON();
  expect(tree).toMatchSnapshot();
});
