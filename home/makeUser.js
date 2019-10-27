

function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        role: formData.get('role'),
        hp: 75,
        nuyen: 0,
        completed: {}
    };

    return user;
}

export default makeUser;