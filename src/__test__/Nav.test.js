import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import { MemoryRouter } from 'react-router-dom';

it('Test if the UI matches ', () => {
  const tree = renderer.create(
    <MemoryRouter>
        <Nav />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
