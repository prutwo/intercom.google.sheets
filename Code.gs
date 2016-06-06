// This script will NOT work without a valid Intercom.io API Key and App ID in the sheet

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B4:B5");
var app_id = range.getCell(1, 1); 
var api_key = range.getCell(2, 1);
var temp_key = app_id.getValue() + ":" + api_key.getValue();
var auth_string = Utilities.base64Encode(temp_key);

function intercom_last_seen(email,timestamp) {
  
  // the timestamp parameter is used purely as a cache buster and is not used in the script.
  // if you want to reload (update) the data, just send in a new value.

  var url = "https://api.intercom.io/users?email=" + email;
  
  var headers = { 
    "Authorization" : "Basic " + auth_string,
    "Accept" : "application/json"
  };

  var options =
   {     
     "method" : "get",
     "headers" : headers
   };

  var response = UrlFetchApp.fetch(url, options);  
  var data_set = JSON.parse(response.getContentText());
  
  var temp = new Date((data_set.last_request_at * 1000));
  var formattedDate = Utilities.formatDate(temp, "GMT", "MM-dd-yyyy HH:mm:ss");

  return (formattedDate);  
}
