package runner;

import org.junit.runner.RunWith;
import cucumber.api.*;
import cucumber.api.junit.Cucumber;
import com.cucumber.listener.ExtentCucumberFormatter;
import cucumber.api.testng.AbstractTestNGCucumberTests;

import org.testng.annotations.BeforeClass;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/toptest/cucumber.json", "pretty", "html:target/Alltests/cucumber.html","com.cucumber.listener.ExtentCucumberFormatter"},
        features = {"src/test/java/features"},
        glue = {"stepdefs"},
        tags= "@Alltests"
)

public class TestRunner  extends AbstractTestNGCucumberTests{

    @BeforeClass
    public static void setup() {
        // Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
        SimpleDateFormat sdf = new SimpleDateFormat("ddMMyyyy_hhmmss");
        Date curDate = new Date();
        String strDate = sdf.format(curDate);
        String fileName = System.getProperty("user.dir")+"/RestAssuredReports/target/Extent_Reports" + strDate+".html";
        File newFile = new File(fileName);
        ExtentCucumberFormatter.initiateExtentCucumberFormatter(newFile,false);
        //static report name
        // Loads the extent config xml to customize on the report.
        ExtentCucumberFormatter.loadConfig(new File("src/test/resources/extent-config.xml"));

        // User can add the system information as follows
        ExtentCucumberFormatter.addSystemInfo("RestAssured Version", "4.3.0");

        // Also add system information using a hash map
        Map systemInfo = new HashMap();
        systemInfo.put("Cucumber version", "v1.2.5");
        systemInfo.put("Extent Cucumber Reporter version", "v1.1.0");
        ExtentCucumberFormatter.addSystemInfo(systemInfo);
    }

}
