import Input from './index';
import { render } from '../../../test/utils';

describe('<Input />', () => {
  it('render', () => {
    const { node } = render(<Input
      name="inputName"
    />);
    expect(node)
      .not
      .toBeNull();
  });
});
