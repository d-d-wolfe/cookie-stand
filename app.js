'use strict';

//create an object called seattleStore to hold min and max cust per hour
//average cookie sales, and hours open

var seattleStore = {
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  custPerHour : [],
  cookiesPerHour : [],
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//create a function to calculate a random number of customers per hour

seattleStore.calcCustPerHour = function (){
 
  for (var i = 0; i < this.hoursOpen.length; i++) {
   var randomCustomer = Math.round(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   this.custPerHour.push(randomCustomer);
  }
}

//create a function to calculate the cookies needed per hour, based on customers per hour and average cookie sales per customer.

seattleStore.calcCookiesPerHour = function() {

  for (var i = 0; i < this.custPerHour.length; i++) {
    var calcCookiesPerHour = Math.round(this.custPerHour[i] * this.avgCookieSale)
    this.cookiesPerHour.push(calcCookiesPerHour)
    //console.log(calcCookiesPerHour)
  }
}
seattleStore.calcCustPerHour();
seattleStore.calcCookiesPerHour();
console.log(seattleStore.custPerHour);
console.log(seattleStore.cookiesPerHour);

seattleStore.renderToPage = function () {
  var targetUlEl = document.getElementById('seattle');
  var newLiEl = document.createElement('li');
  var custLiEl = document.createElement('li');
  var listText = this.cookiesPerHour;
  var custListText = this.custPerHour;
  
  newLiEl.textContent = 'Cookies Per hour ' + listText;
  custLiEl.textContent = 'Customers per hour ' + custListText;

  targetUlEl.appendChild(custLiEl);
  targetUlEl.appendChild(newLiEl);
 
  //console.log(newLiEl)
}
seattleStore.renderToPage();

// create a table to display the hours open and the random customers per hour, and how many cookies are needed per hour


var tokyoStore = {
  tokMinCust : 3,
  tokMaxCust : 24,
  tokAvgCookieSale : 1.2,
  tokCustPerHour : [],
  tokCookiesPerHour : [],
  tokHoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//tokyoStore.calcTokCustPerHour = function() {
tokyoStore.c = function() {
  for (var i = 0; i < this.tokHoursOpen.length; i++) {
    var tokRandomCust = Math.round(Math.random() * (this.tokMaxCust - this.tokMinCust + 1) + this.tokMinCust);
    this.tokCustPerHour.push(tokRandomCust);
    
    }
}

tokyoStore.tokCalcCookiesPerHour = function() {

  for (var i = 0; i < this.tokCustPerHour.length; i++) {
    var tokCalcCookiesPerHour = Math.round(this.tokCustPerHour[i] * this.tokAvgCookieSale)
    this.tokCookiesPerHour.push(tokCalcCookiesPerHour)
    // console.log(tokCalcCookiesPerHour)
    
  }
  
}
tokyoStore.c();
tokyoStore.tokCalcCookiesPerHour();
console.log(tokyoStore.c);
console.log(tokyoStore.tokCalcCookiesPerHour);

tokyoStore.renderToPage = function () {
  var targetUlEl = document.getElementById('tokyo');
  var newLiEl = document.createElement('li');
  var tokCustLiEl = document.createElement('li');
  var listText = this.tokCookiesPerHour;
  var tokCustListText = this.tokCustPerHour;

  newLiEl.textContent = 'Cookies per hour ' + listText;
  tokCustLiEl.textContent = 'Customers per hour ' + tokCustListText;

  targetUlEl.appendChild(tokCustLiEl);
  targetUlEl.appendChild(newLiEl);
}
tokyoStore.renderToPage();

