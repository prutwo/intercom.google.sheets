function intercom_last_seen(email) {

  // Enter your Basic auth string here
  // This script will NOT work without a valid Intercom.io API Basic auth string
  var auth_string = "Your Auth String Goes Here";

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
  // var response = UrlFetchApp.fetch(url);

  var data_set = JSON.parse(response.getContentText());
  
  var temp = new Date((data_set.last_request_at * 1000));
  var formattedDate = Utilities.formatDate(temp, "GMT", "MM-dd-yyyy HH:mm:ss");

  return (formattedDate);
  
}
