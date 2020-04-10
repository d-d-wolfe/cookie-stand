'use strict';

//create an object called seattleStore to hold min and max cust per hour
//average cookie sales, and hours open

//create object constructors

var seattleStore = {
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  custPerHour : [],
  cookiesPerHour : [],
  dailyTotal : 0,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  
}

//create a function to calculate a random number of customers per hour

seattleStore.calcCustPerHour = function (){
 
  for (var i = 0; i < this.hoursOpen.length; i++) {
   var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   this.custPerHour.push(randomCustomer);
  }
}

//create a function to calculate the cookies needed per hour, based on customers per hour and average cookie sales per customer.

seattleStore.calcCookiesPerHour = function() {

  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
    this.cookiesPerHour.push(cookiesPH)
    //console.log(calcCookiesPerHour)
  }
}
// this function returns the total number of cookies sold for the day
seattleStore.totalSalesPerHour = function() {
  this.calcCookiesPerHour();
  var tot = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
  tot = tot + this.cookiesPerHour[i];
  //console.log(tot);
  
  //this.dailyTotal += totalSales;
  //console.log(totalSales);
  }
  this.dailyTotal = tot;
 }

//console.log(seattleStore.cookiesPerHour)
seattleStore.calcCustPerHour();
seattleStore.totalSalesPerHour();
//console.log('this is the seattle store object', seattleStore)
// console.log(seattleStore.custPerHour);
// console.log(seattleStore.cookiesPerHour);
//console.log()(seattleStore.totalSalesPerHour);

seattleStore.renderToPage = function () {
  var div = document.getElementById('seattle')
  var newUlEl = document.createElement('ul');
  var storeEl = document.createElement('h1')
  
  storeEl.textContent = 'Seattle';
  div.appendChild(storeEl);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var newLiEl = document.createElement('li');
    
 
  newLiEl.textContent = this.hoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies.';
  newUlEl.appendChild(newLiEl);
    }
  var newTotLi = document.createElement('li');
  newTotLi.textContent = 'Total: ' + this.dailyTotal;
  newUlEl.appendChild(newTotLi)  
  div.appendChild(newUlEl);

  // var listText = this.cookiesPerHour[0];
  // var hoursList = this.hoursOpen[0];
  
  //newLiEl.textContent = hoursList + ' ' + listText;
 
  //targetUlEl.appendChild(newLiEl);
 
  //console.log(newLiEl)
}
seattleStore.renderToPage();

// need a total - add up the total from each hour (math)
// create a table to display the hours open and the random customers per hour, and how many cookies are needed per hour - find the target - create content for the target (labels, numbers [in rows], text in cells[th and td]) - append the info


var tokyoStore = {
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
  custPerHour : [],
  cookiesPerHour : [],
  dailyTotal: 0,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//tokyoStore.calcTokCustPerHour = function() {
  tokyoStore.calcCookiesPerHour = function() {

    for (var i = 0; i < this.custPerHour.length; i++) {
      var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
      this.cookiesPerHour.push(cookiesPH)
      //console.log(calcCookiesPerHour)
    }
  }

  tokyoStore.calcCustPerHour = function (){
 
    for (var i = 0; i < this.hoursOpen.length; i++) {
     var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
     this.custPerHour.push(randomCustomer);
    }
  }
  // this function returns the total number of cookies sold for the day
  tokyoStore.totalSalesPerHour = function() {
    this.calcCookiesPerHour();
    var tot = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tot = tot + this.cookiesPerHour[i];
    //console.log(tot);
    
    //this.dailyTotal += totalSales;
    //console.log(totalSales);
    }
    this.dailyTotal = tot;
   }
   tokyoStore.calcCustPerHour();
   tokyoStore.totalSalesPerHour();
 console.log('Tokyo store object ', tokyoStore);
// console.log(tokyoStore.tokCalcCookiesPerHour);

tokyoStore.renderToPage = function () {
  var div = document.getElementById('tokyo');

   var newUlEl = document.createElement('ul');
  var storeEl = document.createElement('h1')
  
  storeEl.textContent = 'Tokyo';
  div.appendChild(storeEl);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var newLiEl = document.createElement('li');
    
 
  newLiEl.textContent = this.hoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies.';
  newUlEl.appendChild(newLiEl);
    }
  var newTotLi = document.createElement('li');
  newTotLi.textContent = 'Total: ' + this.dailyTotal;
  newUlEl.appendChild(newTotLi)  
  div.appendChild(newUlEl);
  //targetUlEl.appendChild(tokCustLiEl);
  //targetUlEl.appendChild(newLiEl);
}
tokyoStore.renderToPage();

var dubaiStore = {
  minCust : 11,
  maxCust : 38,
  avgCookieSale : 3.7,
  custPerHour : [],
  cookiesPerHour : [],
  dailyTotal: 0,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//tokyoStore.calcTokCustPerHour = function() {
  dubaiStore.calcCookiesPerHour = function() {

    for (var i = 0; i < this.custPerHour.length; i++) {
      var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
      this.cookiesPerHour.push(cookiesPH)
      //console.log(calcCookiesPerHour)
    }
  }

  dubaiStore.calcCustPerHour = function (){
 
    for (var i = 0; i < this.hoursOpen.length; i++) {
     var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
     this.custPerHour.push(randomCustomer);
    }
  }
  // this function returns the total number of cookies sold for the day
  dubaiStore.totalSalesPerHour = function() {
    this.calcCookiesPerHour();
    var tot = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tot = tot + this.cookiesPerHour[i];
    //console.log(tot);
    
    //this.dailyTotal += totalSales;
    //console.log(totalSales);
    }
    this.dailyTotal = tot;
   }
   dubaiStore.calcCustPerHour();
   dubaiStore.totalSalesPerHour();
 console.log('Dubai store object ', dubaiStore);
