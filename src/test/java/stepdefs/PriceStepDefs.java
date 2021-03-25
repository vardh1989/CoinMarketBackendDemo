package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageactions.PriceConverterClass;

import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.Map;

public class PriceStepDefs {
    String fiat_convertID;
    PriceConverterClass pcc =new PriceConverterClass();

    @Given("^User gets the \"([^\"]*)\" fiat's convertID$")
    public void user_gets_the_fiats_ConvertID(String fiatName) {

        this.fiat_convertID = pcc.getFiatsConvertID(fiatName);


    }

    @Then("^verify the price conversion of (\\d+) for cryptocurrency \"([^\"]*)\"$")
    public void verify_the_price_conversion_for_cryptocurrency(int amount , String symbol) {
        Map<String , Object> params =new HashMap<String, Object>();
        params.put("amount",amount);
        params.put("convert_id",fiat_convertID);
        params.put("symbol",symbol);
        pcc.verifyPriceConversion(params);

    }


}
