import RestoComponent from "./Resto";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from 'axios';
import { Link } from 'react-router-dom';
 

const BodyComponent = () => {

   // Whev ever we update the state Variable - React will automativally do the Re-Rendering!

    let [restorentData, filteredRestrunts] = useState([]);

    const [searchText, setsearchText] = useState("");
    console.log('Rendering Copmonent');

    useEffect( () => {
      fectData();
      fgsdfgsdfg();
      wtsonyourmins();
    }, []);
   
    const fectData = async() => {
    //  const resdata = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4241693&lng=78.3476283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   //   const orginalData = await resdata.json();
    // const apiRestolist = orginalData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
     const apiRespoResto =  [
          {
            
              id: "1115",
              name: "Udipi's Upahar",
              cloudinaryImageId: "nqgrpd6e8vliz57mxlvu",
              locality: "Indiranagar",
              areaName: "Gachibowli",
              costForTwo: "₹250 for two",
              cuisines: [
                "South Indian",
                "North Indian",
                "Chinese",
                "Snacks"
              ],
              avgRating: 4.3,
              veg: true,
              feeDetails: {
                restaurantId: "1115",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 3700
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 3700
              ,
              parentId: "1061",
              avgRatingString: "4.3",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 24,
                lastMileTravel: 4.7,
                serviceability: "SERVICEABLE",
                slaString: "24 mins",
                lastMileTravelString: "4.7 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 22:30:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              aggregatedDiscountInfoV3: {
                header: "₹75 OFF",
                subHeader: "ABOVE ₹299",
                discountTag: "FLAT DEAL"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            },
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/udipis-upahar-indiranagar-gachibowli-hyderabad-1115",
              type: "WEBLINK"
            }
          },
          {
           
              id: "20215",
              name: "Chai Point",
              cloudinaryImageId: "p4znxkstyrdobxwl6rxa",
              locality: "Raheja Mindspace",
              areaName: "Madhapur",
              costForTwo: "₹150 for two",
              cuisines: [
                "Bakery",
                "Beverages",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "South Indian",
                "Punjabi",
                "Chaat",
                "Indian",
                "American",
                "North Indian",
                "Fast Food",
                "Desserts",
                "Cafe",
                "Healthy Food",
                "Home Food"
              ],
              avgRating: 4,
              feeDetails: {
                restaurantId: "20215",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4900
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 4900
              ,
              parentId: "1607",
              avgRatingString: "4.0",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 29,
                lastMileTravel: 6.5,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-09-05 00:00:00",
                opened: true
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "",
                          fontColor: "#7E808C",
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available"
                        }
                      }
                    ]
                  }
                }
              },
              aggregatedDiscountInfoV3: {
                header: "60% OFF",
                subHeader: "UPTO ₹120"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            },
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/chai-point-raheja-mindspace-madhapur-hyderabad-20215",
              type: "WEBLINK"
            }
          },
          {
            
              id: "244361",
              name: "Starbucks Coffee",
              cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
              locality: "The Platina",
              areaName: "Gachibowli",
              costForTwo: "₹400 for two",
              cuisines: [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
              ],
              avgRating: 4.3,
              feeDetails: {
                restaurantId: "244361",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4300
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 4300
              },
              parentId: "195515",
              avgRatingString: "4.3",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 22,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "22 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 23:59:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/starbucks-coffee-the-platina-gachibowli-hyderabad-244361",
              type: "WEBLINK"
            }
          },
          {
            
              id: "355463",
              name: "Millet Express",
              cloudinaryImageId: "f89f83a650ad14380ffa50fccd9e2ac3",
              locality: "Manikonda",
              areaName: "Sri Laxmi Nagar Colony",
              costForTwo: "₹200 for two",
              cuisines: [
                "Healthy Food",
                "South Indian",
                "North Indian",
                "Biryani",
                "Chinese",
                "Beverages"
              ],
              avgRating: 4.1,
              feeDetails: {
                restaurantId: "355463",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4300
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 4300
              },
              parentId: "10639",
              avgRatingString: "4.1",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 22,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "22 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 15:00:00",
                opened: true
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                    fontColor: "#7E808C"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "",
                          fontColor: "#7E808C",
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "brand"
                        }
                      }
                    ]
                  }
                }
              },
              aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/millet-express-manikonda-sri-laxmi-nagar-colony-hyderabad-355463",
              type: "WEBLINK"
            }
          },
          {
            
              id: "11167",
              name: "Chutneys",
              cloudinaryImageId: "th8hw8gk6cdo4qir3jmy",
              locality: "Opp. Shilparamam",
              areaName: "Surya Enclave",
              costForTwo: "₹500 for two",
              cuisines: [
                "North Indian",
                "Chinese",
                "South Indian"
              ],
              avgRating: 4.2,
              veg: true,
              feeDetails: {
                restaurantId: "11167",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 5500
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 5500
              },
              parentId: "272",
              avgRatingString: "4.2",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 34,
                lastMileTravel: 7.9,
                serviceability: "SERVICEABLE",
                slaString: "34 mins",
                lastMileTravelString: "7.9 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 23:00:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/chutneys-opp-shilparamam-surya-enclave-hyderabad-11167",
              type: "WEBLINK"
            }
          },
          {
            
              id: "376101",
              name: "Harley's Fine Baking",
              cloudinaryImageId: "x8hdnoeard8p2bs2ugdi",
              locality: "Serilingampally",
              areaName: "Nanakramguda",
              costForTwo: "₹500 for two",
              cuisines: [
                "Bakery",
                "Desserts"
              ],
              avgRating: 4.5,
              feeDetails: {
                restaurantId: "376101",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 3000
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 3000
              },
              parentId: "11126",
              avgRatingString: "4.5",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 19,
                lastMileTravel: 2.6,
                serviceability: "SERVICEABLE",
                slaString: "19 mins",
                lastMileTravelString: "2.6 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-30 02:00:00",
                opened: true
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "newg.png",
                    description: "Gourmet"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "Gourmet",
                          imageId: "newg.png"
                        }
                      }
                    ]
                  },
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹50"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/harleys-fine-baking-serilingampally-nanakramguda-hyderabad-376101",
              type: "WEBLINK"
            }
          },
          {
            
              id: "2534",
              name: "Agra Sweets Banjara",
              cloudinaryImageId: "vf9cdxdlckfwudsnmskb",
              locality: "Kothaguda",
              areaName: "Kondapur",
              costForTwo: "₹250 for two",
              cuisines: [
                "Sweets",
                "Desserts",
                "Chaat",
                "Snacks",
                "Beverages"
              ],
              avgRating: 4,
              veg: true,
              feeDetails: {
                restaurantId: "2534",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4900
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 4900
              },
              parentId: "34",
              avgRatingString: "4.0",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 22,
                lastMileTravel: 6.1,
                serviceability: "SERVICEABLE",
                slaString: "22 mins",
                lastMileTravelString: "6.1 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 23:00:00",
                opened: true
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "",
                          fontColor: "#7E808C",
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available"
                        }
                      }
                    ]
                  }
                }
              },
              aggregatedDiscountInfoV3: {
                header: "30% OFF",
                subHeader: "UPTO ₹75"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/agra-sweets-banjara-kothaguda-kondapur-hyderabad-2534",
              type: "WEBLINK"
            }
          },
          {
            
              id: "322212",
              name: "100N",
              cloudinaryImageId: "1bb959b81c6f9cf2b65d9b778f3383fa",
              locality: " Ravi Colony",
              areaName: "Kondapur",
              costForTwo: "₹250 for two",
              cuisines: [
                "Barbecue",
                "Juices",
                "Healthy Food"
              ],
              avgRating: 4.3,
              feeDetails: {
                restaurantId: "322212",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 5500
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 5500
              },
              parentId: "22768",
              avgRatingString: "4.3",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 29,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "29 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-30 02:00:00",
                opened: true
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                    fontColor: "#7E808C"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "",
                          fontColor: "#7E808C",
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "brand"
                        }
                      }
                    ]
                  }
                }
              },
              aggregatedDiscountInfoV3: {
                header: "10% OFF",
                subHeader: "UPTO ₹40"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/100n-ravi-colony-kondapur-hyderabad-322212",
              type: "WEBLINK"
            }
          },
          {
           
              id: "10068",
              name: "The Bake Factory",
              cloudinaryImageId: "hgqmskqasnty663d3qhs",
              locality: "Maseed band Village",
              areaName: "Gachibowli",
              costForTwo: "₹250 for two",
              cuisines: [
                "Continental",
                "Healthy Food"
              ],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "10068",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 5500
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 5500
              },
              parentId: "1341",
              avgRatingString: "4.4",
              totalRatingsString: "10K+",
              sla: {
                deliveryTime: 30,
                lastMileTravel: 7.1,
                serviceability: "SERVICEABLE",
                slaString: "30 mins",
                lastMileTravelString: "7.1 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-30 01:35:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/the-bake-factory-maseed-band-village-gachibowli-hyderabad-10068",
              type: "WEBLINK"
            }
          },
          {
            
              id: "242369",
              name: "Samosa Singh",
              cloudinaryImageId: "77baefd8a5e319c828b4d7dff7260644",
              locality: "Manikonda",
              areaName: "Sri Laxmi Nagar Colony",
              costForTwo: "₹150 for two",
              cuisines: [
                "Street Food",
                "North Indian",
                "Beverages"
              ],
              avgRating: 4.1,
              veg: true,
              feeDetails: {
                restaurantId: "242369",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 3700
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 3700
              },
              parentId: "5639",
              avgRatingString: "4.1",
              totalRatingsString: "5K+",
              sla: {
                deliveryTime: 31,
                lastMileTravel: 4.8,
                serviceability: "SERVICEABLE",
                slaString: "31 mins",
                lastMileTravelString: "4.8 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 23:59:00",
                opened: true
              },
              badges: {},
              select: true,
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              aggregatedDiscountInfoV3: {
                header: "15% OFF",
                subHeader: "ABOVE ₹600",
                discountTag: "FLAT DEAL"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/samosa-singh-manikonda-sri-laxmi-nagar-colony-hyderabad-242369",
              type: "WEBLINK"
            }
          },
          {
            
              id: "433991",
              name: "Kadir Nurman - Bonafide Shawarma",
              cloudinaryImageId: "ty4avqzzzhawyxdncsau",
              locality: "Below Medics Healthcare",
              areaName: "Nanakramguda",
              costForTwo: "₹500 for two",
              cuisines: [
                "Arabian",
                "Lebanese",
                "European"
              ],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "433991",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 2500
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 2500
              },
              parentId: "321282",
              avgRatingString: "4.4",
              totalRatingsString: "1K+",
              sla: {
                deliveryTime: 21,
                lastMileTravel: 2.9,
                serviceability: "SERVICEABLE",
                slaString: "21 mins",
                lastMileTravelString: "2.9 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-30 02:00:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              aggregatedDiscountInfoV3: {
                header: "₹150 OFF",
                subHeader: "ABOVE ₹499",
                discountTag: "FLAT DEAL"
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/kadir-nurman-bonafide-shawarma-below-medics-healthcare-nanakramguda-hyderabad-433991",
              type: "WEBLINK"
            }
          },
          {
            
              id: "79404",
              name: "Hungryspoon By Radisson",
              cloudinaryImageId: "fovmardzrcfhtkto7zb0",
              locality: "Gachibowli",
              areaName: "Gachibowli",
              costForTwo: "₹250 for two",
              cuisines: [
                "Indian",
                "Continental",
                "Chinese"
              ],
              avgRating: 3.6,
              feeDetails: {
                restaurantId: "79404",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 4300
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 4300
              },
              parentId: "104919",
              avgRatingString: "3.6",
              totalRatingsString: "100+",
              sla: {
                deliveryTime: 31,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                slaString: "31 mins",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 23:00:00",
                opened: true
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "newg.png",
                    description: "Gourmet"
                  }
                ]
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "Gourmet",
                          imageId: "newg.png"
                        }
                      }
                    ]
                  },
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/hungryspoon-by-radisson-gachibowli-hyderabad-79404",
              type: "WEBLINK"
            }
          },
          {
            
              id: "290093",
              name: "Golkonda resorts and spa",
              cloudinaryImageId: "wlkhju6vpcxjjeishghl",
              locality: "Narsingi & Kokapet",
              areaName: "Gandipet",
              costForTwo: "₹1500 for two",
              cuisines: [
                "Indian",
                "Chinese",
                "Continental"
              ],
              avgRating: 3.6,
              feeDetails: {
                restaurantId: "290093",
                fees: [
                  {
                    name: "BASE_DISTANCE",
                    fee: 5500
                  },
                  {
                    name: "BASE_TIME"
                  },
                  {
                    name: "ANCILLARY_SURGE_FEE"
                  }
                ],
                totalFee: 5500
              },
              parentId: "19199",
              avgRatingString: "3.6",
              totalRatingsString: "100+",
              sla: {
                deliveryTime: 45,
                lastMileTravel: 7.5,
                serviceability: "SERVICEABLE",
                slaString: "45 mins",
                lastMileTravelString: "7.5 km",
                iconType: "ICON_TYPE_EMPTY"
              },
              availability: {
                nextCloseTime: "2023-08-29 22:30:00",
                opened: true
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textBased: {},
                  textExtendedBadges: {}
                }
              },
              loyaltyDiscoverPresentationInfo: {
                logoCtx: {
                  text: "BENEFITS",
                  logo: "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                freedelMessage: "FREE DELIVERY"
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {}
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {}
                }
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {}
            ,
            analytics: {},
            cta: {
              link: "https://www.swiggy.com/restaurants/golkonda-resorts-and-spa-narsingi-and-kokapet-gandipet-hyderabad-290093",
              type: "WEBLINK"
            }
          }
        ];
      filteredRestrunts(apiRespoResto)
    }



     // Conditional Rendering
   if(restorentData.length === 0) {
      // Show the shimmer
      return <Shimmer></Shimmer>
    }

  
    return (
        <div className="body">
          <div className="search">
            <input type="search" 
            value={searchText}
            onChange={ (e) => {
             setsearchText((e.target.value))
            }}/>


            <button className="btn btn-warning" onClick={() => {
                 /// Filter the RestoData by SearchText
                 alert(searchText);
            }}>Search</button>
          </div>
            <div className="top-rated">
                <button
                className="btn btn-primary"
                onClick={ () => {
                    let filtredResto = restorentData.filter( (resto) => resto.avgRating > 4);
                   /// console.log(filtredResto);
                   filteredRestrunts(filtredResto);
                   //restorentData = filtredResto;
                }}
                >Top Rated Resto
                </button>
            </div>
            <div className="row">  
           
            {
               restorentData.map( (restrorent) => ( 
                <div className="col">
              <Link to={"restomenu/" + restrorent.id }> <RestoComponent restoData = {restrorent} /> </Link>
               </div>
               ))
            }
            
            </div>
        </div>
    )
};


export default BodyComponent;