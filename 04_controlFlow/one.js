
/*  strict equal === , !==
 2=="2" is true
 2==="2" is false
 */

 if (2!=="2"){ // <  2 is not equal to '2', correct hence true  >
    console.log("executed")
 } 
 
 if (2!==2){ // <  2 is not equal to 2, incorrect hence false --because 2 is equal to 2 >
    console.log("executed2")
 }

// x && y < left and right sides are checked >
//   and


let userLoggedIn = true;
let paymentCardAdded = true;
let itemsToPurchase=0;



if (userLoggedIn && paymentCardAdded){
    console.log("User is eligible to make a payment")
}

if (userLoggedIn && paymentCardAdded && itemsToPurchase>0){
    console.log("User is eligible to make a purchase")
} else {
    console.log("User needs to select items to buy")
}

// x || y <left or right sides are checked>
//   or

itemsToPurchase=1;
if (userLoggedIn || itemsToPurchase>=1){
    console.log("User is eligible to proceed to checkout section")
}