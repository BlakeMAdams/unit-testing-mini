const usersFunc = require('./users');
const users = require('./mockData/userData')

test('usersFunc.removePassword(all users) to remove password, checks user[1].password', ()=>{
	// Joe's solution
	// cosnt updatedUsers = users.removePassword(users);
	// const taskComplete = true;
	// updatedUserArray.map( user =>{
	// 	if(user.password) taskcomplete = true;
	// })
	// expect(taskComplete).toEqual(false);

	expect(usersFunc.removePassword(users)).toBeFalsy();
})