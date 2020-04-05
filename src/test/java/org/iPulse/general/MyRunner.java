package org.iPulse.general;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
				strict=true,
				dryRun=false,
				monochrome=true,
				
				features={"src/test/resources/"},
				glue={"org.iPulse.general"},
				
				plugin={
						"pretty",
						"html:target/site/cucumber-html",
						"json:target/cucumber.json"
						
				}
		
		
		
		
		
		
		)






public class MyRunner {

}
