import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Main from '../components/Nav';

it('Test if the UI matches ', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Main />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
