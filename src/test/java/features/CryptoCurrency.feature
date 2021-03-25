Feature: CryptoCurrency Test. This feature includes tests that are applicable to crytpocurrency.

  @Alltests
  Scenario: Validate the technical documentation website
    Given using Currency ID 1027 fetch the technical documentation
    Then verify the logo "logo" "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
    Then verify the technical_doc Url "technical_doc" "[https://github.com/ethereum/wiki/wiki/White-Paper]"
    Then verify the symbol "symbol" of currency "ETH"
    Then verify the date added "date_added" is "2015-08-07T00:00:00.000Z"
    Then verify the tagname "tags" is minable "mineable" in 1027

    #Extra Points
  @Alltests
  Scenario Outline: Validate Mineable tag for Different Crypto IDs
    Given using Currency ID <id> fetch the technical documentation
    Then verify the tagname "tags" is minable "mineable" in <id>
    Examples:
      | id |
      | 1  |
      | 2  |
      | 3  |
      | 4  |
      | 5  |
      | 6  |
      | 7  |
      | 8  |
      | 9  |
      | 10 |


