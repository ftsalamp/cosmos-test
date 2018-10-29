import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../__fixtures__/fetch.fixture';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('renders hello', () => {
    expect(getWrapper().text()).toContain('Hello World');
});
