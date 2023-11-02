Feature: Login Manager Psw

@manager_id1
Scenario: Manager id1
Given user goes page
And login with use data
|username|password|
|Manager|Manager1!|
And user clicks loginButton
And verify login

@manager_id2 @smoke
Scenario: Manager id2
Given user goes page
And login with use data
|username|password|
|Manager2|Manager2!|
And user clicks loginButton
And verify login
