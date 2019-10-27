
export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function findById(array, id) {
    // gets number of items in array. loops through each
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

    //compares
        if (item.id === id) {
            return item;
        }
    }

    // if it does not find a match
    return null;
}