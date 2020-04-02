package org.iPulse.general;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

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
