const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    googleID:{
        type: String, 
        required: true
    },
    displayName:{
        type: String, 
        required: true
    },
    firstName:{
        type: String, 
        required: true
    },
    lastName:{
        type: String, 
        required: true
    },
    profileImage:{
        type: String, 
        required: true
    },
    createdAt:{
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);

// 從 Google 那邊得到的資料格式
// {

//     id: '116816212701328467409',
//     displayName: '林貫佑',
//     name: { familyName: '林', givenName: '貫佑' },
//     emails: [ { value: 'ed.lin.050798@gmail.com', verified: true } ],
//     photos: [
//     {
//         value: 'https://lh3.googleusercontent.com/a/ACg8ocK5tNZ1mfyUlYbi0L6Zn9gxIGU_mi1jsJBReF8Nriw3bQ=s96-c'
//     }
//     ],
//     provider: 'google',
//     _raw: '{\n' +
//     '  "sub": "116816212701328467409",\n' +
//     '  "name": "林貫佑",\n' +
//     '  "given_name": "貫佑",\n' +
//     '  "family_name": "林",\n' +
//     '  "picture": "https://lh3.googleusercontent.com/a/ACg8ocK5tNZ1mfyUlYbi0L6Zn9gxIGU_mi1jsJBReF8Nriw3bQ\\u003ds96-c",\n' +
//     '  "email": "ed.lin.050798@gmail.com",\n' +
//     '  "email_verified": true,\n' +
//     '  "locale": "zh-TW"\n' +
//     '}',
//     _json: {
//     sub: '116816212701328467409',
//     name: '林貫佑',
//     given_name: '貫佑',
//     family_name: '林',
//     picture: 'https://lh3.googleusercontent.com/a/ACg8ocK5tNZ1mfyUlYbi0L6Zn9gxIGU_mi1jsJBReF8Nriw3bQ=s96-c',
//     email: 'ed.lin.050798@gmail.com',
//     email_verified: true,
//     locale: 'zh-TW'
//     }
// }