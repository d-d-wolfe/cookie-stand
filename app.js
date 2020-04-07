'use strict';

var seattleStore = {
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  custPerHour : [],
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

seattleStore.calcCustPerHour = function (){
 
  for (var i = 0; i < this.hoursOpen.length; i++) {
   var randomCustomer = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  this.custPerHour.push(randomCustomer);
  }
}
seattleStore.calcCustPerHour()
console.log(seattleStore.custPerHour);
