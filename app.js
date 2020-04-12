'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var locationObject = [];
var tableStoreRow = document.getElementById('content');
var tableFootRow = document.getElementById('footrow');
var newStoreForm = document.getElementById('form');

//create object constructor
function Store(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
}

//method to calculate customers per hour

Store.prototype.calcCustPerHour = function (){
  this.custPerHour = [];
  for (var i = 0; i < hoursOpen.length; i++) {
   var randomCustomer = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   this.custPerHour.push(randomCustomer);
  }
}

//method to calculate cookies per hour

Store.prototype.calcCookiesPerHour = function() {
  this.cookiesPerHour = [];
  for (var i = 0; i < this.custPerHour.length; i++) {
    var cookiesPH = Math.floor(this.custPerHour[i] * this.avgCookieSale)
    this.cookiesPerHour.push(cookiesPH)
    //console.log(calcCookiesPerHour)
  }
}
// this method returns the total number of cookies sold for the day
Store.prototype.totalSalesPerHour = function() {
    var tot = 0;
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
  tot = tot + this.cookiesPerHour[i];
  //console.log(tot);
  //console.log(totalSales);
  }
  this.dailyTotal = tot;
 }

//this function calculates the hourly total

var createHourlyTotal = function(stores) {
  var totalHourlySalesArr = [];
  for (var i = 0; i < hoursOpen.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < stores.length; j++) {
      hourlyTotal = hourlyTotal + stores[j].cookiesPerHour[i];
    }
    totalHourlySalesArr.push(hourlyTotal);
  }
  return totalHourlySalesArr;
}

var createHeader = function () {
  var headRow = '<td>' + 'Location' + '</td>';
  for (var i = 0; i < hoursOpen.length; i++) {
    headRow = headRow + '<td>' + hoursOpen[i] + '</td>';

  }
  headRow = headRow + '<td>' + 'Total ' + '</td>';
  var tableHeadRow = document.getElementById('headrow');
  //console.log('Teble head row in createHeader ',tableHeadRow);
  tableHeadRow.innerHTML = headRow;

}

// function to create each of the stor rows in the table

var createStoreRow = function (storeObject) {
  
  //console.log(storeObject)
  var storeRow = '<td>' + storeObject.location + '</td>';
  //console.log(storeObject.cookiesPerHour);
  for (var i = 0; i < storeObject.cookiesPerHour.length; i++) {
    storeRow = storeRow + '<td>' + storeObject.cookiesPerHour[i] + '</td>';
  }
  storeRow = storeRow + '<td>' + storeObject.dailyTotal + '</td>';
  //console.log('Store row ' , storeRow)
  var newRow = document.createElement('tr');
  newRow.innerHTML = storeRow;
  tableStoreRow.appendChild(newRow);

}

//function to create the totals row of the table

var createFooter = function (hourlySales) {
  var footRow = '<td>' + 'Totals' + '</td>';
  var grandTotal = 0;
  for (var i = 0; i < hourlySales.length; i++) {
    footRow = footRow + '<td>' + hourlySales[i] + '</td>';
    grandTotal = grandTotal + hourlySales[i];
  }
  footRow = footRow + '<td>' + grandTotal + '</td>';
  //console.log('Teble head row in createHeader ',tableFootRow);
  tableFootRow.innerHTML = footRow;

}

function createTable() {
  createHeader();

  for (var i = 0; i < locationObject.length; i++) {
    createStoreRow(locationObject[i]);
  }
  var x = createHourlyTotal(locationObject);
  createFooter(x);
}

//console.log('i\'m in form details ', locationObject)
function formDetails(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var minCust = event.target.mincust.value;
  var maxCust = event.target.maxcust.value;
  var avgCookieSale = event.target.avg.value;
  var newStore = new Store(location, minCust, maxCust, avgCookieSale);
  newStore.calcCustPerHour();
  newStore.calcCookiesPerHour();
  newStore.totalSalesPerHour();
  locationObject.push(newStore);
  newStoreForm.reset();
  tableStoreRow.innerHTML = '';
  tableStoreRow.innerHTML = '';
  createTable();
  
}

function initializeStores() {
  var seattle = new Store('Seattle', 23,65,6.3);
  seattle.calcCustPerHour();
  seattle.calcCookiesPerHour();
  seattle.totalSalesPerHour();
  locationObject.push(seattle);
  //console.log('Seattle constructor ', seattle)
  var tokyo = new Store('Tokyo',3, 24, 1.2);
  tokyo.calcCustPerHour();
  tokyo.calcCookiesPerHour();
  tokyo.totalSalesPerHour();
  locationObject.push(tokyo)
  var paris = new Store('Paris', 20, 38, 2.3);
  paris.calcCustPerHour();
  paris.calcCookiesPerHour();
  paris.totalSalesPerHour();
  locationObject.push(paris);
  var dubai = new Store('Dubai', 11, 38, 3.7);
  dubai.calcCustPerHour();
  dubai.calcCookiesPerHour();
  dubai.totalSalesPerHour();
  locationObject.push(dubai);
  var lima = new Store('Lima', 2, 16, 4.6);
  lima.calcCustPerHour();
  lima.calcCookiesPerHour();
  lima.totalSalesPerHour();
  locationObject.push(lima);
  
  createTable();
  
}


newStoreForm.addEventListener('submit', formDetails);
initializeStores();