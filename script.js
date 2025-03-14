TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_85A13955_96B2_7923_41CE_A949C01A69E7_t.jpg",
  "id": "panorama_85A13955_96B2_7923_41CE_A949C01A69E7",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85A13955_96B2_7923_41CE_A949C01A69E7_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_85A13955_96B2_7923_41CE_A949C01A69E7_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85A13955_96B2_7923_41CE_A949C01A69E7.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Front Porch",
  "partial": false,
  "mapLocations": [
   {
    "x": 805,
    "class": "PanoramaMapLocation",
    "y": 711.95,
    "angle": 178.63,
    "map": {
     "fieldOfViewOverlayInsideColor": "#0099CC",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_t.png",
     "width": 1251,
     "id": "map_8D053ADB_9772_3B27_41E2_3196E76F64F3",
     "height": 777,
     "overlays": [
      {
       "id": "overlay_B602D409_97F6_0F23_41D8_3D3498861A23",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 748.95,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 527.15,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 44,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Entry Way"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 748.95,
        "class": "HotspotMapOverlayImage",
        "y": 527.15,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 89,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_B6483A78_97F6_7BE0_41CA_29EBCF1D6C8D",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 592.35,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 409.5,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 44,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Living Room 1"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 592.35,
        "class": "HotspotMapOverlayImage",
        "y": 409.5,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 89,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_B363B87B_97F6_07E7_41C3_E6A54F2FFAC1",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 451.15,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 527.15,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 44,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Fireplace"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 451.15,
        "class": "HotspotMapOverlayImage",
        "y": 527.15,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 89,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_B82B551A_9956_0926_41D0_456525EF37F8",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 760,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 666.95,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Front Porch"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 760,
        "class": "HotspotMapOverlayImage",
        "y": 666.95,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BE87B3BA_996E_0966_41D8_4CE0874D4961",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 526.8,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 202.45,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Kitchen"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 526.8,
        "class": "HotspotMapOverlayImage",
        "y": 202.45,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_B9DF8586_996E_0921_41E0_D257D28490DA",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 290.1,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 139.55,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Laundry Room"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 290.1,
        "class": "HotspotMapOverlayImage",
        "y": 139.55,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BF851271_9972_0BE0_41A4_BE61B6B894EE",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 289.55,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 34.55,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Back Porch"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 289.55,
        "class": "HotspotMapOverlayImage",
        "y": 34.55,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BFADBC20_9972_7F61_41C1_BA387157AF11",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 847.05,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 326.05,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Hallway"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 847.05,
        "class": "HotspotMapOverlayImage",
        "y": 326.05,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_B9E417FA_9972_08E1_41C1_AF708440ACFB",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 847.05,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 194.6,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_9_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Second Bath"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 847.05,
        "class": "HotspotMapOverlayImage",
        "y": 194.6,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_9.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BE1E210A_9972_0921_41B0_CECF315394CC",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 858.65,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 434.75,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_10_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Bedroom 2"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 9)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 858.65,
        "class": "HotspotMapOverlayImage",
        "y": 434.75,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_10.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BE7C0971_9976_19E0_41D8_2B7E8D013A49",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1009.1,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 585.55,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_11_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Bedroom 2"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1009.1,
        "class": "HotspotMapOverlayImage",
        "y": 585.55,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_11.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BE86981E_9976_0721_41D9_3350F136731E",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 948.55,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 303.6,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_12_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Bedroom 3"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 11)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 948.55,
        "class": "HotspotMapOverlayImage",
        "y": 303.6,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_12.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BE2EE168_9976_09E1_41A2_360C9DF741C5",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 1107.95,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 195.8,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_13_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Bedroom 3"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 12)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1107.95,
        "class": "HotspotMapOverlayImage",
        "y": 195.8,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_13.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BFE3881F_9976_075F_41C7_4FAA6522F6E3",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 415.1,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 419.1,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_14_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Hallway"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 13)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 415.1,
        "class": "HotspotMapOverlayImage",
        "y": 419.1,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_14.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BF4964A6_9976_0F61_41DB_2C3E8192DFF8",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 257.3,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 567.2,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_15_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Master Bedroom"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 14)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 257.3,
        "class": "HotspotMapOverlayImage",
        "y": 567.2,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_15.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_BF916BFF_9972_38E0_41E2_15ECA39EA172",
       "class": "AreaHotspotMapOverlay",
       "map": {
        "offsetY": 0,
        "x": 139.9,
        "width": 90,
        "class": "HotspotMapOverlayMap",
        "y": 256.95,
        "height": 90,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 45,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_16_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Master Bath"
       },
       "areas": [
        {
         "click": "this.mainPlayList.set('selectedIndex', 15)",
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 139.9,
        "class": "HotspotMapOverlayImage",
        "y": 256.95,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "width": 90,
           "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_HS_16.png",
           "class": "ImageResourceLevel"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 777,
        "width": 1251,
        "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 388,
        "width": 625,
        "url": "media/map_8D053ADB_9772_3B27_41E2_3196E76F64F3_lq.png",
        "class": "ImageResourceLevel",
        "grayscale": true
       }
      ]
     },
     "class": "Map",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.16,
     "maximumZoomFactor": 1.2,
     "label": "Schooler - Floorplan 1 of 1",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.2,
     "minimumZoomFactor": 0.5
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "buttonRestart": {
   "horizontalAlign": "center",
   "mode": "push",
   "paddingBottom": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "shadow": false,
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0
  },
  "buttonPause": {
   "horizontalAlign": "center",
   "mode": "toggle",
   "paddingBottom": 0,
   "width": 40,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "height": 40,
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "shadow": false,
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0
  },
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "horizontalAlign": "center",
   "mode": "push",
   "paddingBottom": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "shadow": false,
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "buttonZoomOut": {
   "toolTipFontStyle": "normal",
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "paddingBottom": 0,
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "class": "IconButton",
   "toolTipPaddingBottom": 4,
   "toolTipBackgroundColor": "#F6F6F6",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "toolTipBorderColor": "#767676",
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "toolTipShadowOpacity": 1,
   "borderSize": 0,
   "toolTip": "Zoom Out",
   "toolTipPaddingRight": 6,
   "minHeight": 0,
   "borderRadius": 0,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "toolTipOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  },
  "buttonPlayRight": {
   "horizontalAlign": "center",
   "mode": "push",
   "paddingBottom": 0,
   "width": 38,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "class": "IconButton",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "shadow": false,
   "transparencyActive": false,
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "borderSize": 0,
   "minHeight": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonZoomIn": {
   "toolTipFontStyle": "normal",
   "toolTipShadowVerticalLength": 0,
   "toolTipShadowBlurRadius": 3,
   "horizontalAlign": "center",
   "mode": "push",
   "paddingBottom": 0,
   "width": 30,
   "toolTipDisplayTime": 600,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "height": 30,
   "toolTipTextShadowBlurRadius": 3,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "class": "IconButton",
   "toolTipPaddingBottom": 4,
   "toolTipBackgroundColor": "#F6F6F6",
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "shadow": false,
   "toolTipFontSize": 12,
   "transparencyActive": false,
   "minWidth": 0,
   "toolTipFontWeight": "normal",
   "cursor": "hand",
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "toolTipBorderColor": "#767676",
   "paddingLeft": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "toolTipFontFamily": "Arial",
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "toolTipShadowOpacity": 1,
   "borderSize": 0,
   "toolTip": "Zoom In",
   "toolTipPaddingRight": 6,
   "minHeight": 0,
   "borderRadius": 0,
   "toolTipPaddingLeft": 6,
   "toolTipShadowSpread": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "toolTipOpacity": 1,
   "toolTipBorderSize": 1,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowColor": "#000000"
  }
 },
 {
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadWidth": 6,
   "toolTipDisplayTime": 600,
   "playbackBarHeadShadow": true,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarProgressOpacity": 1,
   "playbackBarHeight": 20,
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowColor": "#000000",
   "progressLeft": 10,
   "class": "ViewerArea",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderColor": "#000000",
   "shadow": false,
   "progressBorderColor": "#AAAAAA",
   "playbackBarBottom": 0,
   "playbackBarBorderRadius": 4,
   "playbackBarBorderColor": "#AAAAAA",
   "progressBarBorderRadius": 4,
   "paddingLeft": 0,
   "paddingRight": 0,
   "toolTipBorderRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBorderSize": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipShadowOpacity": 1,
   "paddingTop": 0,
   "toolTipOpacity": 1,
   "transitionDuration": 500,
   "toolTipBorderSize": 1,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "minHeight": 1,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "paddingBottom": 0,
   "width": "100%",
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "progressBorderRadius": 4,
   "playbackBarHeadHeight": 30,
   "transitionMode": "blending",
   "progressBorderSize": 2,
   "height": "100%",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBorderColor": "#000000",
   "toolTipFontSize": 12,
   "playbackBarOpacity": 1,
   "minWidth": 1,
   "progressBarOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "top": "0%",
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 1,
   "borderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "id": "MapViewer",
   "progressHeight": 20,
   "toolTipPaddingLeft": 6,
   "progressOpacity": 1,
   "toolTipShadowSpread": 0,
   "progressRight": 10,
   "left": "0%",
   "progressBottom": 2,
   "borderSize": 0,
   "playbackBarRight": 0,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarBorderSize": 2
  },
  "movementMode": "constrained",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -177.37,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 39.7,
     "easing": "linear",
     "targetPitch": -7.73,
     "pitchSpeed": 20.26
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_85A13955_96B2_7923_41CE_A949C01A69E7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 3.64,
   "class": "PanoramaCameraPosition",
   "pitch": 3.39
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_985E78C7_96BE_072F_41E0_BC24B919F250_t.jpg",
  "id": "panorama_985E78C7_96BE_072F_41E0_BC24B919F250",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_985E78C7_96BE_072F_41E0_BC24B919F250_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_985E78C7_96BE_072F_41E0_BC24B919F250_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_985E78C7_96BE_072F_41E0_BC24B919F250.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Entry Way",
  "partial": false,
  "mapLocations": [
   {
    "x": 793.95,
    "class": "PanoramaMapLocation",
    "y": 572.15,
    "angle": -9.88,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 1.38,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.2,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_985E78C7_96BE_072F_41E0_BC24B919F250_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -104.32,
   "class": "PanoramaCameraPosition",
   "pitch": -5.19
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_t.jpg",
  "id": "panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Living Room",
  "partial": false,
  "mapLocations": [
   {
    "x": 637.35,
    "class": "PanoramaMapLocation",
    "y": 454.5,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -122.97,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.44,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 20.93,
   "class": "PanoramaCameraPosition",
   "pitch": -4.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_t.jpg",
  "id": "panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Fire Place",
  "partial": false,
  "mapLocations": [
   {
    "x": 496.15,
    "class": "PanoramaMapLocation",
    "y": 572.15,
    "angle": -9.03,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 11.18,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 0.44,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 118.7,
   "class": "PanoramaCameraPosition",
   "pitch": -4.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_t.jpg",
  "id": "panorama_8725122F_96D6_0B60_4190_5E5377BBCD73",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_8725122F_96D6_0B60_4190_5E5377BBCD73.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Kitchen",
  "partial": false,
  "mapLocations": [
   {
    "x": 571.8,
    "class": "PanoramaMapLocation",
    "y": 247.45,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -64.69,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -2.95,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 90.06,
   "class": "PanoramaCameraPosition",
   "pitch": -5.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_t.jpg",
  "id": "panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Laundry Room",
  "partial": false,
  "mapLocations": [
   {
    "x": 335.1,
    "class": "PanoramaMapLocation",
    "y": 184.55,
    "angle": 2.49,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -27.51,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.44,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 24.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0.5
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_t.jpg",
  "id": "panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Back Porch",
  "partial": false,
  "mapLocations": [
   {
    "x": 334.55,
    "class": "PanoramaMapLocation",
    "y": 79.55,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 73.86,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -1.95,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -87.05,
   "class": "PanoramaCameraPosition",
   "pitch": -2.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_t.jpg",
  "id": "panorama_858C81AA_96D2_0960_41D8_DEAC25B65702",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_858C81AA_96D2_0960_41D8_DEAC25B65702.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Hallway",
  "partial": false,
  "mapLocations": [
   {
    "x": 892.05,
    "class": "PanoramaMapLocation",
    "y": 371.05,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 6.66,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.96,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -103.88,
   "class": "PanoramaCameraPosition",
   "pitch": -3.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_t.jpg",
  "id": "panorama_854B82ED_96D2_08E0_41E0_FF6F54231437",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_854B82ED_96D2_08E0_41E0_FF6F54231437.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 150,
  "class": "Panorama",
  "pitch": 0,
  "label": "Second Bath",
  "partial": false,
  "mapLocations": [
   {
    "x": 892.05,
    "class": "PanoramaMapLocation",
    "y": 239.6,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 116
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -172.34,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -15.89,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 131,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_822E584E_96D2_0721_41DB_94DD39695DE3_t.jpg",
  "id": "panorama_822E584E_96D2_0721_41DB_94DD39695DE3",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_822E584E_96D2_0721_41DB_94DD39695DE3_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_822E584E_96D2_0721_41DB_94DD39695DE3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_822E584E_96D2_0721_41DB_94DD39695DE3.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Bedroom 2",
  "partial": false,
  "mapLocations": [
   {
    "x": 903.65,
    "class": "PanoramaMapLocation",
    "y": 479.75,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 132.14,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -5.72,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_822E584E_96D2_0721_41DB_94DD39695DE3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_t.jpg",
  "id": "panorama_870CB048_96D2_0720_41DC_92F7F3D9535A",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_870CB048_96D2_0720_41DC_92F7F3D9535A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Bedroom 2",
  "partial": false,
  "mapLocations": [
   {
    "x": 1054.1,
    "class": "PanoramaMapLocation",
    "y": 630.55,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -69.09,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -3.33,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 66.57,
   "class": "PanoramaCameraPosition",
   "pitch": 1
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_t.jpg",
  "id": "panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Bedroom 3",
  "partial": false,
  "mapLocations": [
   {
    "x": 993.55,
    "class": "PanoramaMapLocation",
    "y": 348.6,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 71.97,
     "class": "TargetPanoramaCameraMovement",
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -5.72,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -129.39,
   "class": "PanoramaCameraPosition",
   "pitch": -0.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_t.jpg",
  "id": "panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Bedroom 3",
  "partial": false,
  "mapLocations": [
   {
    "x": 1152.95,
    "class": "PanoramaMapLocation",
    "y": 240.8,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -112.8,
     "class": "TargetPanoramaCameraMovement",
     "path": "longest",
     "yawSpeed": 33.25,
     "easing": "linear",
     "targetPitch": -5.97,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 173.09,
   "class": "PanoramaCameraPosition",
   "pitch": -11.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_t.jpg",
  "id": "panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Hallway",
  "partial": false,
  "mapLocations": [
   {
    "x": 460.1,
    "class": "PanoramaMapLocation",
    "y": 464.1,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -115.56,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.09,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": 94.96,
   "class": "PanoramaCameraPosition",
   "pitch": -2.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_t.jpg",
  "id": "panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Master Bedroom",
  "partial": false,
  "mapLocations": [
   {
    "x": 302.3,
    "class": "PanoramaMapLocation",
    "y": 612.2,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -41.83,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -0.19,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -102.5,
   "class": "PanoramaCameraPosition",
   "pitch": -2.51
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "thumbnailUrl": "media/panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_t.jpg",
  "id": "panorama_85756157_96B2_0920_41D8_E9628BCCC8CE",
  "vfov": 180,
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_85756157_96B2_0920_41D8_E9628BCCC8CE.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "hfovMax": 120,
  "class": "Panorama",
  "label": "Master Bath",
  "partial": false,
  "mapLocations": [
   {
    "x": 184.9,
    "class": "PanoramaMapLocation",
    "y": 301.95,
    "angle": 0,
    "map": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ],
  "hfovMin": 60
 },
 {
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -3.27,
     "class": "TargetPanoramaCameraMovement",
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": 4.21,
     "pitchSpeed": 17.05
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "yaw": -176.99,
   "class": "PanoramaCameraPosition",
   "pitch": -7.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "label": "Drone Footage 2",
  "thumbnailUrl": "media/video_801D3D89_9756_3923_41D6_1BDB63BADD70_t.jpg",
  "scaleMode": "fit_inside",
  "width": 1920,
  "id": "video_801D3D89_9756_3923_41D6_1BDB63BADD70",
  "loop": false,
  "video": {
   "height": 1080,
   "mp4Url": "media/video_801D3D89_9756_3923_41D6_1BDB63BADD70.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "height": 1080
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer"
 },
 {
  "class": "Video",
  "label": "Drone Footage",
  "thumbnailUrl": "media/video_80DC9628_96B2_0B61_41D1_EC0F96411FC2_t.jpg",
  "scaleMode": "fit_inside",
  "width": 1920,
  "id": "video_80DC9628_96B2_0B61_41D1_EC0F96411FC2",
  "loop": false,
  "video": {
   "height": 1080,
   "mp4Url": "media/video_80DC9628_96B2_0B61_41D1_EC0F96411FC2.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "height": 1080
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album 20250314_110258",
  "playList": {
   "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_AlbumPlayList",
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_0.jpg",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "Photo",
      "label": "20250314_110258",
      "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_0_t.jpg",
      "width": 4000,
      "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_0",
      "height": 1868,
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "x": "0.36",
       "class": "PhotoCameraPosition",
       "y": "0.49",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_1.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "Photo",
      "label": "DJI_0358",
      "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_1_t.jpg",
      "width": 4000,
      "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_1",
      "height": 2250,
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "x": "0.69",
       "class": "PhotoCameraPosition",
       "y": "0.66",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_2.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "Photo",
      "label": "DJI_0361",
      "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_2_t.jpg",
      "width": 4000,
      "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_2",
      "height": 2250,
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "x": "0.66",
       "class": "PhotoCameraPosition",
       "y": "0.58",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_3.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "Photo",
      "label": "DJI_0364",
      "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_3_t.jpg",
      "width": 4000,
      "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_3",
      "height": 2250,
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "x": "0.56",
       "class": "PhotoCameraPosition",
       "y": "0.33",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "class": "PhotoPlayListItem"
    },
    {
     "media": {
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_4.JPG",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "class": "Photo",
      "label": "DJI_0366",
      "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_4_t.jpg",
      "width": 4000,
      "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2_4",
      "height": 2250,
      "duration": 5000
     },
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "targetPosition": {
       "x": "0.27",
       "class": "PhotoCameraPosition",
       "y": "0.69",
       "zoomFactor": 1.1
      },
      "duration": 5000,
      "initialPosition": {
       "x": "0.50",
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear"
     },
     "class": "PhotoPlayListItem"
    }
   ]
  },
  "thumbnailUrl": "media/album_8F4DE991_9752_1923_41D3_29F0B61E31E2_t.png",
  "id": "album_8F4DE991_9752_1923_41D3_29F0B61E31E2"
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "id": "MainViewerPhotoAlbumPlayer",
  "class": "PhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2_0",
 "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2_1",
 "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2_2",
 "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2_3",
 "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2_4",
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85A13955_96B2_7923_41CE_A949C01A69E7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2EECBC0_9952_7921_41CC_92BAF8CA9979, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2EECBC0_9952_7921_41CC_92BAF8CA9979",
    "camera": "this.panorama_85A13955_96B2_7923_41CE_A949C01A69E7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_985E78C7_96BE_072F_41E0_BC24B919F250",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2EF6BC1_9952_7923_41D7_D1FB1625E041, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2EF6BC1_9952_7923_41D7_D1FB1625E041",
    "camera": "this.panorama_985E78C7_96BE_072F_41E0_BC24B919F250_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2EF9BC1_9952_7923_41DF_67833845330C, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2EF9BC1_9952_7923_41DF_67833845330C",
    "camera": "this.panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2EFCBC1_9952_7923_41E0_6E98A8541F30, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2EFCBC1_9952_7923_41E0_6E98A8541F30",
    "camera": "this.panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_8725122F_96D6_0B60_4190_5E5377BBCD73",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E07BC1_9952_7923_41C2_A1470D5705CC, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E07BC1_9952_7923_41C2_A1470D5705CC",
    "camera": "this.panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E0ABC1_9952_7923_41C1_56E168F49012, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E0ABC1_9952_7923_41C1_56E168F49012",
    "camera": "this.panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E0DBC1_9952_7923_41E0_FD7889A36C69, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E0DBC1_9952_7923_41E0_FD7889A36C69",
    "camera": "this.panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_858C81AA_96D2_0960_41D8_DEAC25B65702",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E10BC2_9952_7921_41C2_F5A0BE197C3B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E10BC2_9952_7921_41C2_F5A0BE197C3B",
    "camera": "this.panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_854B82ED_96D2_08E0_41E0_FF6F54231437",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E14BC2_9952_7921_41DA_6CFD1EBA2520, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E14BC2_9952_7921_41DA_6CFD1EBA2520",
    "camera": "this.panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_822E584E_96D2_0721_41DB_94DD39695DE3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E1FBC2_9952_7921_41C5_1FFE3941438E, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E1FBC2_9952_7921_41C5_1FFE3941438E",
    "camera": "this.panorama_822E584E_96D2_0721_41DB_94DD39695DE3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_870CB048_96D2_0720_41DC_92F7F3D9535A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E22BC2_9952_7921_41E2_EF39267D3B0C, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E22BC2_9952_7921_41E2_EF39267D3B0C",
    "camera": "this.panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E25BC2_9952_7926_41DE_E64C21EBAE12, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E25BC2_9952_7926_41DE_E64C21EBAE12",
    "camera": "this.panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E28BC3_9952_7927_41E3_0ACBA2C0CC2B, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E28BC3_9952_7927_41E3_0ACBA2C0CC2B",
    "camera": "this.panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E33BC3_9952_7927_41D7_08990E6E569D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E33BC3_9952_7927_41D7_08990E6E569D",
    "camera": "this.panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E36BC3_9952_7927_41E0_73411E37B5DB, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E36BC3_9952_7927_41E0_73411E37B5DB",
    "camera": "this.panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85756157_96B2_0920_41D8_E9628BCCC8CE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_B2E3ABC3_9952_7927_41D7_1A15B7B53F05, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_B2E3ABC3_9952_7927_41D7_1A15B7B53F05",
    "camera": "this.panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_801D3D89_9756_3923_41D6_1BDB63BADD70",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000')"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_80DC9628_96B2_0B61_41D1_EC0F96411FC2",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000')"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 0); this.setComponentVisibility(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B, true, -1, this.effect_B722A3D5_97D6_0923_41C0_36B2EF02F096, 'showEffect', false)",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_8F4DE991_9752_1923_41D3_29F0B61E31E2",
    "end": "this.setComponentVisibility(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B, false, -1, this.effect_B722B3D5_97D6_0922_41B9_9858029B4726, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B, false, -1, this.effect_B722B3D5_97D6_0922_41B9_9858029B4726, 'hideEffect', false); this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85A13955_96B2_7923_41CE_A949C01A69E7",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85A13955_96B2_7923_41CE_A949C01A69E7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_985E78C7_96BE_072F_41E0_BC24B919F250",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_985E78C7_96BE_072F_41E0_BC24B919F250_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_87C2C4AA_96D6_0F61_41B6_AA6CBAC8F49A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_843A4D24_96D6_3960_41DF_8FA35FA32F8C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_8725122F_96D6_0B60_4190_5E5377BBCD73",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8725122F_96D6_0B60_4190_5E5377BBCD73_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85CDF2C6_96D6_0B20_41CC_41F76D843FDC_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_82F4644C_96B2_0F21_41E1_7B032B41F38A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_858C81AA_96D2_0960_41D8_DEAC25B65702",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_858C81AA_96D2_0960_41D8_DEAC25B65702_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_854B82ED_96D2_08E0_41E0_FF6F54231437",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_854B82ED_96D2_08E0_41E0_FF6F54231437_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_822E584E_96D2_0721_41DB_94DD39695DE3",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_822E584E_96D2_0721_41DB_94DD39695DE3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_870CB048_96D2_0720_41DC_92F7F3D9535A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_870CB048_96D2_0720_41DC_92F7F3D9535A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_838D567A_96AE_0BE1_41A6_86E415BE7D26_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_873ACD29_96AE_3960_41D7_5D0AAB01AB13_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_852CCCA6_96AE_1F61_41D4_40AF0790D62F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EF9FFA_96AD_F8E1_41BD_443805DB2C34_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 0)",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_85756157_96B2_0920_41D8_E9628BCCC8CE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_85756157_96B2_0920_41D8_E9628BCCC8CE_camera"
   }
  ]
 },
 {
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, 1)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_801D3D89_9756_3923_41D6_1BDB63BADD70",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000')"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, 0)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_80DC9628_96B2_0B61_41D1_EC0F96411FC2",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 1, '#000000')"
   }
  ]
 },
 {
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_801D3D89_9756_3923_41D6_1BDB63BADD70",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, '#000000')"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 0)",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_80DC9628_96B2_0B61_41D1_EC0F96411FC2",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, '#000000')"
   }
  ]
 },
 "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3",
 {
  "id": "playList_B2EE6BC0_9952_7921_41DE_89E0284FF10E",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ]
 },
 {
  "id": "playList_B2EE5BC0_9952_7921_41D1_E83FCD067DAC",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "media": "this.map_8D053ADB_9772_3B27_41E2_3196E76F64F3"
   }
  ]
 },
 {
  "duration": 1000,
  "id": "effect_B722A3D5_97D6_0923_41C0_36B2EF02F096",
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 {
  "duration": 1000,
  "id": "effect_B722B3D5_97D6_0922_41B9_9858029B4726",
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 {
  "id": "audio_835073D3_96B2_0920_41C5_61484D4386FB",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_835073D3_96B2_0920_41C5_61484D4386FB.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_835073D3_96B2_0920_41C5_61484D4386FB.ogg"
  },
  "data": {
   "label": "Woke up to the mist rollin\u2019 off the Hood"
  }
 },
 {
  "id": "audio_80D03488_96B2_0F20_41B6_5C09AAB528E3",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_80D03488_96B2_0F20_41B6_5C09AAB528E3.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_80D03488_96B2_0F20_41B6_5C09AAB528E3.ogg"
  },
  "data": {
   "label": "Woke up to the mist rollin\u2019 off the Hood"
  }
 }
], "children": [
 {
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadWidth": 6,
  "toolTipDisplayTime": 600,
  "borderSize": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 20,
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "class": "ViewerArea",
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "shadow": false,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBottom": 10,
  "playbackBarBorderRadius": 4,
  "progressBorderColor": "#AAAAAA",
  "progressBarBorderRadius": 4,
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipBorderRadius": 3,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "paddingTop": 0,
  "minHeight": 50,
  "transitionDuration": 500,
  "toolTipBorderSize": 1,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressBorderRadius": 4,
  "playbackBarHeadHeight": 30,
  "progressBorderSize": 2,
  "toolTipBackgroundColor": "#F6F6F6",
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarOpacity": 1,
  "minWidth": 100,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "top": 77,
  "bottom": 92,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "progressHeight": 20,
  "progressOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressRight": 10,
  "left": 0,
  "progressBottom": 1,
  "playbackBarRight": 0,
  "right": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 2
 },
 {
  "backgroundColorRatios": [
   0
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowOpacity": 0.8,
  "layout": "vertical",
  "class": "ThumbnailList",
  "shadow": false,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelTextDecoration": "none",
  "paddingLeft": 20,
  "paddingRight": 20,
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailHeight": 70,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemPaddingBottom": 3,
  "minHeight": 0,
  "maxHeight": 800,
  "itemThumbnailShadowVerticalLength": 3,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailBorderRadius": 5,
  "itemLabelGap": 8,
  "itemPaddingRight": 3,
  "itemLabelFontFamily": "Arial",
  "paddingBottom": 10,
  "width": 158.5,
  "itemPaddingTop": 3,
  "scrollBarWidth": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarMargin": 2,
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "minWidth": 0,
  "top": "8.02%",
  "maxWidth": 800,
  "backgroundColorDirection": "vertical",
  "itemThumbnailWidth": 100,
  "itemBackgroundColor": [],
  "itemThumbnailShadow": true,
  "borderSize": 0,
  "borderRadius": 5,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "scrollBarVisible": "rollOver",
  "itemLabelFontStyle": "normal",
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowSpread": 1,
  "itemBackgroundColorRatios": [],
  "gap": 0,
  "bottom": "10.1%",
  "itemThumbnailShadowBlurRadius": 4,
  "itemLabelPosition": "bottom",
  "right": "0%"
 },
 {
  "children": [
   {
    "horizontalAlign": "center",
    "fontSize": 40,
    "paddingBottom": 0,
    "width": 374,
    "textDecoration": "none",
    "height": "100%",
    "fontFamily": "Arial",
    "class": "Label",
    "text": "Dream Silver 481F",
    "shadow": false,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "minWidth": 30,
    "fontColor": "#666666",
    "paddingRight": 0,
    "paddingLeft": 0,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "borderSize": 0,
    "minHeight": 16,
    "borderRadius": 0,
    "paddingTop": 0,
    "backgroundOpacity": 0
   },
   {
    "children": [
     {
      "toolTipFontStyle": "normal",
      "toolTipShadowVerticalLength": 0,
      "toolTipShadowBlurRadius": 3,
      "horizontalAlign": "center",
      "mode": "toggle",
      "paddingBottom": 0,
      "width": 40,
      "toolTipDisplayTime": 600,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "height": 40,
      "toolTipTextShadowBlurRadius": 3,
      "class": "IconButton",
      "toolTipPaddingBottom": 4,
      "toolTipBackgroundColor": "#F6F6F6",
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipTextShadowOpacity": 0,
      "toolTipShadowHorizontalLength": 0,
      "toolTipFontColor": "#606060",
      "shadow": false,
      "toolTipFontSize": 12,
      "transparencyActive": true,
      "minWidth": 0,
      "toolTipFontWeight": "normal",
      "cursor": "hand",
      "paddingRight": 0,
      "toolTipBorderRadius": 3,
      "toolTipBorderColor": "#767676",
      "paddingLeft": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "toolTipFontFamily": "Arial",
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "toolTipShadowOpacity": 1,
      "borderSize": 0,
      "toolTip": "Mute",
      "toolTipPaddingRight": 6,
      "minHeight": 0,
      "borderRadius": 0,
      "toolTipPaddingLeft": 6,
      "toolTipShadowSpread": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "toolTipOpacity": 1,
      "toolTipBorderSize": 1,
      "toolTipShadowColor": "#333333",
      "toolTipPaddingTop": 4,
      "toolTipTextShadowColor": "#000000"
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "children": [
       {
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0
        ],
        "paddingBottom": 0,
        "width": 47,
        "scrollBarWidth": 10,
        "height": "100%",
        "overflow": "hidden",
        "layout": "vertical",
        "class": "Container",
        "scrollBarMargin": 2,
        "shadow": false,
        "minWidth": 20,
        "paddingRight": 0,
        "paddingLeft": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "scrollBarOpacity": 0.5,
        "verticalAlign": "middle",
        "borderSize": 0,
        "scrollBarVisible": "rollOver",
        "data": {
         "name": "Container1202"
        },
        "minHeight": 20,
        "borderRadius": 0,
        "paddingTop": 0,
        "backgroundOpacity": 1,
        "contentOpaque": false,
        "scrollBarColor": "#000000",
        "creationPolicy": "inAdvance",
        "backgroundColorDirection": "vertical",
        "gap": 10
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "width": 133,
      "scrollBarWidth": 10,
      "height": "100%",
      "overflow": "hidden",
      "layout": "horizontal",
      "class": "Container",
      "scrollBarMargin": 2,
      "shadow": false,
      "minWidth": 20,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "Container1200"
      },
      "minHeight": 20,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "creationPolicy": "inAdvance",
      "backgroundColorDirection": "vertical",
      "gap": 5
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "width": 85,
      "scrollBarWidth": 10,
      "height": "100%",
      "overflow": "hidden",
      "layout": "horizontal",
      "class": "Container",
      "scrollBarMargin": 2,
      "shadow": false,
      "minWidth": 20,
      "paddingRight": 0,
      "paddingLeft": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "scrollBarOpacity": 0.5,
      "verticalAlign": "middle",
      "borderSize": 0,
      "scrollBarVisible": "rollOver",
      "data": {
       "name": "Container1206"
      },
      "minHeight": 20,
      "borderRadius": 0,
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "contentOpaque": false,
      "scrollBarColor": "#000000",
      "creationPolicy": "inAdvance",
      "backgroundColorDirection": "vertical",
      "gap": 10
     }
    ],
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "paddingBottom": 0,
    "width": 805.5,
    "scrollBarWidth": 10,
    "height": "93.478%",
    "overflow": "hidden",
    "layout": "horizontal",
    "class": "Container",
    "scrollBarMargin": 2,
    "shadow": false,
    "minWidth": 468,
    "paddingRight": 0,
    "paddingLeft": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "scrollBarOpacity": 0.5,
    "verticalAlign": "middle",
    "borderSize": 0,
    "scrollBarVisible": "rollOver",
    "data": {
     "name": "Container1194"
    },
    "minHeight": 20,
    "borderRadius": 0,
    "paddingTop": 0,
    "backgroundOpacity": 1,
    "contentOpaque": false,
    "scrollBarColor": "#000000",
    "creationPolicy": "inAdvance",
    "backgroundColorDirection": "vertical",
    "gap": 10
   },
   {
    "horizontalAlign": "left",
    "itemLabelFontFamily": "Arial",
    "selectedItemLabelFontColor": "#FFCC00",
    "itemLabelGap": 7,
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "paddingBottom": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingTop": 3,
    "height": 92,
    "width": "28.046%",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "itemThumbnailShadowOpacity": 0.54,
    "rollOverItemBackgroundOpacity": 0,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "itemOpacity": 1,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailShadowHorizontalLength": 3,
    "shadow": false,
    "itemHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "minWidth": 20,
    "itemThumbnailShadow": true,
    "paddingLeft": 20,
    "paddingRight": 20,
    "itemThumbnailHeight": 48,
    "itemThumbnailWidth": 75,
    "itemBackgroundColor": [],
    "itemThumbnailOpacity": 1,
    "borderSize": 0,
    "borderRadius": 5,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "itemBorderRadius": 0,
    "scrollBarOpacity": 0.5,
    "verticalAlign": "top",
    "minHeight": 20,
    "itemBackgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "itemLabelFontStyle": "normal",
    "itemLabelFontSize": 14,
    "itemPaddingLeft": 3,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontWeight": "normal",
    "itemBackgroundColorRatios": [],
    "data": {
     "name": "ThumbnailList35762"
    },
    "paddingTop": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "itemLabelPosition": "bottom",
    "itemThumbnailScaleMode": "fit_outside",
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "itemPaddingBottom": 3,
    "itemThumbnailBorderRadius": 5,
    "scrollBarColor": "#FFFFFF",
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowBlurRadius": 8,
    "itemBackgroundColorDirection": "vertical",
    "gap": 13
   },
   {
    "horizontalAlign": "left",
    "itemLabelFontFamily": "Arial",
    "selectedItemLabelFontColor": "#FFCC00",
    "itemLabelGap": 8,
    "itemPaddingRight": 3,
    "selectedItemLabelFontWeight": "bold",
    "paddingBottom": 10,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingTop": 3,
    "height": 82.5,
    "width": "26.327%",
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "itemThumbnailShadowOpacity": 0.57,
    "itemMode": "normal",
    "itemVerticalAlign": "middle",
    "itemOpacity": 1,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailShadowHorizontalLength": 3,
    "shadow": false,
    "itemHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "minWidth": 1,
    "itemThumbnailShadow": true,
    "visible": false,
    "paddingRight": 20,
    "itemThumbnailHeight": 75,
    "itemThumbnailWidth": 100,
    "itemBackgroundColor": [],
    "itemThumbnailOpacity": 1,
    "borderSize": 0,
    "paddingLeft": 20,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemBorderRadius": 0,
    "data": {
     "name": "ThumbnailList35762"
    },
    "verticalAlign": "top",
    "minHeight": 1,
    "borderRadius": 5,
    "scrollBarVisible": "rollOver",
    "itemLabelFontStyle": "normal",
    "scrollBarOpacity": 0.5,
    "itemPaddingLeft": 3,
    "backgroundOpacity": 0,
    "itemThumbnailShadowSpread": 1,
    "itemLabelFontWeight": "normal",
    "itemBackgroundColorRatios": [],
    "paddingTop": 10,
    "itemThumbnailShadowVerticalLength": 3,
    "itemBackgroundOpacity": 0,
    "itemLabelPosition": "bottom",
    "itemLabelFontSize": 14,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemPaddingBottom": 3,
    "itemThumbnailBorderRadius": 5,
    "scrollBarColor": "#FFFFFF",
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadowBlurRadius": 8,
    "itemThumbnailScaleMode": "fit_outside",
    "itemBackgroundColorDirection": "vertical",
    "gap": 13
   }
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "center",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "width": "100%",
  "bottom": "0%",
  "height": 92,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "class": "Container",
  "scrollBarMargin": 2,
  "shadow": false,
  "minWidth": 1,
  "paddingRight": 0,
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "data": {
   "name": "Container29432"
  },
  "minHeight": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "overflow": "scroll",
  "borderSize": 0,
  "gap": 6
 },
 {
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "width": "9.198%",
  "height": "7.604%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "class": "Image",
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "0%",
  "maxHeight": 817
 },
 {
  "horizontalAlign": "center",
  "paddingBottom": 0,
  "width": "38.151%",
  "height": "6.979%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "class": "Image",
  "scaleMode": "fit_inside",
  "shadow": false,
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "borderRadius": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "right": "8.53%",
  "maxHeight": 186
 },
 {
  "children": [
   "this.MapViewer"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "width": "28.739%",
  "scrollBarWidth": 10,
  "height": "33.75%",
  "overflow": "scroll",
  "layout": "absolute",
  "class": "Container",
  "scrollBarMargin": 2,
  "shadow": false,
  "minWidth": 1,
  "top": "1.82%",
  "paddingRight": 0,
  "paddingLeft": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "borderRadius": 0,
  "data": {
   "name": "Container24488"
  },
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "minHeight": 1,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "gap": 10
 }
], 
 "start": "this.playAudioList([this.audio_835073D3_96B2_0920_41C5_61484D4386FB, this.audio_80D03488_96B2_0F20_41B6_5C09AAB528E3]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_B2EE5BC0_9952_7921_41D1_E83FCD067DAC.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "vrPolyfillScale": 0.88,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "overflow": "visible",
 "layout": "absolute",
 "class": "Player",
 "scrollBarMargin": 2,
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } }
 },
 "shadow": false,
 "minWidth": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player28156"
 },
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "borderRadius": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "gap": 10
})