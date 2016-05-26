# intercom.google.sheets
Google Apps Script that pulls data from Intercom.io via their API to use in a Google sheet

This is a Google Apps Script that dynamically pulls data from Intercom using the Intercom API and populates data into a Google sheet.
For now, it's a simple proof of concept, but if you have any developer experience it should be fairly easy to modify as needed.

##How to use this script

This example creates a new custom function in sheets called intercom_last_seen that wants the user's email as input and returns the date the user was last seen.

In order to get this example to work on your own Google sheet you'll need to first create your own authentication token (Basic Auth).

1. Get your intercom APP ID and API Key: https://developers.intercom.io/reference#authorization
2. Go to: http://decodebase64.com/ and enter where it says ASCII Plain Text `APP ID:API KEY`  - for example, if your API ID is `a1b2c3` and your API KEY is `x4y5z6` then enter `a1b2c3:x4y5z6`
3. The string in Base64 is your authentication token.

Now, in your Google sheet, go to Tools -> Script Editor and copy the contents of this to the editor window:
https://raw.githubusercontent.com/prutwo/intercom.google.sheets/master/Code.gs

Now update the auth string in this line `var auth_string = "Your Auth String Goes Here";`

Now save it, and you have a new function called intercom_last_seen(email).
Here is an example spreadsheet to show you how it should work:
https://docs.google.com/spreadsheets/d/1vEYRDnbZ7_Fep5k1QKjVWOZkGWU-D4uZ71kSHRKS_rA/edit?usp=sharing


