import * as React from 'react';
import renderer from 'react-test-renderer';
import Sign from '../components/Sign';

describe('button', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('Test if the UI matches ', () => {
    const setState = jest.fn();
    const useState = jest.spyOn(React, 'useState');
    useState.mockImplementation((init) => [init, setState]);

    const [setBtn] = useState('');
    const [obj, setObj] = useState({});

    const handleButtonClick = jest.fn((e) => () => {
      let valeur = '';
      setBtn((p) => {
        valeur = p + e.target.value;
        setObj({ ...obj, next: valeur });
        if (Number.isNaN(parseInt(obj.total, 10))) {
          setObj({ ...obj, total: 0, next: valeur });
        }
        return valeur;
      });
    });

    const tree = renderer.create(<Sign symbole={2} color="gray" func={handleButtonClick} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
