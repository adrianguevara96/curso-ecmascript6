//============ ENHANCED OBJECT LITERALS ============
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("adrianjga96", 27, "ES", 1));
