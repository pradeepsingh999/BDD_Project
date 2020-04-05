$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Basic_Search.feature");
formatter.feature({
  "line": 1,
  "name": "Check basic search functionality in iPulse",
  "description": "",
  "id": "check-basic-search-functionality-in-ipulse",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10710249900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verifying basic search functionality",
  "description": "",
  "id": "check-basic-search-functionality-in-ipulse;verifying-basic-search-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open the iPulse application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "insert testscriptuser into the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "insert welcome123123 into the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be login and logout button should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on search work order top menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "pick first work order no.",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "insert into the work order field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "first work order should be same as picked one",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.open_the_iPulse_application()"
});
formatter.result({
  "duration": 8060817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testscriptuser",
      "offset": 7
    },
    {
      "val": "username",
      "offset": 31
    }
  ],
  "location": "stepDefinitions.insert_value_into_the_field(String,String)"
});
