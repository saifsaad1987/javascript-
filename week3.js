/ 1
    let myString = "hlello , this , is , a ,difficult,to ,Read ,sentens" ; 
   
     console.log( "the length of this string is : ",myString.length) ; 

 //2
    let myString = "hlello this is a difficultto Read sentens" ; 
     console.log (myString); 

  // Array 
  
  //1
      favoriteAnimals=["blowfish", "capricorn", "giraffe"] ; 
     favoriteAnimals.push("turtle") ; 
      console.log(favoriteAnimals) ; 

  // 2
     myNewArray = [ "blowfish", "capricorn", "giraffe", "cat","dog","camel"] ; 
     console.log (myNewArray) ; 

// 3 

   let favoriteAnimals=["blowfish", "capricorn", "giraffe"] ; 
   favoriteAnimals.splice( 1 , 0 ,"meerkat","blowfish" )
     console.log(favoriteAnimals) ; 

// 4
    let favoriteAnimals= ["blowfish", "meerkat", "blowfish", "capricorn", "giraffe"] ; 
    let slis=  favoriteAnimals.slice(1,3) ; 
     console.log(slis);  
    console.log (favoriteAnimals) ; 
    console.log("The array has a length of " ,favoriteAnimals.length);

    let favoriteAnimals= ["blowfish", "meerkat", "blowfish", "capricorn", "giraffe"] ; 
    console.log(favoriteAnimals) ; 
    
      //7
     let favoriteAnimals= ["blowfish", "meerkat", "blowfish", "capricorn", "giraffe"] ; 
       let delet =favoriteAnimals.pop() ; 
    console.log(delet) ; 
      
    //8 
    let favoriteAnimals= ["blowfish", "meerkat", "blowfish", "capricorn", "giraffe"] ;
       let serch = favoriteAnimals.indexOf("giraffe") ; 
       console.log ("The item you are looking for is at index: " ,serch) ; 
       
      // more java script   1
      function sum(par1,par2,par3) {
          return  par1+par2+par3; 

      } 
         let result = sum(4,6,8) ; 
      
          console.log (result ) ; 
      //2

          function colorCar(color) {
              color = prompt("enter the color you ant pint the car " , "") ; 
             let x = color ; 
          }
          let x = color ; 
            
       
          //3 
          let someObject = {
             Age:15,
          Name: "Name"
         }  ;

function printAll(object){ 
    for(let propertyName in object){
        console.log( propertyName + ":" + object[propertyName]);
    }
}


// 4
   function vehicleType(color , car, motorbike ) {
    console.log (color)
}
      
vehicleType("blue",1,2) ; 

// 5 


 console.log (3===3) ; 
// we can use the function to do it like 
function myFung(a,b){
    return a=== b; 
}
 myFung(3,3)
 console.log(myFung()) ; 
// 6 
function vehicle(age , car , motorbike){
    console.log (age)
}
 
vehicle('a blue used car', 1,2) ; 



    // 7   , 8 
    var vehicles= ["motorbike", "caravan", "bike"] ; 
       console.log (vehicles[2])

       
      

    //    9



    // 10



    // 11   




    // 12  , 13 ,14

   var  myObject ={
       tomy : "css/html" ,
       robert :'git and github' , 
       katya : 'java script ' ,

   }

//   15 



// 16 


//  17   