//  Making and understanding inheritance
class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Player extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
    
}

gamer1 = new Player("joy","joy@3121.ca","rig385,.f[")

console.log(gamer1 instanceof User)
