dataLayer.push(
    {
        "0": "event",
        "1": "view_item",
        "2": {
            "send_to": [
                "G-ZZZ",
                "MC-ZZZ"
            ],
            "page_title": "item A",
            "page_location": "https://ghuihui.github.io/testpage/itemA.html",
            "ignore_referrer": "true"
        },
        "3":{
                "item":[{
                    "name":"itemA",
                    "price":2000
                }   
                ]
            } 
    },
      {
          "ecommerce": {
            "currencyCode": "JPY",
            "detail": {
                "actionField": {
                    "list": "Apparel Gallery"
                },
                "products": [
                    {
                        "name": "itemA",
                        "id": "1111",
                        "price": "2000",
                        "variant": "Black Gold"
                    }
                ]
            }
        }
  },
  {
    "PageType": "Productpage",
    "ProductID": "1111"
  },
  {
    "event":"view_item",
    "items": [
            {
                "id": "1111",
                "name": "itemA",
                "brand": "brandA",
                "category": "",
                "price": "2000",
                "variant": null
            }
     ]
  } 
);
