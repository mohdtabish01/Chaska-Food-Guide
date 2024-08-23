

import React from "react";
import ReactDOM from "react-dom/client";

//const root= ReactDOM.createRoot(document.getElementById('root'));   



       // const mat1= React.createElement("h1",{id:"title"},"react mat 1");
       // const mat2= React.createElement("h2",{id:"title"},"react mat 2");
       // const mat3= React.createElement("div",{id:"title"},[mat1,mat2]);

       // const Head=()=>{
       //        return(
       //               <>
       //               <h1>Hlo</h1>
       //               <h2>Bro</h2>
       //               <h3>Bhai</h3>
       //               </>
       //        );
       // };                                                                        //upto part 3

       // function Chinki(){
       //        return(
       //               <>
       //               <h1> Nam Duniya</h1>
       //               </>
       //        );
       // }

       
       // root.render(<Chinki/>);



       //part 4


       function Header(){
              return(
                     <div className="header">
                            <div className="img-container">
                                   <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" 
                                   alt="app-logo">
                                   </img>
                            </div>
                            <div className="name"> <h1> Tomato! </h1> </div>
                            <div className="nav-items">
                                   <ul>
                                          <li>Home</li>
                                          <li>About</li>
                                          <li>Contact</li>
                                          <li>Cart</li>
                                   </ul>
                            </div>
                     </div>
              );
       }

       const resi = [
              {
                "info": {
                  "id": "279863",
                  "name": "Ghar ka Khana by EatFit",
                  "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
                  "locality": "Naharpur",
                  "areaName": "Rohini",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "North Indian",
                    "Home Food",
                    "Healthy Food",
                    "Indian",
                    "Punjabi",
                    "South Indian",
                    "Rajasthani",
                    "Maharashtrian",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.2,
                  "veg": true,
                  "parentId": "422576",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 01:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-naharpur-rohini-delhi-279863",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "25182",
                  "name": "BTW",
                  "cloudinaryImageId": "c4ai8pwgz1pemtw8gnpq",
                  "locality": "Rohini",
                  "areaName": "Rohini",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Street Food",
                    "North Indian",
                    "Sweets"
                  ],
                  "avgRating": 4.2,
                  "parentId": "10314",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-19 23:00:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "4.0",
                      "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/btw-rohini-delhi-25182",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "579726",
                  "name": "GetAWay-Ice Creams & Desserts",
                  "cloudinaryImageId": "1777e7c24f019790672b290c0da723a9",
                  "locality": "Vardhman Premium Mall",
                  "areaName": "Netaji Subhash Place",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Salads",
                    "Juices",
                    "Ice Cream",
                    "Bakery"
                  ],
                  "avgRating": 4.5,
                  "veg": true,
                  "parentId": "354819",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "2.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-19 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ],
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "brand"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-vardhman-premium-mall-netaji-subhash-place-delhi-579726",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "558789",
                  "name": "HRX by EatFit",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/e82fc5c1-183f-4cdd-a106-3bc6a1f5d7cf_558789.jpg",
                  "locality": "7Th Sector",
                  "areaName": "Rohini",
                  "costForTwo": "₹450 for two",
                  "cuisines": [
                    "Healthy Food",
                    "Salads",
                    "Burgers"
                  ],
                  "avgRating": 4.4,
                  "parentId": "335529",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 01:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "brand"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/hrx-by-eatfit-7th-sector-rohini-delhi-558789",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "258189",
                  "name": "Great Indian Khichdi by EatFit",
                  "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
                  "locality": "Village Naharpur",
                  "areaName": "Pushpanjali",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Home Food",
                    "Indian",
                    "North Indian",
                    "Healthy Food",
                    "Snacks",
                    "Desserts",
                    "Rajasthani",
                    "South Indian",
                    "Maharashtrian",
                    "Sweets"
                  ],
                  "avgRating": 4.5,
                  "veg": true,
                  "parentId": "319582",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 01:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ],
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "brand"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-village-naharpur-pushpanjali-delhi-258189",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "10392",
                  "name": "Subway",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/8c270b25-fdb3-4b76-808e-4f2a7b133a6e_10392.JPG",
                  "locality": "Sector 3",
                  "areaName": "Rohini M2K",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "parentId": "2",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 04:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/subway-sector-3-rohini-m2k-delhi-10392",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "444780",
                  "name": "Theobroma",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/beb04fc8-e89b-47ff-b76e-31703790fc07_444780.jpg",
                  "locality": "Sector 3",
                  "areaName": "Rohini",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Bakery",
                    "Desserts"
                  ],
                  "avgRating": 4.6,
                  "parentId": "1040",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 00:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                      },
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                          },
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "15% OFF",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/theobroma-sector-3-rohini-delhi-444780",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "498382",
                  "name": "Burger King",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/64339639-9425-4d7a-807f-6fca82056ec3_498382.jpg",
                  "locality": "M2K Mall",
                  "areaName": "Rohini",
                  "costForTwo": "₹350 for two",
                  "cuisines": [
                    "Burgers",
                    "American"
                  ],
                  "avgRating": 4.4,
                  "parentId": "166",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 03:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹99"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/burger-king-m2k-mall-rohini-delhi-498382",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "791013",
                  "name": "Choko La",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/29/473c546f-cf53-4089-8d0b-8dfbcc24b6bb_791013.jpg",
                  "locality": "Sector 8",
                  "areaName": "Rohini",
                  "costForTwo": "₹500 for two",
                  "cuisines": [
                    "Bakery",
                    "Desserts"
                  ],
                  "avgRating": 4.6,
                  "parentId": "2098",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "50+",
                  "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 03:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Gourmet",
                              "imageId": "newg.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/choko-la-sector-8-rohini-delhi-791013",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "555307",
                  "name": "Chaayos Chai+Snacks",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_555307.JPG",
                  "locality": "Sector-7",
                  "areaName": "Rohini",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Bakery",
                    "Beverages",
                    "Chaat",
                    "Desserts",
                    "Home Food",
                    "Italian",
                    "Maharashtrian",
                    "Snacks",
                    "Street Food",
                    "Sweets"
                  ],
                  "avgRating": 4.7,
                  "parentId": "281782",
                  "avgRatingString": "4.7",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 33,
                    "lastMileTravel": 3.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        "description": "Delivery!"
                      }
                    ],
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹199"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-sector-7-rohini-delhi-555307",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "544505",
                  "name": "Vadilal Ice Creams",
                  "cloudinaryImageId": "yktyzkxsb0nds9jidw1f",
                  "locality": "Rithala",
                  "areaName": "Rohini",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Ice Cream",
                    "Desserts"
                  ],
                  "avgRating": 4.8,
                  "veg": true,
                  "parentId": "11745",
                  "avgRatingString": "4.8",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "5.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 01:30:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-rithala-rohini-delhi-544505",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "862073",
                  "name": "Starbucks Coffee",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/1ec2bd1e-7f19-40af-944a-c80832ae769f_862073.JPG",
                  "locality": "Sector 7",
                  "areaName": "Rohini",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Beverages",
                    "Cafe",
                    "Snacks",
                    "Desserts",
                    "Bakery",
                    "Ice Cream"
                  ],
                  "avgRating": 4.2,
                  "parentId": "195515",
                  "avgRatingString": "4.2",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "20-25 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-19 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹70"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/starbucks-coffee-sector-7-rohini-delhi-862073",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "443492",
                  "name": "EatFit",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/bf5211ad-bf62-43ed-a3f2-02985ca38b25_443492.JPG",
                  "locality": "Sector 7",
                  "areaName": "Rohini",
                  "costForTwo": "₹250 for two",
                  "cuisines": [
                    "Chinese",
                    "Healthy Food",
                    "Tandoor",
                    "Pizzas",
                    "North Indian",
                    "Thalis",
                    "Biryani"
                  ],
                  "avgRating": 4.4,
                  "parentId": "76139",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 01:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/eatfit-sector-7-rohini-delhi-443492",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "341033",
                  "name": "Bakingo",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/d2678d03-b7f9-4a8c-a959-a540e18d69f2_341033.JPG",
                  "locality": "Rithala",
                  "areaName": "Rohini",
                  "costForTwo": "₹300 for two",
                  "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                  ],
                  "avgRating": 4.5,
                  "parentId": "3818",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 00:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "14413",
                  "name": "Keventers - Milkshakes & Desserts",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/76b4a16b-9c1a-4b51-84bb-6ae7e5b54d4e_14413.JPG",
                  "locality": "Rohini",
                  "areaName": "Rohini",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Beverages",
                    "Ice Cream",
                    "Desserts",
                    "Healthy Food"
                  ],
                  "avgRating": 4.4,
                  "parentId": "268997",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "5K+",
                  "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 02:00:00",
                    "opened": true
                  },
                  "badges": {
                    "textExtendedBadges": [
                      {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "guiltfree/GF_Logo_android_3x",
                              "shortDescription": "options available"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹90"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "4.2",
                      "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-rohini-delhi-14413",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "73682",
                  "name": "Biryani Blues",
                  "cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
                  "locality": "Rohini",
                  "areaName": "Rohini",
                  "costForTwo": "₹400 for two",
                  "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "Lucknowi",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.4,
                  "parentId": "13813",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 30,
                    "lastMileTravel": 2.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 04:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "Delivery!",
                              "imageId": "Rxawards/_CATEGORY-Biryani.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹121 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "4.3",
                      "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/biryani-blues-rohini-delhi-73682",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "850492",
                  "name": "The Belgian Waffle Co.",
                  "cloudinaryImageId": "31c298bddfa617332b46c93bb209d572",
                  "locality": "Rohini",
                  "areaName": "Unity Mall",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Waffle",
                    "Desserts",
                    "Ice Cream",
                    "Beverages"
                  ],
                  "avgRating": 4.4,
                  "veg": true,
                  "parentId": "2233",
                  "avgRatingString": "4.4",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 03:00:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "isNewlyOnboarded": true,
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-rohini-unity-mall-delhi-850492",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "749064",
                  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_749064.JPG",
                  "locality": "Paschim Vihar",
                  "areaName": "Peera Garhi",
                  "costForTwo": "₹200 for two",
                  "cuisines": [
                    "Desserts",
                    "Ice Cream",
                    "Ice Cream Cakes"
                  ],
                  "avgRating": 4.6,
                  "veg": true,
                  "parentId": "582",
                  "avgRatingString": "4.6",
                  "totalRatingsString": "100+",
                  "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-19 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    "imageBadges": [
                      {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    ],
                    "textExtendedBadges": [
                      {
                        "iconId": "Ratnesh_Badges/test2.png",
                        "shortDescription": "Perfect ice cream delivery",
                        "fontColor": "#7E808C"
                      }
                    ]
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                            }
                          }
                        ]
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        "badgeObject": [
                          {
                            "attributes": {
                              "description": "",
                              "fontColor": "#7E808C",
                              "iconId": "Ratnesh_Badges/test2.png",
                              "shortDescription": "Perfect ice cream delivery"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹399",
                    "discountTag": "FLAT DEAL"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-paschim-vihar-peera-garhi-delhi-749064",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "225317",
                  "name": "La Pino'z Pizza",
                  "cloudinaryImageId": "aizb6uyem2jb1hcrhxac",
                  "locality": "Rohini",
                  "areaName": "New Friends Colony",
                  "costForTwo": "₹500 for two",
                  "cuisines": [
                    "Pizzas",
                    "Pastas",
                    "Italian",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.3,
                  "parentId": "4961",
                  "avgRatingString": "4.3",
                  "totalRatingsString": "10K+",
                  "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-20 05:00:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "aggregatedDiscountInfoV2": {
                    
                  },
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "3.9",
                      "ratingCount": "100+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-rohini-new-friends-colony-delhi-225317",
                  "type": "WEBLINK"
                }
              },
              {
                "info": {
                  "id": "35835",
                  "name": "Sweet Truth - Cake and Desserts",
                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/e49cdfb1-2427-4947-9b57-41ae9fa1749a_35835.jpg",
                  "locality": "Sector 8",
                  "areaName": "Rohini",
                  "costForTwo": "₹450 for two",
                  "cuisines": [
                    "Snacks",
                    "Bakery",
                    "Desserts",
                    "Beverages"
                  ],
                  "avgRating": 4.5,
                  "parentId": "4444",
                  "avgRatingString": "4.5",
                  "totalRatingsString": "1K+",
                  "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 2.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "2.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "nextCloseTime": "2024-08-19 23:59:00",
                    "opened": true
                  },
                  "badges": {
                    
                  },
                  "isOpen": true,
                  "type": "F",
                  "badgesV2": {
                    "entityBadges": {
                      "imageBased": {
                        
                      },
                      "textBased": {
                        
                      },
                      "textExtendedBadges": {
                        
                      }
                    }
                  },
                  "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹119"
                  },
                  "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {
                        
                      },
                      "video": {
                        
                      }
                    }
                  },
                  "reviewsSummary": {
                    
                  },
                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                  "restaurantOfferPresentationInfo": {
                    
                  },
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                  
                },
                "cta": {
                  "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-sector-8-rohini-delhi-35835",
                  "type": "WEBLINK"
                }
              }
            ];

       function Restcard(props){
              const { resData }=props;

              const {cloudinaryImageId, name, locality, areaName, avgRating, sla, cuisines } = resData?.info;

              const limitedCuisines = cuisines.slice(0, 3).join(", ");
            
              return(
                     <div className="restcard" style={cscs}>
                            <img className="food-img" alt="food-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
                            {/* <h3> {resData.info.name} </h3>
                            <h4> {resData.info.locality} </h4>
                            <h5> 4.4 stars </h5>
                            <h5> 21 minutes</h5> */}

                            <h1>{name}</h1>
                            <p>{limitedCuisines}</p>
                            <p>{locality}, {areaName}</p>
                            <p>Rating: {avgRating} ⭐</p>
                            <p>Delivery Time: {sla.deliveryTime} minutes</p>
                            {/* <p>Cuisines: {resData.info.cuisines.join(", ")}</p> */}  
                           


                     </div>
              );
       }


      


       function Body(){
              return(
                     <div className="body">
                            <div className="search-bar"></div>
                            <div className="rest-container">
                             
                                   {
                                          resi.map((el)=>(
                                                 <Restcard key={el.info.id} resData={el} />
                                          ))
                                   }
                            
                                   
                            </div>
                     </div>
                     
              );
       }

       const cscs={
              backgroundColor : "#f0f0f0",
       }


       const AppLayout=()=>{
              return(
                     <div className="App">
                            <Header/>
                            <Body/>
                     </div>
              );
                     
       };


       root.render(<AppLayout/>);