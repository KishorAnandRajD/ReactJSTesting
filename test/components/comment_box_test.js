// Helper import
import { renderComponent , expect } from '../test_helper';

// What needs to be tested. In this case its app.js inside the \src\components\  folder
import CommentBox from '../../src/components/comment_box';

describe('Comment Box',()=>{
  let component;//declare
// Instead of declaring component in every 'it' use it at the top
//beforeEach() runs before any of the if statement
// Runs number of times based on total 'if' statement
  beforeEach(() => {
    // Render the CommentBox component (this is similar to what we see in chrome)
    component = renderComponent(CommentBox);
  });

  it('has a text area',()=>{
    // Need to check if the Text Area exists after rendering
    //https://github.com/chaijs/chai-jquery   - contains list of assertions to be used in expect
    // The test in on the text area inside the component. So use jQuery method '.find()'
    // This is for <textarea/> in comment_box.js file
    expect(component.find('textarea')).to.exist;
  });

// This is for   <button>Submit Comment</button> in comment_box.js file
  it('has a button',()=>{
  // Button to exist
  expect(component.find('button')).to.exist;
  });

  // This is for   <div className="comment-box"> in comment_box.js file
  it('has the correct div class',()=>{
      expect(component).to.have.class('comment-box');
  });

});
