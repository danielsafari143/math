import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('navbar', () => {
  it('Test if the UI matches ', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
