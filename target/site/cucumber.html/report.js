$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Basic_Search.feature");
formatter.feature({
  "name": "Check basic search functionality in iPulse",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying basic search functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open the iPulse application",
  "keyword": "Given "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.open_the_iPulse_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "insert testscriptuser into the username field",
  "keyword": "When "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.insert_value_into_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.iPulse.general.stepDefinitions.insert_value_into_the_field(stepDefinitions.java:36)\r\n\tat ✽.insert testscriptuser into the username field(file:///D:/Git_Projects/BDD_Project/src/test/resources/features/Basic_Search.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "insert welcome123123 into the password field",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.insert_value_into_the_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be login and logout button should be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.user_should_be_login_and_logout_button_should_be_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search work order top menu",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.click_on_search_work_order_top_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pick first work order no.",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.pick_first_work_order_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "insert into the work order field",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.insert_into_the_work_order_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "first work order should be same as picked one",
  "keyword": "Then "
});
formatter.match({
  "location": "org.iPulse.general.stepDefinitions.first_work_order_should_be_same_as_picked_one()"
});
formatter.result({
  "status": "skipped"
});
});