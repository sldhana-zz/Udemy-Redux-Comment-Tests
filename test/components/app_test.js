import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//use describe to group similar tests
describe('App', () => {
  let component;
  beforeEach(() => {
    // create an instance of app
    component = renderComponent(App);
  });
  //use 'it' to test a single attribute of a target
  it('shows a CommentBox', () => {
    //use 'expect' to make an assertion about a target
    expect(component.find('.commentBox')).to.exist;
  });

  it('shows a CommentList', () => {
    //use 'expect' to make an assertion about a target
    expect(component.find('.commentList')).to.exist;
  });
});
