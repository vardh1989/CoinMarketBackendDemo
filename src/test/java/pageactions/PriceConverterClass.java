package pageactions;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.Map;

public class PriceConverterClass extends BaseClass {
    private final String PRICE_CONVERTER_ENDPOINT ="/v2/tools/price-conversion";
    private final String FIAT_MAP_ENDPOINT ="/v1/fiat/map";
    public PriceConverterClass(){
        super();
    }

    /**
     *
     * @param fiatName name of fiat currency
     * @return  Fiat Currency ID
     */
    public String getFiatsConvertID(String fiatName){
        String id=null;
        int i=0;
        Response response =this.sendRequest(FIAT_MAP_ENDPOINT,null);
        int size = getResponseSize(response);
        JsonPath path = getJsonPath(response);
        while(i< size){
            if (path.get("data["+i+"].name").equals(fiatName)) {
                id = path.get("data["+i+"].id").toString();
                break;
            }
            i++;
        }
        return id;

    }

    /**
     *
     * @param params query params
     */
    public void verifyPriceConversion(Map<String,Object>params){

        Response response =this.sendRequest(PRICE_CONVERTER_ENDPOINT,params);
        int size = getResponseSize(response);
        JsonPath path = getJsonPath(response);
        Assert.assertTrue(size==1);
        Assert.assertTrue(path.get("data.symbol").toString().contains(params.get("symbol").toString()));
        Assert.assertNotNull(path.getJsonObject("data.quote."+params.get("convert_id")+".price"));

    }


}
