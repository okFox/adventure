import makeUser from '../home/makeUser.js';
import { saveUser } from '../common/utils.js';


//the whole form is id= user-sign-up
const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    saveUser(user);

    window.location.map;
});