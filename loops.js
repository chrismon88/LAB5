let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach(function(bird,index){
    // repeat once for each object in array
    //function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})

for ( let x = 0 ; x < birds.length ; x = x+1) { /// x+1 works but when short hand stuck in loop
    let bird = birds[x]
   console.log(x, bird.toUpperCase())


}
// creating an oject. values can be sring, number, lists, pther objects
let user = {
    name: 'Christian',
    email:'chrismon@bigtechcompany.com',
        password: 'Teamon',
    userid: 1257,
      roles: ['Sr programmer','jr software devop', 'QA']  , // roles are stored in an array
    contact:{                   //contact values are in another object
    phone:'763-464-7033',
    office:' MG 101'}
}
user.salary = 120000
user.roles.push('server admin')
user.userid = 420 // change the user id
console.log(user)

console.log('User roles are:', user.roles) //print roles array
console.log('Users roles are: ',user['roles']) // print roles array, other version
console.log('Users first role is ' + user.roles[0])

// all of the user's roles
console.log('All of the user roles are: ')
user.roles.forEach(function (role){
    console.log(role)
})