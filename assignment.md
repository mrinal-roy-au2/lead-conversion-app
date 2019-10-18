We have to create an app for AttainU where new leads ("potential students") for enrollment in a batch are managed.
The app will receive these leads through an API.
Each lead will be given a status -> converted: true/false based on whether the lead was successfully enrolled after being called.
The app will show a live counter of 'converted leads' v 'total leads'.
These are the list of UI elements for this app:
1) Show the counter on the top e.g. 5/24
2) Show a list of all the leads with their - picture, name, gender, email, phone (All of these are present in the API response with the same keys)
3) Show a button below the above - Get New Lead which will fetch a new lead from https://randomuser.me/api/
4) This new lead should automatically be reflected in the list shown in step 2
5) Each lead in the list should additionally have a checkbox, which when clicked will mean that this lead has been converted
6) The live counter should reflect these changes
7) At the end show 3 filter links: Show All, Show Males, Show Females
8) Clicking on these should update the list of leads and the counter accordingly
