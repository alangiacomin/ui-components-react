import Button from './index';
import { render } from '../../../test/utils';

describe('<Button />', () => {
  it('render', () => {
    const { node } = render(<Button />);
    expect(node)
      .not
      .toBeNull();
  });
});
