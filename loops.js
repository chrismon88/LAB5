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