import Form from './index';
import { render } from '../../../test/utils';

describe('<Form />', () => {
  it('render', () => {
    const { node } = render(<Form onChange={() => null} />);
    expect(node)
      .not
      .toBeNull();
  });
});
