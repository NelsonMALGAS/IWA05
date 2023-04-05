const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';
const customers = '1';
const custlocation = 'RSA';
let locationA='NAM'
let currency = '$';
let shipping ;  //declare shipping without assigning a value yet

// Use triple equals(===) instead of = for strict string camparison 
if (custlocation == 'RSA') {
     shipping = 400; 
     currency === 'R'; // Update currency for RSA custlocation
 }else if (locationA == 'NAM'){
    shipping = 600 ;
    currency ='$';
 } else{
    shipping=800;
 }
    console.log(FREE_WARNING);// handle free warning locations
 
 
// Use correct variable name( toys = instead of toys-)
const shoes = 300 * 1;
const toys = 100 * 5;
let shirts = 150 * NONE_SELECTED ;// Use let instead of const to allow re-assignment
const batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;// Use let instead of const to allow re-assignment 


if (shoes + batteries + pens + shirts + toys > 1000 && currency ==='$' ) {
	if (locationA ==' NAM' && customers < 2) {
        shipping=600; //update shipping for NAM location and less than 2 customres
			if (custlocation == 'RSA'){
		    shipping = 0  || calcShipping();//use of correct function name
		}
	}
}


if (shipping === 400 && customers !==1) {
    (currency ==='R') 
    console.log('shipping = 400') ;
}

if (custlocation === 'NK') {
    console.log(BANNED_WARNING);// Handle invalid location 
   
}else{
    (currency ='R')
    console.log('price','R', shoes + batteries + pens + shirts + toys + shipping);
    
}
function calcShipping(){
    return 0; //Impliment logic to calculate shipping
}



