var user= {
    name:"ahmed",
    age:30,
    gender:"male",
    isMarried:true,
    
    eat:function(meal){
        console.log(meal)
    },
    wife: {
        name:"aya",
        age:25,
        gender:"female",

        son: {
            name:"mostaf",
            age:2,
            gender:"male", 
        }
    }
}

console.log(user.name, user.wife.name,user.wife.son.name);