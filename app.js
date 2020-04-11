'use strict';

 var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//create object constructor

function Store(minCust, maxCust, avgCookieSale) {
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

//this method calculates the hourly total

var createHourlyTotal = function(stores) {
  var totalHourlySalesArr = [];
  for (var i = 0; i < hoursOpen.length; i++) {
    var hourlyTotal = 0;
    hourlyTotal = stores[0].cookiesPerHour[i] + stores[1].cookiesPerHour[i] + stores[2].cookiesPerHour[i] + stores[3].cookiesPerHour[i] + stores[4].cookiesPerHour[i];
    totalHourlySalesArr.push(hourlyTotal);
  }
  return totalHourlySalesArr;
}

// calling each of the stores and methods
var seattle = new Store(23,65,6.3);
seattle.calcCustPerHour();
seattle.calcCookiesPerHour();
seattle.totalSalesPerHour();
//console.log('Seattle constructor ', seattle)
var tokyo = new Store(3, 24, 1.2);
tokyo.calcCustPerHour();
tokyo.calcCookiesPerHour();
tokyo.totalSalesPerHour();
var paris = new Store(20, 38, 2.3);
paris.calcCustPerHour();
paris.calcCookiesPerHour();
paris.totalSalesPerHour();
var dubai = new Store(11, 38, 3.7);
dubai.calcCustPerHour();
dubai.calcCookiesPerHour();
dubai.totalSalesPerHour();
var lima = new Store(2, 16, 4.6);
lima.calcCustPerHour();
lima.calcCookiesPerHour();
lima.totalSalesPerHour();
var stores = [seattle, tokyo, paris, dubai, lima];
var hourlySalesArr = createHourlyTotal(stores);
//console.log('Hourly sales Total ', hourlySalesArr);

// method to create the header row of the table

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
createHeader();

// method to create each of the stor rows in the table

var createStoreRow = function (storeName, storeObject) {
  //console.log(storeObject)
  var storeRow = '<td>' + storeName + '</td>';
  //console.log(storeObject.cookiesPerHour);
  for (var i = 0; i < storeObject.cookiesPerHour.length; i++) {
    storeRow = storeRow + '<td>' + storeObject.cookiesPerHour[i] + '</td>';
  }
  storeRow = storeRow + '<td>' + storeObject.dailyTotal + '</td>';
  //console.log('Store row ' , storeRow)
  var tableStoreRow = document.getElementById('content');
  var newRow = document.createElement('tr');
  newRow.innerHTML = storeRow;
  tableStoreRow.appendChild(newRow);

}

//method to create the totals row of the table

var createFooter = function (hourlySales) {
  var footRow = '<td>' + 'Totals' + '</td>';
  var grandTotal = 0;
  for (var i = 0; i < hourlySales.length; i++) {
    footRow = footRow + '<td>' + hourlySales[i] + '</td>';
    grandTotal = grandTotal + hourlySales[i];
  }
  footRow = footRow + '<td>' + grandTotal + '</td>';
  var tableFootRow = document.getElementById('footrow');
  //console.log('Teble head row in createHeader ',tableFootRow);
  tableFootRow.innerHTML = footRow;

}

createStoreRow('Seattle', seattle);
createStoreRow('Tokyo', tokyo);
createStoreRow('Dubai', dubai);
createStoreRow('Paris', paris);
createStoreRow('Lima', lima);
createFooter(hourlySalesArr);



