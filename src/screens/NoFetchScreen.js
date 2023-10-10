import { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import ResultList from "../components/ResultList"

const FecthScreen = () => {
  const response = {
    "businesses": [
        {
            "id": "ryvBsB9FrBBZDak87iGS1w",
            "alias": "sea-fire-grill-new-york",
            "name": "Sea Fire Grill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/exMqPoCEi2btoGtAd8kcIQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sea-fire-grill-new-york?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1526,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7547045987751,
                "longitude": -73.97222533963885
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$$",
            "location": {
                "address1": "158 E 48th St",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10017",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "158 E 48th St",
                    "New York, NY 10017"
                ]
            },
            "phone": "+12129353785",
            "display_phone": "(212) 935-3785",
            "distance": 5773.0696238333385
        },
        {
            "id": "ypqK8DWM8Bcs43YveSJnNw",
            "alias": "manhatta-new-york",
            "name": "Manhatta",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/uHQHaX-Q6_Z0ptEGNFenIw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/manhatta-new-york?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 655,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.70800627689857,
                "longitude": -74.00888226517013
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "28 Liberty St",
                "address2": "Fl 60",
                "address3": null,
                "city": "New York",
                "zip_code": "10005",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "28 Liberty St",
                    "Fl 60",
                    "New York, NY 10005"
                ]
            },
            "phone": "+12122305788",
            "display_phone": "(212) 230-5788",
            "distance": 1262.2789968123395
        },
        {
            "id": "nRO136GRieGtxz18uD61DA",
            "alias": "eleven-madison-park-new-york",
            "name": "Eleven Madison Park",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/s_H7gm_Hwmz--O6bo1iU-A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/eleven-madison-park-new-york?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 2446,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7416907417333,
                "longitude": -73.9872074872255
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "11 Madison Ave",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10010",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "11 Madison Ave",
                    "New York, NY 10010"
                ]
            },
            "phone": "+12128890905",
            "display_phone": "(212) 889-0905",
            "distance": 4062.929570044286
        },
        {
            "id": "SaYTVG7wHCMDBofHCgXPaA",
            "alias": "dutch-freds-new-york-2",
            "name": "Dutch Freds",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/312T_GEu3nsl7GZP15WwmQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dutch-freds-new-york-2?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 2028,
            "categories": [
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.760835,
                "longitude": -73.987823
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "307 W 47th St",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10036",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "307 W 47th St",
                    "New York, NY 10036"
                ]
            },
            "phone": "+16469186923",
            "display_phone": "(646) 918-6923",
            "distance": 6170.953313394009
        },
        {
            "id": "fVbUVAiLiGgLA_nxBFxyww",
            "alias": "thursday-kitchen-new-york",
            "name": "Thursday Kitchen",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/rNxrGdNWsrbivc0O1z2YXQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/thursday-kitchen-new-york?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1782,
            "categories": [
                {
                    "alias": "korean",
                    "title": "Korean"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                },
                {
                    "alias": "tapasmallplates",
                    "title": "Tapas/Small Plates"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.72761,
                "longitude": -73.98373
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "424 E 9th St",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10009",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "424 E 9th St",
                    "New York, NY 10009"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 2606.2864679081063
        },
        {
            "id": "_LJFf9YqpYxvExTvVxb7Rw",
            "alias": "the-modern-new-york-3",
            "name": "The Modern",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/Tnt4JT48wHJu1aDYzcCFQw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-modern-new-york-3?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1170,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.761106128269006,
                "longitude": -73.97670872686992
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "9 W 53rd St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "9 W 53rd St",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12123331220",
            "display_phone": "(212) 333-1220",
            "distance": 6352.669745324919
        },
        {
            "id": "ehUuSk5gPTCQmwS_ubgKRA",
            "alias": "upstate-craft-beer-and-oyster-bar-new-york-4",
            "name": "Upstate Craft Beer & Oyster Bar",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/V3pVDPhGZdbBueIMxkc8uw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/upstate-craft-beer-and-oyster-bar-new-york-4?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 2083,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.726373,
                "longitude": -73.986557
            },
            "transactions": [
                "restaurant_reservation",
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "95 1st Ave",
                "address2": null,
                "address3": "",
                "city": "New York",
                "zip_code": "10003",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "95 1st Ave",
                    "New York, NY 10003"
                ]
            },
            "phone": "+16467915400",
            "display_phone": "(646) 791-5400",
            "distance": 2405.2814943834474
        },
        {
            "id": "1DfbZ0VsSCg9g1KILmnvzQ",
            "alias": "per-se-new-york",
            "name": "Per Se",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/531LmZ0PjJD523UNhldWjw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/per-se-new-york?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1871,
            "categories": [
                {
                    "alias": "french",
                    "title": "French"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.7681528889558,
                "longitude": -73.9827629623657
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "10 Columbus Cir",
                "address2": "Fl 4",
                "address3": null,
                "city": "New York",
                "zip_code": "10019",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "10 Columbus Cir",
                    "Fl 4",
                    "New York, NY 10019"
                ]
            },
            "phone": "+12128239335",
            "display_phone": "(212) 823-9335",
            "distance": 7028.746060156897
        },
        {
            "id": "DRitJoNGTkHXZvH_YpLIAw",
            "alias": "marc-forgione-new-york-2",
            "name": "Marc Forgione",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/f_rrhoaW8XBineAC9IsVMA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/marc-forgione-new-york-2?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1014,
            "categories": [
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.71647,
                "longitude": -74.0095599
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$$$",
            "location": {
                "address1": "134 Reade St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10013",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "134 Reade St",
                    "New York, NY 10013"
                ]
            },
            "phone": "+12129419401",
            "display_phone": "(212) 941-9401",
            "distance": 1775.8377525676901
        },
        {
            "id": "DZaN3bNWfwcm__sNw5bvDg",
            "alias": "daniel-new-york-4",
            "name": "Daniel",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/iLGfPaPnRkNAxODW9PZ_Yg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/daniel-new-york-4?adjust_creative=FGpgT21h-0Tv5aANns2hEg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=FGpgT21h-0Tv5aANns2hEg",
            "review_count": 1876,
            "categories": [
                {
                    "alias": "french",
                    "title": "French"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                },
                {
                    "alias": "newamerican",
                    "title": "American (New)"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 40.76678,
                "longitude": -73.96757
            },
            "transactions": [],
            "price": "$$$$",
            "location": {
                "address1": "60 E 65th St",
                "address2": "",
                "address3": "",
                "city": "New York",
                "zip_code": "10065",
                "country": "US",
                "state": "NY",
                "display_address": [
                    "60 E 65th St",
                    "New York, NY 10065"
                ]
            },
            "phone": "+12122880033",
            "display_phone": "(212) 288-0033",
            "distance": 7186.313714915634
        }
    ],
    "total": 15000,
    "region": {
        "center": {
            "longitude": -73.99429321289062,
            "latitude": 40.70544486444615
        }
    }
}


    return (
        <>
        <Text>Search Bar</Text>
        <ScrollView>
            <ResultList results={response.businesses} title="Results by popularity"/>
            <ResultList results={response.businesses} title="Results by age"/>
            <ResultList results={response.businesses} title="Results by name"/>
        </ScrollView>
        </>
    )
}

export default FecthScreen