//=============== DEFAULT PARAMS ===============
function newUser(name, age, country) {
    var name = name || 'Adrian';
    var age = age || 27;
    var country = country || 'SPN';
    console.log(name, age, country);
}

newUser();
newUser('Anyami', 28, 'VEN');

const newAdmin = (name = 'Yuumi', age = 4, country = 'VEN') => {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Jose', 30, 'PE');