# intercom.google.sheets
Google Apps Script that pulls data from Intercom.io via their API to use in a Google sheet

This is a Google Apps Script that dynamically pulls data from Intercom using the Intercom API and populates data into a Google sheet.
For now, it's a simple proof of concept, but if you have any developer experience it should be fairly easy to modify as needed.

This example creates a new custom function in sheets called `intercom_last_seen(email,timestamp)` that takes a user's `email` as input and returns the `date` the user was last seen. The second parameter is used purely as a cache buster. If you want to reload data from intercom, just change the timestamp value. The example sheet below shows a simple way to do this.

##How to use this script

1. Copy this public Google Sheet to your own Google account: 
https://docs.google.com/spreadsheets/d/1Rw8sS0jw29LQXypG1_7C2Njv_LW_Wrc3PElxNrlcnjI/edit#gid=0
2. Get your intercom `APP ID` and `API Key`: https://developers.intercom.io/reference#authorization
3. Enter your `APP ID` and `API Key` into cells B4 and B5
4. Enter today's date and time in cell B6. The format does not matter. This cell is used to update the data when needed.
5. Enter the email of an intercom.io user in cell A8
6. If you want to re-load (update) the data from Intercom.io, just update the timestamp in B6.

Enjoy
