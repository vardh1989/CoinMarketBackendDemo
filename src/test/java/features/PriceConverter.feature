Feature: Price Converter Test. This feature includes tests that are applicable to Price Converter .

  @Alltests
  Scenario Outline: validate cryptocurrency's ID from its Symbol
    Given Using the symbol "<symbol>" verify the crypto ID "<ID>"
    Examples:
      | symbol |ID|
      | BTC | 1   |
      | ETH |1027 |
      | USDT |825 |

    @Alltests
    Scenario Outline: Validate price converter between Fiat and crypto currency
      When User gets the "Bolivian Boliviano" fiat's convertID
      Then verify the price conversion of 1000 for cryptocurrency "<symbol>"
      Examples:
      | symbol |
      | BTC    |
      | ETH    |
      | USDT   |



