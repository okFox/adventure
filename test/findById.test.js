// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById } from '../common/utils.js';


const test = QUnit.test;

test('Locate ID in array', function(assert) {
    //Arrange
    // Set up your parameters and expectations
  
    const array = [
        { id: 'slums', visited: false },
        { id: 'heights', visited: true },
        { id: 'towers', visited: false }
    ];
    const id = 'slums';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const match = findById(array, id);

    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(match.id, id);
});
