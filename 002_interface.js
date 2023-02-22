{
    var user1 = {
        id: 1,
        name: '건빵규',
        age: 33,
        complete: false
    };
    var getUserInfo = function (id) {
        return {
            id: 1,
            name: '건빵규',
            // age: 33,
            complete: false
        };
    };
    console.log(getUserInfo(1));
    var saveUserInfo = function (user) {
        // user.id = 2;    // readonly 오류
    };
    saveUserInfo(user1);
}
