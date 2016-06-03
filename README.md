# intercom.google.sheets
Google Apps Script that pulls data from Intercom.io via their API to use in a Google sheet

This is a Google Apps Script that dynamically pulls data from Intercom using the Intercom API and populates data into a Google sheet.
For now, it's a simple proof of concept, but if you have any developer experience it should be fairly easy to modify as needed.

This example creates a new custom function in sheets called intercom_last_seen(email) that takes a user's email as input and returns the date the user was last seen.

##How to use this script

1. Copy this public Google Sheet to your own Google account: 
https://docs.google.com/spreadsheets/d/1Rw8sS0jw29LQXypG1_7C2Njv_LW_Wrc3PElxNrlcnjI/edit#gid=0
2. Get your intercom APP ID and API Key: https://developers.intercom.io/reference#authorization
3. Enter your APP ID and API Key into cells B4 and B5
4. Enter the email of an intercom.io user in cell A8

Enjoy
