# intercom.google.sheets
Google Apps Script that pulls data from Intercom.io via their API to use in a Google sheet

This Google Apps Script allows you to dynamically pull data from Intercom using the Intercom API and populate data into a Google sheet.
For now, this is more of a proof of concept, but if you have any developer experience it should be fairly easy to modify as needed.

This example creates a new custom function in sheets called intercom_last_seen that wants an email as input and returns the date the user was last seen.

In order to get this example to work on your own Google sheet you'll need to first create your own authentication token (Basic Auth).

1. Get your intercom APP ID and API Key: https://developers.intercom.io/reference#authorization
2. Go to: http://decodebase64.com/ and enter where it says ASCII Plain Text <APP ID>:<API KEY> - for example, if your API ID is a1b2c3 and your API KEY is x4y5z6 then enter a1b2c3:x4y5z6
3. The string in Base64 is your authentication token