// console.log(tokyoStore.tokCalcCookiesPerHour);

dubaiStore.renderToPage = function () {
  var div = document.getElementById('dubai');

   var newUlEl = document.createElement('ul');
  var storeEl = document.createElement('h1')
  
  storeEl.textContent = 'Dubai';
  div.appendChild(storeEl);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var newLiEl = document.createElement('li');
    
 
  newLiEl.textContent = this.hoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies.';
  newUlEl.appendChild(newLiEl);
    }
  var newTotLi = document.createElement('li');
  newTotLi.textContent = 'Total: ' + this.dailyTotal;
  newUlEl.appendChild(newTotLi)  
  div.appendChild(newUlEl);
  //targetUlEl.appendChild(tokCustLiEl);
  //targetUlEl.appendChild(newLiEl);
}
dubaiStore.renderToPage();

var parisStore = {
  minCust : 20,
  maxCust : 38,
  avgCookieSale : 2.3,
  custPerHour : [],
  cookiesPerHour : [],
  dailyTotal: 0,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//tokyoStore.calcTokCustPerHour = function() {
  parisStore.calcCookiesPerHour = function() {

    for (var i = 0; i < this.custPerHour.length; i++) {
      var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
      this.cookiesPerHour.push(cookiesPH)
      //console.log(calcCookiesPerHour)
    }
  }

  parisStore.calcCustPerHour = function (){
 
    for (var i = 0; i < this.hoursOpen.length; i++) {
     var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
     this.custPerHour.push(randomCustomer);
    }
  }
  // this function returns the total number of cookies sold for the day
  parisStore.totalSalesPerHour = function() {
    this.calcCookiesPerHour();
    var tot = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tot = tot + this.cookiesPerHour[i];
    //console.log(tot);
    
    //this.dailyTotal += totalSales;
    //console.log(totalSales);
    }
    this.dailyTotal = tot;
   }
   parisStore.calcCustPerHour();
   parisStore.totalSalesPerHour();
 console.log('Paris store object ', parisStore);
// console.log(tokyoStore.tokCalcCookiesPerHour);

parisStore.renderToPage = function () {
  var div = document.getElementById('paris');

   var newUlEl = document.createElement('ul');
  var storeEl = document.createElement('h1')
  
  storeEl.textContent = 'Paris';
  div.appendChild(storeEl);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var newLiEl = document.createElement('li');
    
 
  newLiEl.textContent = this.hoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies.';
  newUlEl.appendChild(newLiEl);
    }
  var newTotLi = document.createElement('li');
  newTotLi.textContent = 'Total: ' + this.dailyTotal;
  newUlEl.appendChild(newTotLi)  
  div.appendChild(newUlEl);
  //targetUlEl.appendChild(tokCustLiEl);
  //targetUlEl.appendChild(newLiEl);
}
parisStore.renderToPage();

var limaStore = {
  minCust : 2,
  maxCust : 16,
  avgCookieSale : 4.6,
  custPerHour : [],
  cookiesPerHour : [],
  dailyTotal: 0,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
}

//tokyoStore.calcTokCustPerHour = function() {
  limaStore.calcCookiesPerHour = function() {

    for (var i = 0; i < this.custPerHour.length; i++) {
      var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
      this.cookiesPerHour.push(cookiesPH)
      //console.log(calcCookiesPerHour)
    }
  }

  limaStore.calcCustPerHour = function (){
 
    for (var i = 0; i < this.hoursOpen.length; i++) {
     var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
     this.custPerHour.push(randomCustomer);
    }
  }
  // this function returns the total number of cookies sold for the day
  limaStore.totalSalesPerHour = function() {
    this.calcCookiesPerHour();
    var tot = 0;
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
    tot = tot + this.cookiesPerHour[i];
    //console.log(tot);
    
    //this.dailyTotal += totalSales;
    //console.log(totalSales);
    }
    this.dailyTotal = tot;
   }
   limaStore.calcCustPerHour();
   limaStore.totalSalesPerHour();
 console.log('Lima store object ', limaStore);
// console.log(tokyoStore.tokCalcCookiesPerHour);

limaStore.renderToPage = function () {
  var div = document.getElementById('lima');

   var newUlEl = document.createElement('ul');
  var storeEl = document.createElement('h1')
  
  storeEl.textContent = 'Lima';
  div.appendChild(storeEl);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var newLiEl = document.createElement('li');
    
 
  newLiEl.textContent = this.hoursOpen[i] + ': ' + this.cookiesPerHour[i] + ' cookies.';
  newUlEl.appendChild(newLiEl);
    }
  var newTotLi = document.createElement('li');
  newTotLi.textContent = 'Total: ' + this.dailyTotal;
  newUlEl.appendChild(newTotLi)  
  div.appendChild(newUlEl);
  //targetUlEl.appendChild(tokCustLiEl);
  //targetUlEl.appendChild(newLiEl);
}
limaStore.renderToPage();

