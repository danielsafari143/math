import renderer from 'react-test-renderer';
import Main from '../components/Nav';
import { MemoryRouter } from 'react-router-dom';

it('Test if the UI matches ', () => {
  const tree = renderer.create(
    <MemoryRouter>
        <Main />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
