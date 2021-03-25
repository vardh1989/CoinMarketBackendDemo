package pageactions;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import java.util.Map;


public class CryptoClass extends BaseClass {
    private final String CRYPTO_MAP_ENDPOINT = "/v1/cryptocurrency/map";
    private final String CRYPTO_INFO_ENDPOINT = "/v2/cryptocurrency/info";
    Response response;

    public CryptoClass() {
        super();
    }

    /**
     *
     * @param symbol crypto Symbol
     * @return id of crypto
     */
    public String getCryptoIdAndSymbol(String symbol) {

        String id=null;
        int i=0;
        response =this.sendRequest(CRYPTO_MAP_ENDPOINT,null);
        int size = getResponseSize(response);
        JsonPath path = getJsonPath(response);
        while(i< size){
                if (path.get("data["+i+"].symbol").equals(symbol)) {
                    id = path.get("data["+i+"].id").toString();
                    break;
                }
                i++;
            }
        return id;
    }

    /**
     *
     * @param params : query parameters for request
     */
    public void fetchTechnicalDocument(Map<String ,Object> params){

        response =this.sendRequest(CRYPTO_INFO_ENDPOINT,params);

    }

    /**
     *
     * @param tagname tag in json
     * @param value : value of tag
     * @return success or fail
     */

    public boolean verifyTheTag(String tagname,String value){
        int size = getResponseSize(response);
        if(size!=0){
            JsonPath path = getJsonPath(response);
            if(path.get().toString().contains(tagname+"="+value)){
                return true;
            }


            else return false;
        }
        return false;

    }

    /**
     *
     * @param value tags' value
     * @param node: path of tag in json
     * @return success or fail
     */
    public boolean verifyTheArrayTag( String value, String node){

        int size = getResponseSize(response);
        if(size!=0){
            JsonPath path = getJsonPath(response);
            if(path.get(node).toString().contains(value)){
                return true;
            }
            else return false;
        }
        return false;

    }

}
