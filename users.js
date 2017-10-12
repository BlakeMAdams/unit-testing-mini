
module.exports = {
	removePassword(users){
		for(let i=0; i<users.length; i++){
			if(users[i].password){
				delete users[i].password
			}
		}
		return users[1].password;
	}
}