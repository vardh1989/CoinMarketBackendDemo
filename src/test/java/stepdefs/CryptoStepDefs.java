package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pageactions.CryptoClass;
import java.util.HashMap;
import java.util.Map;

public class CryptoStepDefs {
    CryptoClass crypto =new CryptoClass();


    @Then("^Using the symbol \"([^\"]*)\" verify the crypto ID \"([^\"]*)\"$")
    public void verify_the_crypto_ID(String symbol, String id ) {
        String receivedID = crypto.getCryptoIdAndSymbol(symbol);
        Assert.assertEquals(id,receivedID);

    }


    @Then("^verify the date added \"([^\"]*)\" is \"([^\"]*)\"$")
    public void verify_the_date_added_is(String tag, String date)  {
        Assert.assertTrue(crypto.verifyTheTag(tag,date));
    }

    @Then("^verify the symbol \"([^\"]*)\" of currency \"([^\"]*)\"$")
    public void verify_the_symbol_of_currency(String tag,String symbol) {
        Assert.assertTrue(crypto.verifyTheTag(tag,symbol));
    }


    @Then("^verify the technical_doc Url \"([^\"]*)\" \"([^\"]*)\"$")
    public void verify_the_technical_docUrl(String tag, String url) {
        Assert.assertTrue(crypto.verifyTheTag(tag,url));
    }

    @Then("^verify the logo \"([^\"]*)\" \"([^\"]*)\"$")
    public void verify_the_logo(String logo,String value){
        Assert.assertTrue(crypto.verifyTheTag(logo,value));

    }


    @Given("^using Currency ID (\\d+) fetch the technical documentation$")
    public void using_Currency_ID_fetch_the_technical_documentation(final int id) {
        Map<String ,Object> params = new HashMap<String , Object>(){{put("id",id);}};
        crypto.fetchTechnicalDocument(params);
    }

    @Then("^verify the tagname \"([^\"]*)\" is minable \"([^\"]*)\" in (\\d+)$")
    public void verify_the_tagname_is_minable(String tag, String minable,int id) {
        Assert.assertTrue(crypto.verifyTheArrayTag(minable,"data."+id+"."+tag));
    }


}
