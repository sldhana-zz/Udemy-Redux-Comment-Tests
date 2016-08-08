import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;
  //we need to be able to pass props into this component
  beforeEach(() => {
    const props = {
      comments: ['one', 'two', 'three']
    }
    component = renderComponent(CommentList, null, props);
  });

  it('has the correct class', () => {
      expect(component).to.have.class('commentList');
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provides', () => {
    expect(component).to.contain('one');
    expect(component).to.contain('two');
    expect(component).to.contain('three');
  });
});
