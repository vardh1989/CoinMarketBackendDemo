package pageactions;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;

import org.junit.Assert;
import java.util.HashMap;
import java.util.Map;

public class BaseClass {
    private static final String API_Key ="74f2794d-cc0e-474a-8ab6-ef30f6032bca";
    private static final String base_url = "https://pro-api.coinmarketcap.com";
    Response response;
    public static final int SUCCESS_STATUS_CODE = 200;
    Map<String, Object> header = new HashMap<String ,Object>();



    public BaseClass(){
    }

    /**
     *
     * @param endpoint endpoint
     * @param obj query params
     * @return Restassured Response
     */
    protected Response sendRequest(String endpoint,Map<String ,Object> obj){
        header.put("X-CMC_PRO_API_KEY", API_Key);
        header.put("accept","application/json, text/plain, */*");
        String url = base_url + endpoint;
        if(obj!=null){
            response = RestAssured.given().headers(header).queryParams(obj).when().get(url);
            Assert.assertTrue(response.getStatusCode()==SUCCESS_STATUS_CODE);
            return response;
        }
        else {
            response = RestAssured.given().headers(header).when().get(url);
            Assert.assertTrue(response.getStatusCode()==SUCCESS_STATUS_CODE);
            return response;
        }


    }

    /**
     *
     * @param res response
     * @return size of response in int
     */
    public static int getResponseSize(Response res){
        if(res!=null){
            int size = res.body().jsonPath().getInt("data.size()");
            return size;
        }
        return 0;
    }

    /**
     *
     * @param res response
     * @return jsonpath of response
     */
    public static JsonPath getJsonPath(Response res){
        if (res != null) {
            return res.jsonPath() ;
        }
        return null;
    }


}
