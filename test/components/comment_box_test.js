import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  afterEach(() => {
    component = null;
  });

  it('has the correct class', () => {
      expect(component).to.have.class('commentBox');
  });

  it('has a text area', () => {
    //don't have to user parens to check for to.exist. Chai works
    //behind the scene to recognize this.
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  // nested blocks for related tests
  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('shows text in the text area', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('clears input when form submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })

});
