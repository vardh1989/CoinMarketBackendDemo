$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CryptoCurrency.feature");
formatter.feature({
  "line": 1,
  "name": "CryptoCurrency Test. This feature includes tests that are applicable to crytpocurrency.",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Validate the technical documentation website",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-the-technical-documentation-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "using Currency ID 1027 fetch the technical documentation",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "verify the logo \"logo\" \"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the technical_doc Url \"technical_doc\" \"[https://github.com/ethereum/wiki/wiki/White-Paper]\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the symbol \"symbol\" of currency \"ETH\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify the date added \"date_added\" is \"2015-08-07T00:00:00.000Z\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 1027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1027",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 3268916139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logo",
      "offset": 17
    },
    {
      "val": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      "offset": 24
    }
  ],
  "location": "CryptoStepDefs.verify_the_logo(String,String)"
});
formatter.result({
  "duration": 830894739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "technical_doc",
      "offset": 30
    },
    {
      "val": "[https://github.com/ethereum/wiki/wiki/White-Paper]",
      "offset": 46
    }
  ],
  "location": "CryptoStepDefs.verify_the_technical_docUrl(String,String)"
});
formatter.result({
  "duration": 24608343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbol",
      "offset": 19
    },
    {
      "val": "ETH",
      "offset": 40
    }
  ],
  "location": "CryptoStepDefs.verify_the_symbol_of_currency(String,String)"
});
formatter.result({
  "duration": 18369123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "date_added",
      "offset": 23
    },
    {
      "val": "2015-08-07T00:00:00.000Z",
      "offset": 39
    }
  ],
  "location": "CryptoStepDefs.verify_the_date_added_is(String,String)"
});
formatter.result({
  "duration": 16265589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "1027",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 27015528775,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#Extra Points"
    }
  ],
  "line": 14,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID \u003cid\u003e fetch the technical documentation",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in \u003cid\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 18,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 20,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 21,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;4"
    },
    {
      "cells": [
        "4"
      ],
      "line": 22,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;5"
    },
    {
      "cells": [
        "5"
      ],
      "line": 23,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;6"
    },
    {
      "cells": [
        "6"
      ],
      "line": 24,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;7"
    },
    {
      "cells": [
        "7"
      ],
      "line": 25,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;8"
    },
    {
      "cells": [
        "8"
      ],
      "line": 26,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;9"
    },
    {
      "cells": [
        "9"
      ],
      "line": 27,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;10"
    },
    {
      "cells": [
        "10"
      ],
      "line": 28,
      "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 1 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1778359179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 7661858795,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 2 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1032925339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "2",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 36613605,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 3 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1630269039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "3",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 30962431,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 4 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 4",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 984978935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "4",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 31023017,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 5 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 5",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1190634641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "5",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 31881219,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 6 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 6",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1059752301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "6",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 24938247,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 7 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 7",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 822516879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "7",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 25572877,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 8 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 8",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1200608700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "8",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 25296011,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 9 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 9",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 1502897429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "9",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 28590206,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Validate Mineable tag for Different Crypto IDs",
  "description": "",
  "id": "cryptocurrency-test.-this-feature-includes-tests-that-are-applicable-to-crytpocurrency.;validate-mineable-tag-for-different-crypto-ids;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "using Currency ID 10 fetch the technical documentation",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "verify the tagname \"tags\" is minable \"mineable\" in 10",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 18
    }
  ],
  "location": "CryptoStepDefs.using_Currency_ID_fetch_the_technical_documentation(int)"
});
formatter.result({
  "duration": 943306824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tags",
      "offset": 20
    },
    {
      "val": "mineable",
      "offset": 38
    },
    {
      "val": "10",
      "offset": 51
    }
  ],
  "location": "CryptoStepDefs.verify_the_tagname_is_minable(String,String,int)"
});
formatter.result({
  "duration": 29924406,
  "status": "passed"
});
formatter.uri("PriceConverter.feature");
formatter.feature({
  "line": 1,
  "name": "Price Converter Test. This feature includes tests that are applicable to Price Converter .",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "validate cryptocurrency\u0027s ID from its Symbol",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Using the symbol \"\u003csymbol\u003e\" verify the crypto ID \"\u003cID\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;",
  "rows": [
    {
      "cells": [
        "symbol",
        "ID"
      ],
      "line": 7,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;1"
    },
    {
      "cells": [
        "BTC",
        "1"
      ],
      "line": 8,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;2"
    },
    {
      "cells": [
        "ETH",
        "1027"
      ],
      "line": 9,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;3"
    },
    {
      "cells": [
        "USDT",
        "825"
      ],
      "line": 10,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "validate cryptocurrency\u0027s ID from its Symbol",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Using the symbol \"BTC\" verify the crypto ID \"1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "BTC",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "CryptoStepDefs.verify_the_crypto_ID(String,String)"
});
formatter.result({
  "duration": 2402729983,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "validate cryptocurrency\u0027s ID from its Symbol",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Using the symbol \"ETH\" verify the crypto ID \"1027\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "ETH",
      "offset": 18
    },
    {
      "val": "1027",
      "offset": 45
    }
  ],
  "location": "CryptoStepDefs.verify_the_crypto_ID(String,String)"
});
formatter.result({
  "duration": 4956510281,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "validate cryptocurrency\u0027s ID from its Symbol",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-cryptocurrency\u0027s-id-from-its-symbol;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Using the symbol \"USDT\" verify the crypto ID \"825\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "USDT",
      "offset": 18
    },
    {
      "val": "825",
      "offset": 46
    }
  ],
  "location": "CryptoStepDefs.verify_the_crypto_ID(String,String)"
});
formatter.result({
  "duration": 4785389847,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Validate price converter between Fiat and crypto currency",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User gets the \"Bolivian Boliviano\" fiat\u0027s convertID",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the price conversion of 1000 for cryptocurrency \"\u003csymbol\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;",
  "rows": [
    {
      "cells": [
        "symbol"
      ],
      "line": 17,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;1"
    },
    {
      "cells": [
        "BTC"
      ],
      "line": 18,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;2"
    },
    {
      "cells": [
        "ETH"
      ],
      "line": 19,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;3"
    },
    {
      "cells": [
        "USDT"
      ],
      "line": 20,
      "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Validate price converter between Fiat and crypto currency",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User gets the \"Bolivian Boliviano\" fiat\u0027s convertID",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the price conversion of 1000 for cryptocurrency \"BTC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bolivian Boliviano",
      "offset": 15
    }
  ],
  "location": "PriceStepDefs.user_gets_the_fiats_ConvertID(String)"
});
formatter.result({
  "duration": 1365149167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 31
    },
    {
      "val": "BTC",
      "offset": 56
    }
  ],
  "location": "PriceStepDefs.verify_the_price_conversion_for_cryptocurrency(int,String)"
});
formatter.result({
  "duration": 2019144155,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Validate price converter between Fiat and crypto currency",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User gets the \"Bolivian Boliviano\" fiat\u0027s convertID",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the price conversion of 1000 for cryptocurrency \"ETH\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bolivian Boliviano",
      "offset": 15
    }
  ],
  "location": "PriceStepDefs.user_gets_the_fiats_ConvertID(String)"
});
formatter.result({
  "duration": 1853911414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 31
    },
    {
      "val": "ETH",
      "offset": 56
    }
  ],
  "location": "PriceStepDefs.verify_the_price_conversion_for_cryptocurrency(int,String)"
});
formatter.result({
  "duration": 1078218022,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Validate price converter between Fiat and crypto currency",
  "description": "",
  "id": "price-converter-test.-this-feature-includes-tests-that-are-applicable-to-price-converter-.;validate-price-converter-between-fiat-and-crypto-currency;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Alltests"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User gets the \"Bolivian Boliviano\" fiat\u0027s convertID",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "verify the price conversion of 1000 for cryptocurrency \"USDT\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bolivian Boliviano",
      "offset": 15
    }
  ],
  "location": "PriceStepDefs.user_gets_the_fiats_ConvertID(String)"
});
formatter.result({
  "duration": 1537239890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 31
    },
    {
      "val": "USDT",
      "offset": 56
    }
  ],
  "location": "PriceStepDefs.verify_the_price_conversion_for_cryptocurrency(int,String)"
});
formatter.result({
  "duration": 2086810292,
  "status": "passed"
});
});