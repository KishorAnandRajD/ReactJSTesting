// Helper import
import { renderComponent , expect } from '../test_helper';

// What needs to be tested. In this case its app.js inside the \src\components\   folder
import App from '../../src/components/app';

// 3 keywords
// describe, it, expect

//Use describe to group together similar tests. 'App' is just any string to be displayed in report. But its better to have the name of the application being tested.
describe('App' , () => {

// Use 'it' to test a single attribute of a target
// 'shows the correct text' is just another string to be displayed in report
  it('shows the correct text', () => {
    // Define the component to be used in the 'expect'
    // Render the App component (this is similar to what we see in chrome)
    const component = renderComponent(App);
 
    // 'expect' is to make an assertion about a target . i.e. test the very particular attribute about our target 'app' component
    // In the below case, we are expecting the app component to contain the text 'React simple starter'
    // If it contains, then the test is passing
    expect(component).to.contain('React simple starter');

    //With the below, the test will fail
  //  expect(component).to.contain('React simple starter122321');


    //expect(component).to.exist;
  });
});
