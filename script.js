(function(){
    var script = {
 "definitions": [{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0BBE9895_1E32_5C2A_41B4_01768A452226.ogg",
  "mp3Url": "media/audio_0BBE9895_1E32_5C2A_41B4_01768A452226.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0BBE9895_1E32_5C2A_41B4_01768A452226",
 "class": "MediaAudio",
 "data": {
  "label": "Restaurant"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 88.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ED42D46_1F0B_6882_41A5_8E664AAFF048",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CDE8EF5_1F0B_6986_41BC_59F9783C595B",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC16EF5_1F0B_6986_419C_A49AB9B957BE",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.91,
   "yaw": 85.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00"
  },
  {
   "backwardYaw": 75.06,
   "yaw": -73.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
 "thumbnailUrl": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_t.jpg",
 "label": "Souvenir Shop",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_11AB6BD3_21FF_7F7C_41A5_3BC8E1DF8264",
  "this.overlay_1030B0CB_21FF_096C_4193_02BB80DDB85B"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -55.13,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.78,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -27.4
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -86.19,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.66,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -30.64
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -62.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A5C6CA6_1F0B_6982_4164_FE5536562591",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044E9546_1E6E_D42D_419C_1437C252B6EB",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 48.19,
   "yaw": 16.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A"
  },
  {
   "backwardYaw": 127.34,
   "yaw": -155.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
 "thumbnailUrl": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_t.jpg",
 "label": "Locker and Changing Room",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0290164E_21C3_0964_41AA_98959C5DBCED",
  "this.overlay_0544DFC6_21C5_F764_41C0_49CBBC0ED9CF",
  "this.overlay_4CAA486F_59FC_05A4_41B6_BB838057DCC3",
  "this.overlay_4CBC323D_59FC_05A7_41A2_2CE08F59C10A",
  "this.popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C",
  "this.popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -60.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D0D2D76_1F0B_6882_41B7_4225948E9FCF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044B1546_1E6E_D42D_41B6_B2F0E1A72500",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -80.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E88FCF6_1F0B_6982_41BB_4513101DBA4A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_3FC45232_1E1E_6C65_41A7_57C413CBACD2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0505B6F5_1E12_35EF_41B8_201931EBFC75_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0505B6F5_1E12_35EF_41B8_201931EBFC75_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0505B6F5_1E12_35EF_41B8_201931EBFC75_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.51,
   "yaw": -133.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
 "thumbnailUrl": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_t.jpg",
 "label": "Entrance View  5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_31221300_204D_08DB_41A4_F1F299981C40"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -98.84,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.23,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08F061D8_1E71_EC26_419F_BD740BB927A2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_08F061D8_1E71_EC26_419F_BD740BB927A2_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -7.16
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -141.5,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.73,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -28.74
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -22.08,
   "yaw": 14.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377"
  },
  {
   "backwardYaw": 32.65,
   "yaw": 104.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
 "thumbnailUrl": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_t.jpg",
 "label": "Secondary Pool View 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3D107151_2043_0B7D_41BE_8DE8DA7F4D14",
  "this.overlay_3E39A47C_203D_092B_41B3_BC4122A219B0",
  "this.overlay_431CFD83_57CC_799D_41AE_585C104B3587",
  "this.popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_08AAB83D_1E71_FC5E_41B7_66432C68C39A.ogg",
  "mp3Url": "media/audio_08AAB83D_1E71_FC5E_41B7_66432C68C39A.mp3",
  "class": "AudioResource"
 },
 "id": "audio_08AAB83D_1E71_FC5E_41B7_66432C68C39A",
 "class": "PanoramaAudio",
 "data": {
  "label": "Banjar Hotspring"
 }
},
{
 "id": "ImageResource_044D0546_1E6E_D42D_41A3_5204117A2223",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0ABBB587_1E12_5436_4188_EB0CE08E767F_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0ABBB587_1E12_5436_4188_EB0CE08E767F_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0ABBB587_1E12_5436_4188_EB0CE08E767F_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BD63C57_1F0B_6882_41B6_652D60E9F834",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EA87D16_1F0B_6882_4185_976FFEF3BF3A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EC11D36_1F0B_6882_41A6_45973DB8EE89",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C43DE75_1F0B_6886_41A2_BD3AD3CB7030",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.01,
   "yaw": -91.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208"
  },
  {
   "backwardYaw": -87.17,
   "yaw": 96.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
 "thumbnailUrl": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_t.jpg",
 "label": "Parking Lot View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0DDA9A1E_21C5_78E4_41B6_52E741821527",
  "this.overlay_0DE9FDD4_21C7_1B64_418A_FE9AA4D1E390"
 ]
},
{
 "id": "ImageResource_0475E55A_1E6E_D425_4196_7F617EA501CC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D005D76_1F0B_6882_418C_DD1B6702D5C5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C6231A3_316E_FC14_41CC_84C78654F25B",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -145.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D90EDFB_1F0B_6B83_41B5_687B81411341",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 119.4,
   "yaw": -75.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  },
  {
   "backwardYaw": -69.79,
   "yaw": 106.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
 "thumbnailUrl": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_t.jpg",
 "label": "Entrance View  3",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30120C99_2045_19EC_41B3_E37C8761647E",
  "this.overlay_32DE9587_2043_0BE5_41A1_7F9A93F1829E"
 ]
},
{
 "id": "ImageResource_044E0546_1E6E_D42D_4161_9CB88A29B03C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -157.01,
   "yaw": 38.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3"
  },
  {
   "backwardYaw": -5.51,
   "yaw": -54.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
 "thumbnailUrl": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_t.jpg",
 "label": "Main Pool View 3",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3A544A2B_204F_192D_41B9_4B675F2083E1",
  "this.overlay_3B7025CD_204D_0B64_41BF_FE9295551BB0",
  "this.overlay_42DBCFD4_57D4_F9BB_4193_08274DBC880A",
  "this.popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 112.26,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.15,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -13.08
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC15EF5_1F0B_6986_418B_7A110EDDA920",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B633C0B_1F0B_6882_41B5_8C6337D01ECC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.44,
   "yaw": -87.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
 "thumbnailUrl": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_t.jpg",
 "label": "Parking Lot",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D7B8862_21C5_395F_41AD_4122B9B77538"
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -104.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DBB8E06_1F0B_6882_41B4_F2EF65E79D78",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CFA5BBC_1F0B_6F85_41A0_8D65CCFC97CF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -165.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C6AEE86_1F0B_6985_41A6_4A851DFDA4C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC1CEF5_1F0B_6986_418B_C4509282FC4D",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CDD9F05_1F0B_6886_41B5_DDDDEA0D57E5",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CCE7EE5_1F0B_6986_41A7_F5E7A38A8EEA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.53,
   "yaw": 120.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "backwardYaw": -162.19,
   "yaw": -149.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2"
  },
  {
   "backwardYaw": 39.14,
   "yaw": 32.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
 "thumbnailUrl": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_t.jpg",
 "label": "Pelinggih",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3494235E_2045_0F64_41C0_63E8DD68B75D",
  "this.overlay_35EA864E_2045_0964_41AB_1AC47E06F490",
  "this.overlay_3531262E_2045_0924_41B5_40FBE8112F5C",
  "this.overlay_44F8334D_57D4_0AA5_41BE_5E40BC25934C",
  "this.popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C1D8E46_1F0B_6882_41B6_56CF0C618E1E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.32,
   "yaw": -74.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C"
  },
  {
   "backwardYaw": 16.78,
   "yaw": 48.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
 "thumbnailUrl": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_t.jpg",
 "label": "Kitchen",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0275B519_21C7_08EC_41BC_0BB5A102A904",
  "this.overlay_02E48CBC_21C7_1924_41BC_CB2B469180CB"
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 84.01,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.38,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -27.35
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 1",
 "id": "panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
 "thumbnailUrl": "media/panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5"
  },
  {
   "backwardYaw": 136.54,
   "yaw": -51.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  },
  {
   "backwardYaw": 33.53,
   "yaw": 99.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
 "thumbnailUrl": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_t.jpg",
 "label": "Main Pool Stairs",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_365F9074_205D_093B_41AA_493B17FEAB40",
  "this.overlay_37DD3AB1_2043_193D_4196_C886D308E984",
  "this.overlay_38FF3D73_2045_1B3C_41B1_DFBA6AA6D99E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 116.05,
   "yaw": -93.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6"
  },
  {
   "backwardYaw": -157.62,
   "yaw": 92.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
 "thumbnailUrl": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_t.jpg",
 "label": "Stairs to Jakuzzi",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06FC6BA6_21C5_7F24_419F_77E2772C17AA",
  "this.overlay_09FB798C_21C7_1BE4_41BF_8A6063842F16"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -65.58,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.26,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.3
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.56,
   "yaw": -78.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00"
  },
  {
   "backwardYaw": -90.79,
   "yaw": 94.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
 "thumbnailUrl": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_t.jpg",
 "label": "Road to Hotspring View 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EA31A6C_21C5_3924_41BB_A21CAAB20A5D",
  "this.overlay_0E255A43_21C3_195C_41BF_F15D6DAA1583"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 14.53,
   "yaw": -22.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
 "thumbnailUrl": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_t.jpg",
 "label": "Secondary Pool View",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3F592C4F_203F_3964_4198_2A0F512A9203",
  "this.overlay_43507AD3_57CC_3BBC_4193_9AB9041DC73A",
  "this.popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.76,
   "yaw": -148.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1"
  },
  {
   "backwardYaw": 108.66,
   "yaw": -65.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599"
  },
  {
   "backwardYaw": -75.68,
   "yaw": 119.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
 "thumbnailUrl": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_t.jpg",
 "label": "Entrance View  4",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_316F9A97_2043_79E4_41BA_CE4E5EF442CF",
  "this.overlay_324636E8_204D_092B_41AE_09FF0120DBB9",
  "this.overlay_1498993A_21C7_3B2F_41B8_9AED007680D9"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0B2D3B29_1E72_7C66_41BA_7D92EFE385EE.ogg",
  "mp3Url": "media/audio_0B2D3B29_1E72_7C66_41BA_7D92EFE385EE.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0B2D3B29_1E72_7C66_41BA_7D92EFE385EE",
 "class": "MediaAudio",
 "data": {
  "label": "Welcome"
 }
},
{
 "id": "ImageResource_044FA546_1E6E_D42D_41A6_EE17A58336BA",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_0473F558_1E6E_D425_41B1_A220F79DABED",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C61F1A3_316E_FC14_41C0_42342C4F5761",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D2DED86_1F0B_6B82_4185_DB5099362530",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0999DA6B_1E72_FCFA_41B4_569928B1805D.ogg",
  "mp3Url": "media/audio_0999DA6B_1E72_FCFA_41B4_569928B1805D.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0999DA6B_1E72_FCFA_41B4_569928B1805D",
 "class": "PanoramaAudio",
 "data": {
  "label": "Welcome"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -43.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B948C2B_1F0B_6882_41B2_AEBB017AE961",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 51.76,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.45,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -35.85
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.43,
   "yaw": -89.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9"
  },
  {
   "backwardYaw": -78.36,
   "yaw": 85.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
 "thumbnailUrl": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_t.jpg",
 "label": "Road to Hotspring View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_119F0861_21FD_795C_418C_82FA1324C548",
  "this.overlay_104C262C_21FD_0924_41AE_83929F9E5BE4"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_02F351C8_1E12_6C26_41B4_A17D0B0128A0.ogg",
  "mp3Url": "media/audio_02F351C8_1E12_6C26_41B4_A17D0B0128A0.mp3",
  "class": "AudioResource"
 },
 "id": "audio_02F351C8_1E12_6C26_41B4_A17D0B0128A0",
 "class": "MediaAudio",
 "data": {
  "label": "Drone"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "ImageResource_04710546_1E6E_D42D_41A1_78AE98081E9A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DED9E26_1F0B_6882_41BC_6EA8B5D2C6DC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -115.69,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.89,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -23.93
},
{
 "easing": "cubic_in_out",
 "id": "effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 31.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BB48C48_1F0B_688E_418C_535A57B73944",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.06,
   "yaw": -162.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
 "thumbnailUrl": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_t.jpg",
 "label": "Pelinggih View  2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3514D4C6_2047_0964_4182_9857941DBE94"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -107.79,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.53,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -34.07
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -90.06,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.4,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -37.04
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C61E1A3_316E_FC14_4161_88D26C3E099E",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 76.75,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.23,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.35
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 66.12,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -53.44
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -34.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E8F0CE6_1F0B_6982_41A0_8C634EBC9AE3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMin": "120%",
 "label": "Drone View 2",
 "id": "panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
 "thumbnailUrl": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_t.jpg",
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4C7691CD_59F4_06E5_41D1_140C5C038DE8",
  "this.popup_0505B6F5_1E12_35EF_41B8_201931EBFC75"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044A2546_1E6E_D42D_41A1_BDC087AE90F7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A971757_1E11_D4D6_41B2_088DA7F64403_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0A971757_1E11_D4D6_41B2_088DA7F64403_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0A971757_1E11_D4D6_41B2_088DA7F64403_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 46.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A0B2C77_1F0B_6882_41A3_22B8A8DDD3FA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -13.51,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.89,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A971757_1E11_D4D6_41B2_088DA7F64403",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0A971757_1E11_D4D6_41B2_088DA7F64403_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -24.01
},
{
 "id": "ImageResource_0474D55C_1E6E_D4DF_416A_ECF6C4AC75A4",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08F061D8_1E71_EC26_419F_BD740BB927A2_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_08F061D8_1E71_EC26_419F_BD740BB927A2_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_08F061D8_1E71_EC26_419F_BD740BB927A2_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -155.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D89DDE6_1F0B_6B82_41B5_5BD8BFA42B5A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EBEBD26_1F0B_6882_41B2_991614031F95",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EE1FD56_1F0B_6882_418B_BBE62AEB7C9A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -131.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C61DE96_1F0B_6982_41BE_2229FA501FA1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -141.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C906EB6_1F0B_6982_41A9_01B7722090BE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_0448E546_1E6E_D42D_41AF_3E3F5E56A49D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_04498546_1E6E_D42D_41B1_3DBCFBE00FC3",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0ECA4D36_1F0B_6882_41BE_426AAFCDBA3F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -92,
   "yaw": 24.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B"
  },
  {
   "backwardYaw": -51.38,
   "yaw": 136.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F"
  },
  {
   "backwardYaw": 24.74,
   "yaw": -56.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD"
  },
  {
   "backwardYaw": 104.79,
   "yaw": 32.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
 "thumbnailUrl": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_t.jpg",
 "label": "Main Pool View 1",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_384A1827_2047_1924_41BC_1E977306D9E0",
  "this.overlay_380610F6_2043_0924_41AB_EE3CF1D701A4",
  "this.overlay_3D95F8F4_2045_3924_41BB_2E7CB4B592D1",
  "this.overlay_0E1C60FC_2E03_3BFA_41B3_5FABF5D063F4",
  "this.overlay_4464A16E_57DC_0967_418A_8BB14FB1CB72",
  "this.overlay_431C4CDC_57DC_1FA4_41C5_5E1B46A0D0EE",
  "this.popup_0A971757_1E11_D4D6_41B2_088DA7F64403",
  "this.popup_08F20622_1E12_746E_419D_EBD9B1F9F454"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CA75EC6_1F0B_6982_41B3_FDEA8A22B69D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 157.49,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.16,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.48
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -155.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C38DE66_1F0B_6885_41A4_AACE693D279B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.83,
   "yaw": -157.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8"
  },
  {
   "backwardYaw": 179.84,
   "yaw": -73.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
 "thumbnailUrl": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_t.jpg",
 "label": "Main Pool View 4",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3C3307E0_2043_F75C_41AA_3EF310792F38",
  "this.overlay_3C6BCD2F_2044_FB24_41B4_9ADE0FA8F64C",
  "this.overlay_46E87AA6_57FC_7BE7_41CB_5F1E68D61C29",
  "this.overlay_452F9AE6_57D4_1B67_41D3_80CE3BF06056",
  "this.overlay_43BE90A6_57D4_07E7_419A_3D5641FB7FD5",
  "this.popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6",
  "this.popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D",
  "this.popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -68.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DCFCE06_1F0B_6882_41B7_8EF0A0E65A5D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.07,
   "yaw": 27.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A"
  },
  {
   "backwardYaw": 157.62,
   "yaw": -69.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
 "thumbnailUrl": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_t.jpg",
 "label": "Office",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0595202E_21C5_0927_41B9_13750AE1712B",
  "this.overlay_04E6CAD5_21DF_7964_41B9_068AFF60DD7A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 137.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B757C1B_1F0B_6882_41B5_371714873E31",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044C1546_1E6E_D42D_41B3_85D4B82BD4FC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D4CDDA6_1F0B_6B82_41BD_58EC29230CB3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 22.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D409DB6_1F0B_6B82_41B2_67ED1A9B8E04",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D574DB6_1F0B_6B82_41B1_5238DB56E94D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_04736558_1E6E_D425_418E_C80A28709CCC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D397DA6_1F0B_6B82_41BC_50C4EA2C2C2B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B311BFB_1F0B_6F82_41BB_3485553D9A20",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DD6FE26_1F0B_6882_4181_38F60B9A0A2C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -2.07,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.94,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -22.25
},
{
 "items": [
  {
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_0CC29EE5_1F0B_6986_41B5_5896A0F5298D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_0CC2DEE5_1F0B_6986_41A1_ABCC4FA74F25, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_0CC34EE5_1F0B_6986_41AA_3A5603AAF813, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.mainPlayList, 33, 34); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592562D9_4F5F_9C05_41BC_80B57D556509, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925F2D9_4F5F_9C05_41A6_F61449698672, 'hideEffect', false)",
   "camera": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61, 'hideEffect', false)",
   "camera": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
   "end": "this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_2C6211A3_316E_FC14_41B8_E61760C15732, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5, 'showEffect', false)",
   "camera": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61F1A3_316E_FC14_41C0_42342C4F5761, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61E1A3_316E_FC14_4161_88D26C3E099E, 'showEffect', false)",
   "camera": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0)",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -75.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C4F8E75_1F0B_6886_4199_00D174B896CC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -52.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C751E96_1F0B_6982_4165_954D0EE78A3E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 15.64,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0505B6F5_1E12_35EF_41B8_201931EBFC75",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0505B6F5_1E12_35EF_41B8_201931EBFC75_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -15.84
},
{
 "id": "ImageResource_0471A556_1E6E_D42D_41A8_6B452DD3BB2B",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_0CC16EF5_1F0B_6986_419C_A49AB9B957BE, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_0CDE8EF5_1F0B_6986_41BC_59F9783C595B, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "camera": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "camera": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "camera": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "camera": "this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "camera": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "camera": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "camera": "this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "camera": "this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "camera": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 15)",
   "camera": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 15, 16)",
   "camera": "this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 16, 17)",
   "camera": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 17, 18)",
   "camera": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 18, 19)",
   "camera": "this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 19, 20)",
   "camera": "this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 20, 21)",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 21, 22)",
   "camera": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 22, 23)",
   "camera": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 23, 24)",
   "camera": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 24, 25)",
   "camera": "this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 25, 26)",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 26, 27)",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 27, 28)",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 28, 29)",
   "camera": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 29, 30)",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 30, 31)",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 31, 32)",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 32, 33)",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_0CDD9F05_1F0B_6886_41B5_DDDDEA0D57E5, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 33, 34); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 34, 35); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 35, 36); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592562D9_4F5F_9C05_41BC_80B57D556509, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5925F2D9_4F5F_9C05_41A6_F61449698672, 'hideEffect', false)",
   "camera": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592352D9_4F5F_9C05_41BF_3AF45D02E85D, 'hideEffect', false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 36, 37); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_592372D9_4F5F_9C05_41C8_9006F18D6A5D, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_5923F2DA_4F5F_9C07_41A9_D2BD4BDD4F61, 'hideEffect', false)",
   "camera": "this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9",
   "end": "this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_2C6211A3_316E_FC14_41B8_E61760C15732, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 37, 38); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5, 'showEffect', false)",
   "camera": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 38, 39); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61F1A3_316E_FC14_41C0_42342C4F5761, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 39, 40); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61E1A3_316E_FC14_4161_88D26C3E099E, 'showEffect', false)",
   "camera": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 40, 41)",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 41, 42)",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 42, 43)",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 43, 0)",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 110.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0CB8BEC6_1F0B_6982_4188_0E2EB97763EF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -141.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D9F6DE6_1F0B_6B82_41A2_2F7F6F217E77",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044E8546_1E6E_D42D_41A5_0244F01CA635",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044DE546_1E6E_D42D_41B6_BE75D28309C2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BE9DC67_1F0B_6882_41B0_20954F211822",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -65.23,
   "yaw": 108.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925"
  },
  {
   "backwardYaw": -174.77,
   "yaw": 25.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4341122_DE42_95B0_41E2_776E16E3A599",
 "thumbnailUrl": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_t.jpg",
 "label": "Main Area View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34D860D8_204F_096C_4168_4A660CA7699C",
  "this.overlay_34D839D9_204D_1B6D_41C0_679893BB4D26"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 22.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E957D06_1F0B_6882_4183_A9D0177EC0F0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -69.69,
   "yaw": 157.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C"
  },
  {
   "backwardYaw": 126.64,
   "yaw": -4.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D414C304_DE46_9570_41E8_C12BB201207D",
 "thumbnailUrl": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_t.jpg",
 "label": "Bridge View to Jacuzi and Spa",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_08FC0D31_21DD_FB3D_41A6_748ADDF328FD",
  "this.overlay_04A60F3E_21DF_1727_41BB_9F7357F4831B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.38,
   "yaw": -2.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "backwardYaw": 34.74,
   "yaw": -154.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D413AA81_DE41_F770_41E4_D256127F3328",
 "thumbnailUrl": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_t.jpg",
 "label": "Restaurant",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_01C5BA36_21C3_1924_4141_2A1C86F3F090",
  "this.overlay_01FF6714_21CF_08E4_4194_CF2EFDD1FFAC",
  "this.overlay_4C548976_59CC_07A7_41D5_C19BC12B1B54",
  "this.popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B2E6BEB_1F0B_6F82_41B6_450AFC4883AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "camera": "this.panorama_08E67F30_2E01_060C_41BC_A64F9F90DDC7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "camera": "this.panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "camera": "this.panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 0)",
   "camera": "this.panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 4",
 "id": "panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E",
 "thumbnailUrl": "media/panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "hfovMax": 130,
 "hfovMin": "120%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Drone View 3",
 "id": "panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72",
 "thumbnailUrl": "media/panorama_0BD84076_2E3E_FAF4_41A6_00BA4C827C72_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 111.11,
   "yaw": -59.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B"
  },
  {
   "backwardYaw": -109,
   "yaw": 140.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
 "thumbnailUrl": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_t.jpg",
 "label": "Entrance",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2FC651CC_205F_0B64_41B6_94A1A42EB03B",
  "this.overlay_124250F9_21C5_092C_41BB_278B80E3CD00"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C568E86_1F0B_6985_4184_FCDA47C4ED55",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.69,
   "yaw": 116.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508"
  },
  {
   "backwardYaw": -74.23,
   "yaw": -109.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
 "thumbnailUrl": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_t.jpg",
 "label": "The Jakuzzi",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_085B0A2F_21CD_1924_41A1_17329E4EC9C1",
  "this.overlay_0B76FC2A_21CF_192F_41BF_4CB9EBF1A05C",
  "this.overlay_4D8C9758_59F4_0BEC_41C0_AB80AAF1E278",
  "this.popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0B80619B_1E32_2C5E_41A2_01AE80261CEB.ogg",
  "mp3Url": "media/audio_0B80619B_1E32_2C5E_41A2_01AE80261CEB.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0B80619B_1E32_2C5E_41A2_01AE80261CEB",
 "class": "MediaAudio",
 "data": {
  "label": "Changing Area"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -109.24,
   "yaw": -74.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
 "thumbnailUrl": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_t.jpg",
 "label": "The Jakuzzi View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B3069FF_21CC_FB25_41BB_1C0129DBB963",
  "this.overlay_4DBA1CDD_59F4_3EE5_41C6_15EAD640AC4A",
  "this.popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -72.51,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.25,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.09
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 104.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A2B3C87_1F0B_6982_419B_1986D33449C2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_592542D9_4F5F_9C05_41BD_0B98C3AE86D2",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -63.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E9D1D06_1F0B_6882_4189_2F1FAD19D170",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -19.28,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.16,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_234730B3_3121_9FA2_41A3_51297DD76840",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_1.jpg",
    "width": 726,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -15
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 70.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D16CD86_1F0B_6B82_41BB_DA15EF275CF7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C086E46_1F0B_6882_41AE_FEC827649D9E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_592562D9_4F5F_9C05_41BC_80B57D556509",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC29EE5_1F0B_6986_41B5_5896A0F5298D",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C276E5F_1F0B_6882_41A9_5BD0001BE9E9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C9C0EB6_1F0B_6982_41BB_FA39158A20A7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -91.02,
   "yaw": 91.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0"
  },
  {
   "backwardYaw": 94.17,
   "yaw": -90.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4296C53_DE46_9390_41E4_B6F280630208",
 "thumbnailUrl": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_t.jpg",
 "label": "Locket",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0CBDA83C_21C7_7924_4190_F2C9B6B73D54",
  "this.overlay_0E5C4E8C_21C5_19E4_41AC_A6C0CDEDEAB9",
  "this.overlay_3F1FDCC9_30E1_87EF_41B9_EE513C912C95",
  "this.popup_234730B3_3121_9FA2_41A3_51297DD76840"
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_5925F2D9_4F5F_9C05_41A6_F61449698672",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -73.69,
   "yaw": 179.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3"
  },
  {
   "backwardYaw": -56.29,
   "yaw": 24.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD",
 "thumbnailUrl": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_t.jpg",
 "label": "Main Pool View 5",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3CAD5E04_2045_78E4_41B2_0B8F0BCE57B2",
  "this.overlay_3DB395EE_2047_0B24_41B1_4F90FE1495BF",
  "this.overlay_470D5FAE_57FC_19E7_41D0_B26170E0084D",
  "this.overlay_42C5B39B_57D4_09AD_41D2_B27564515B55",
  "this.overlay_439F0433_57D4_0EFC_41C3_751893D30A9C",
  "this.popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093",
  "this.popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90",
  "this.popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5"
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_5925C2D9_4F5F_9C05_41C4_1D9666B9CCB8",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 32.79,
   "yaw": 39.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D40CA977_DE42_9590_41D0_061899CF6AED",
 "thumbnailUrl": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_t.jpg",
 "label": "Pelinggih View  3",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_36CD586A_2047_192C_41B8_B9D9015D1232",
  "this.overlay_43F2D668_57DC_0B6B_4199_0CD455B40638",
  "this.popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3"
 ]
},
{
 "id": "ImageResource_20AE00CD_3121_9FE6_41C0_CF097421C5DC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_0.jpg",
   "width": 1240,
   "class": "ImageResourceLevel",
   "height": 1748
  },
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_1.jpg",
   "width": 726,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_234730B3_3121_9FA2_41A3_51297DD76840_0_2.jpg",
   "width": 363,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C6201A3_316E_FC14_41CE_3E0B7D23A0C5",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B.ogg",
  "mp3Url": "media/audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B",
 "class": "MediaAudio",
 "data": {
  "label": "Second Pool"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 125.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D75BDD6_1F0B_6B82_41B9_5F112F23BA76",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 120.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B535C0B_1F0B_6882_41BA_4E452959B4B5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0B430E31_1E76_3466_41B8_798663F0E143.ogg",
  "mp3Url": "media/audio_0B430E31_1E76_3466_41B8_798663F0E143.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0B430E31_1E76_3466_41B8_798663F0E143",
 "class": "MediaAudio",
 "data": {
  "label": "Jacuzzi"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -74.59,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.71,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_08F20622_1E12_746E_419D_EBD9B1F9F454",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_08F20622_1E12_746E_419D_EBD9B1F9F454_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -29.52
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC2DEE5_1F0B_6986_41A1_ABCC4FA74F25",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C132E59_1F0B_688E_41B1_5E5C71496DEF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D413AA81_DE41_F770_41E4_D256127F3328_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -146.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BA4FC41_1F0B_68FE_41B6_37189653571F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 140.4,
   "yaw": -109,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C"
  },
  {
   "backwardYaw": -73.89,
   "yaw": 75.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9"
  },
  {
   "backwardYaw": 103.46,
   "yaw": -80.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799"
  }
 ],
 "hfovMin": "135%",
 "audios": [
  "this.audio_0999DA6B_1E72_FCFA_41B4_569928B1805D"
 ],
 "hfov": 360,
 "label": "Hotspring Gate",
 "id": "panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
 "thumbnailUrl": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1306F3DB_21FD_0F6C_41B2_63B4B1614A0E",
  "this.overlay_138FC3B3_21FD_0F3C_41B7_CA0D5402039F",
  "this.overlay_126F495C_21C4_FB64_41BF_E8527C52A677",
  "this.overlay_0B4E3D9C_1E71_D45F_41B3_8C75E6AA143E",
  "this.popup_08F061D8_1E71_EC26_419F_BD740BB927A2"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0D09FFEF_1E16_D3F5_41AE_5B0A0A636A7F.ogg",
  "mp3Url": "media/audio_0D09FFEF_1E16_D3F5_41AE_5B0A0A636A7F.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0D09FFEF_1E16_D3F5_41AE_5B0A0A636A7F",
 "class": "MediaAudio",
 "data": {
  "label": "Pelinggih"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0AF73359_1E2E_2CDD_41B7_0AE09DF35BC3.ogg",
  "mp3Url": "media/audio_0AF73359_1E2E_2CDD_41B7_0AE09DF35BC3.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0AF73359_1E2E_2CDD_41B7_0AE09DF35BC3",
 "class": "MediaAudio",
 "data": {
  "label": "Dragon"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -154.58,
   "yaw": 34.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328"
  },
  {
   "backwardYaw": -155.38,
   "yaw": 127.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB",
 "thumbnailUrl": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_t.jpg",
 "label": "Security Post",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_032BEAD8_21CF_396C_41A1_B3BA75F76CCE",
  "this.overlay_0282E82B_21CD_392C_41B6_108A08846FAE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -163.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EF62D66_1F0B_6882_41B7_DFCF862258BD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.18,
   "yaw": 103.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4154425_DE46_73B3_41E3_24B4CB004799",
 "thumbnailUrl": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_t.jpg",
 "label": "Hotspring From Ouside View",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_135577A5_21C3_1724_41A3_354120217681"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 24.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BF9DC6A_1F0B_6882_41B1_53BFDDF43F6C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC13EF5_1F0B_6986_41B8_FBDAAFF18463",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B0DFBCB_1F0B_6F82_41B0_7FFDE409BC62",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164.ogg",
  "mp3Url": "media/audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164.mp3",
  "class": "AudioResource"
 },
 "id": "audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164",
 "class": "MediaAudio",
 "data": {
  "label": "Main Pool"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B856C2B_1F0B_6882_41B6_176199A5B474",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "camera": "this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "camera": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "camera": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "camera": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "camera": "this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "camera": "this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 0)",
   "camera": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 117.98,
   "yaw": -77.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4332189_DE42_B570_41DA_7335441D6620"
  },
  {
   "backwardYaw": 145.34,
   "yaw": 91.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5"
  },
  {
   "backwardYaw": 99.21,
   "yaw": 33.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F"
  },
  {
   "backwardYaw": 25.78,
   "yaw": -174.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599"
  }
 ],
 "hfovMin": "135%",
 "audios": [
  "this.audio_08AAB83D_1E71_FC5E_41B7_66432C68C39A"
 ],
 "hfov": 360,
 "label": "Main Area",
 "id": "panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
 "thumbnailUrl": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34DA4C00_2045_18DB_41B0_465B481DF208",
  "this.overlay_334DA1E7_204F_0B24_41B4_612FAA3C2C6D",
  "this.overlay_3647FACE_205D_3964_4188_3898980AFE33",
  "this.overlay_37692CA9_2043_192D_41BF_9E43653448F4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -85.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EEA9D56_1F0B_6882_41BD_9AA1E34527A2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -42.66,
   "yaw": 60.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0",
 "thumbnailUrl": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_t.jpg",
 "label": "Back Gate",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A12A2D6_21C3_0964_41B7_831A46539169"
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -54.59,
   "yaw": -5.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8"
  },
  {
   "backwardYaw": 24.43,
   "yaw": -92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B",
 "thumbnailUrl": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_t.jpg",
 "label": "Main Pool View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3ABD52E6_2043_0924_41B2_332D09683BD5",
  "this.overlay_3BDEF27F_204F_0924_41AD_F18625CBA26D",
  "this.overlay_43964DD8_57D4_39AB_41C4_902A932FB06E",
  "this.overlay_42FA906D_57D4_0765_41D2_5308C9ED054F",
  "this.popup_0ABBB587_1E12_5436_4188_EB0CE08E767F",
  "this.popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D7ECDD6_1F0B_6B82_41A2_AA878E4E5961",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.94,
   "yaw": -42.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF"
  },
  {
   "backwardYaw": 92.61,
   "yaw": -157.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508"
  },
  {
   "backwardYaw": -4.37,
   "yaw": 126.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D414C304_DE46_9570_41E8_C12BB201207D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4",
 "thumbnailUrl": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_t.jpg",
 "label": "Jakuzzi and Spa Intersection",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_07B25F7C_21DD_1724_4174_153423197FB4",
  "this.overlay_06113723_21C3_08DC_41B9_9E54DAB03D79",
  "this.overlay_06B606A7_21C5_0924_41BF_805477E35F89",
  "this.overlay_0AC75EBA_21CD_392C_41A3_E474B7B1A2BF"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61E19C_316E_FC2C_41B5_2B0B60DB123C, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C61D19B_316E_FC34_41A9_5EB20EAAAD74, 'showEffect', false)",
   "camera": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "camera": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "camera": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "camera": "this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "camera": "this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 0); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -59.14,
   "yaw": 111.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C"
  },
  {
   "backwardYaw": 106.52,
   "yaw": -69.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B",
 "thumbnailUrl": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_t.jpg",
 "label": "Entrance View 2",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2F3CA3A6_2043_0F27_41BF_410F7F35504C",
  "this.overlay_304C69A8_2047_3B2C_419C_082DE4DF495C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DC2AE16_1F0B_6882_41AB_CBD8FB900254",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -46.52,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.56,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -33.23
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -119.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DE1FE36_1F0B_6882_41B2_B5E79ABBF10E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044C9546_1E6E_D42D_41B9_F9E7FCE69FC4",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 157.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0BC62C48_1F0B_688E_4186_344E1894D6A8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -71.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A1B1C77_1F0B_6882_41B9_88C5AD32B7B9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C62319B_316E_FC34_41C2_4469B1E05F86",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0E825CF6_1F0B_6982_41B4_0061EFEF10CE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_0470D556_1E6E_D42D_41B7_ECD9D53D3C66",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 17.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D222D96_1F0B_6B82_41AC_4F662C734677",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_044E3546_1E6E_D42D_41B4_89059C55E1CF",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DF2AE36_1F0B_6882_41B6_5C87A59EE0DD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0DA4CDFB_1F0B_6B83_41B6_1B076E45A9F8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_592622D9_4F5F_9C05_41B2_338DC5475EF6",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "id": "ImageResource_0475055A_1E6E_D425_41B9_6861D3A144E1",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "id": "ImageResource_044A9546_1E6E_D42D_41BC_69D06113404E",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_08F20622_1E12_746E_419D_EBD9B1F9F454_0_0.jpg",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 1350
  },
  {
   "url": "media/popup_08F20622_1E12_746E_419D_EBD9B1F9F454_0_1.jpg",
   "width": 819,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_08F20622_1E12_746E_419D_EBD9B1F9F454_0_2.jpg",
   "width": 409,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E",
 "class": "FadeInEffect",
 "duration": 1000
},
{
 "items": [
  {
   "media": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35",
   "end": "if(this.existsKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')){ if(this.getKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5')) { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_0CC1CEF5_1F0B_6986_418B_C4509282FC4D, 'showEffect', false); } else { this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5'); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C62319B_316E_FC34_41C2_4469B1E05F86, 'hideEffect', false); if(this.existsKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')){ if(this.getKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')) { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true, -1, this.effect_0CC13EF5_1F0B_6986_41B8_FBDAAFF18463, 'showEffect', false); } else { this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B')",
   "begin": "this.registerKey('visibility_Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B', this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.get('visible')); this.registerKey('visibility_Image_221569DE_31E7_81E5_41A8_23A4FDD627F5', this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.get('visible')); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6, 'hideEffect', false); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C62219B_316E_FC34_41B5_9BEEF6F2FC8E, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592F42D5_4F5F_9C0D_41C4_EACD03ACDB84, 'hideEffect', false)",
   "camera": "this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0",
   "end": "if(this.existsKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')){ if(this.getKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')) { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false); } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_0CC15EF5_1F0B_6986_418B_7A110EDDA920, 'hideEffect', false); } }; this.unregisterKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF')",
   "begin": "this.registerKey('visibility_Image_22232A2E_31FE_82A2_41C1_234D93435EAF', this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')); this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_434916D0_59CC_0AF7_41C9_4C6D1A78CFEF, 'showEffect', false)",
   "camera": "this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208",
   "end": "this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, -1, this.effect_2C60C1A2_316E_FC14_41C6_F6BFAAF471B7, 'hideEffect', false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592612D9_4F5F_9C05_41B0_605F8A9F51E4, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3); this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false); this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, -1, this.effect_2C6131A2_316E_FC14_41B9_3BA3D4FF2143, 'showEffect', false); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false); this.setComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, false, -1, this.effect_592622D9_4F5F_9C05_41B2_338DC5475EF6, 'hideEffect', false)",
   "camera": "this.panorama_D4296C53_DE46_9390_41E4_B6F280630208_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true); this.keepComponentVisibility(this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B, true)",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72",
   "end": "this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false, -1, this.effect_2C61C1A3_316E_FC14_419A_7EC22564D0AF, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 0); this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, false); this.setComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true, -1, this.effect_2C6231A3_316E_FC14_41CC_84C78654F25B, 'showEffect', false)",
   "camera": "this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5, true)",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "class": "PlayList"
},
{
 "easing": "cubic_in_out",
 "id": "effect_5923D2DA_4F5F_9C07_41C0_DCAE4DE5B3CE",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 114.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0D6ACDC6_1F0B_6B82_41B3_11E17836FC94",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_D40CA977_DE42_9590_41D0_061899CF6AED_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B41FC06_1F0B_6882_4193_62024DA12CE5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0BF6B8F2_2E3F_0A0D_41B7_20831C46EA0E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.49,
   "yaw": 145.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D439F1B7_DE42_7490_4192_B464C382F8D5",
 "thumbnailUrl": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_t.jpg",
 "label": "Pool View From Above",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_37005C7B_205F_192C_41C0_594EF5139986",
  "this.overlay_43DD0D02_57DC_1E9F_41D5_48D8B0BBE855",
  "this.popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "135%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Dry Jacuzi",
 "id": "panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF",
 "thumbnailUrl": "media/panorama_D414D3E6_DE46_B4B0_41E1_9303012896FF_t.jpg",
 "partial": false,
 "pitch": 0,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A3A8C87_1F0B_6982_41B2_F5BDFA31B6A7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 102.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B1F3BDB_1F0B_6F82_415B_29FF844EA144",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -34.37,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.39,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -19.82
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -97.98,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.25,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -40.68
},
{
 "easing": "cubic_in_out",
 "id": "effect_0CC34EE5_1F0B_6986_41AA_3A5603AAF813",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0A4ACC97_1F0B_6983_41AC_B80DECFA4745",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -88.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0C869EA6_1F0B_6982_41AE_84A63D432C71",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_5931A2D4_4F5F_9C03_41B9_63D3786C61C6",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 120.23,
   "yaw": -73.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758"
  },
  {
   "backwardYaw": -2.25,
   "yaw": 38.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D413AA81_DE41_F770_41E4_D256127F3328"
  },
  {
   "backwardYaw": -77.42,
   "yaw": 117.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_D4332189_DE42_B570_41DA_7335441D6620",
 "thumbnailUrl": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_t.jpg",
 "label": "Main Area View  3",
 "pitch": 0,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34D5401F_204D_08E4_41BD_EA7488B1C803",
  "this.overlay_347CACD1_2043_397C_41B2_CD491F42711A",
  "this.overlay_0162DAFD_21C5_3924_41AE_E2FEF2F7BD9D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -39.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0EB5CD26_1F0B_6882_41B0_7C8B14019F05",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 101.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0B210BEB_1F0B_6F82_41A1_A2E4AE56E5BF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "easing": "cubic_in_out",
 "id": "effect_2C6211A3_316E_FC14_41B8_E61760C15732",
 "class": "FadeOutEffect",
 "duration": 1000
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -40.84,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.89,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_0ABBB587_1E12_5436_4188_EB0CE08E767F",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_0ABBB587_1E12_5436_4188_EB0CE08E767F_0_1.jpg",
    "width": 819,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -24.11
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#F7931E",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#F7931E",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#F7931E",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F7931E",
 "toolTipFontColor": "#F7931E",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "--BUTTON SET"
 },
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": "0%",
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "top": 0,
 "height": 60,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0.02
 ],
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0"
 ],
 "layout": "vertical",
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 15,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "top": 62,
 "height": 72,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18",
  "this.IconButton_11C1AFD0_1E11_D3F6_41B7_36550307B36C",
  "this.IconButton_11C15FD0_1E11_D3F6_41BA_BAEB6D6193AA",
  "this.IconButton_11C14FD0_1E11_D3F6_41B4_79A5EA0A912A"
 ],
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_11C17FD0_1E11_D3F6_41B8_85164D7DE6ED",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "shadow": false,
 "borderSize": 0,
 "right": "40%",
 "minWidth": 1,
 "width": "18.917%",
 "bottom": "0%",
 "contentOpaque": false,
 "paddingRight": 30,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": "13.025%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "Image_221569DE_31E7_81E5_41A8_23A4FDD627F5",
 "left": "8%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "25%",
 "shadow": false,
 "borderSize": 0,
 "url": "skin/Image_221569DE_31E7_81E5_41A8_23A4FDD627F5.jpg",
 "minWidth": 1,
 "maxWidth": 920,
 "maxHeight": 1300,
 "bottom": "20%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "60%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "GATE"
 }
},
{
 "id": "Image_22232A2E_31FE_82A2_41C1_234D93435EAF",
 "left": "8%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "67%",
 "url": "skin/Image_22232A2E_31FE_82A2_41C1_234D93435EAF.jpg",
 "minWidth": 1,
 "maxWidth": 922,
 "maxHeight": 1300,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "PARKIRAN"
 }
},
{
 "id": "Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B",
 "left": "8%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "shadow": false,
 "borderSize": 0,
 "right": "67%",
 "url": "skin/Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B.jpg",
 "minWidth": 1,
 "maxWidth": 922,
 "maxHeight": 1300,
 "bottom": "20%",
 "verticalAlign": "middle",
 "top": "20%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "SHOP"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent4912"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage4913"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton4914"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "top": 10,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "width": 40,
 "id": "IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18.png",
 "maxHeight": 101,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18_rollover.png",
 "pressedIconURL": "skin/IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button34604"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00, this.camera_0DA4CDFB_1F0B_6B83_41B6_1B076E45A9F8); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.39,
   "image": "this.AnimatedImageResource_1CFF5CA7_21CF_1924_419A_A00A7FB32B18",
   "pitch": -4.37,
   "yaw": 85.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_11AB6BD3_21FF_7F7C_41A5_3BC8E1DF8264",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.39,
   "yaw": 85.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_0DBB8E06_1F0B_6882_41B4_F2EF65E79D78); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.4,
   "image": "this.AnimatedImageResource_1CFCDCA8_21CF_192C_4195_78D0EF226F42",
   "pitch": -6.63,
   "yaw": -73.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1030B0CB_21FF_096C_4193_02BB80DDB85B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.4,
   "yaw": -73.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB, this.camera_0C751E96_1F0B_6982_4165_954D0EE78A3E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.72,
   "image": "this.AnimatedImageResource_1CE9FC96_21CF_19E4_41A3_578E85DAFA0C",
   "pitch": -15.58,
   "yaw": -155.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0290164E_21C3_0964_41AA_98959C5DBCED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.72,
   "yaw": -155.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A, this.camera_0C61DE96_1F0B_6982_41BE_2229FA501FA1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.06,
   "image": "this.AnimatedImageResource_1CE96C9C_21CF_19E4_4190_7B275B698D8F",
   "pitch": -1.39,
   "yaw": 16.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0544DFC6_21C5_F764_41C0_49CBBC0ED9CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.06,
   "yaw": 16.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0BEA7C44_1E32_342A_41B7_B898597D1F1C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_04736558_1E6E_D425_418E_C80A28709CCC, null, null, null, this.audio_0B80619B_1E32_2C5E_41A2_01AE80261CEB, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_4D9C8463_59D4_0DDD_4168_D1506A2E6E95",
   "pitch": 0.3,
   "yaw": -65.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4CAA486F_59FC_05A4_41B6_BB838057DCC3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.32,
   "yaw": -65.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B59DD74_1E32_F4E9_41AF_DF9EAA2738CC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0473F558_1E6E_D425_41B1_A220F79DABED, null, null, null, this.audio_0B80619B_1E32_2C5E_41A2_01AE80261CEB, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.19,
   "image": "this.AnimatedImageResource_4D9D6463_59D4_0DDD_41C0_8B63BF08560B",
   "pitch": -13.08,
   "yaw": 112.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4CBC323D_59FC_05A7_41A2_2CE08F59C10A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.19,
   "yaw": 112.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_0BB48C48_1F0B_688E_418C_535A57B73944); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_1CE3DC88_21CF_19EC_4197_AB5F3F8142A8",
   "pitch": -21.68,
   "yaw": -133.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31221300_204D_08DB_41A4_F1F299981C40",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -133.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_0BD63C57_1F0B_6882_41B6_652D60E9F834); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.85,
   "image": "this.AnimatedImageResource_1CE8DC95_21CF_19E4_419D_FD8986F1F410",
   "pitch": -1.91,
   "yaw": 104.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D107151_2043_0B7D_41BE_8DE8DA7F4D14",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.85,
   "yaw": 104.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4293268_DE41_F7B0_41E4_7626A6300377, this.camera_0BC62C48_1F0B_688E_4186_344E1894D6A8); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.93,
   "image": "this.AnimatedImageResource_1CE83C95_21CF_19E4_41B9_7490D25006C7",
   "pitch": -17.31,
   "yaw": 14.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3E39A47C_203D_092B_41B3_BC4122A219B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.93,
   "yaw": 14.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0BA3CB9A_1E31_FC5E_418C_ADDC9954816D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_04710546_1E6E_D42D_41A1_78AE98081E9A, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.32,
   "image": "this.AnimatedImageResource_4D99C462_59D4_0DDF_41BB_443D9703E7D9",
   "pitch": -35.85,
   "yaw": 51.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_431CFD83_57CC_799D_41AE_585C104B3587",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.32,
   "yaw": 51.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35, this.camera_0C9C0EB6_1F0B_6982_41BB_FA39158A20A7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.57,
   "image": "this.AnimatedImageResource_1CF10CA1_21CF_19DD_419B_3CDE586A0428",
   "pitch": -6.89,
   "yaw": 96.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DDA9A1E_21C5_78E4_41B6_52E741821527",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.57,
   "yaw": 96.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4296C53_DE46_9390_41E4_B6F280630208, this.camera_0C869EA6_1F0B_6982_41AE_84A63D432C71); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.68,
   "image": "this.AnimatedImageResource_1CFE9CA6_21CF_1924_41B9_4EFE11690644",
   "pitch": -7.22,
   "yaw": -91.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DE9FDD4_21C7_1B64_418A_FE9AA4D1E390",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.68,
   "yaw": -91.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B, this.camera_0D005D76_1F0B_6882_418C_DD1B6702D5C5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.77,
   "image": "this.AnimatedImageResource_1CE2AC87_21CF_19E4_41AE_C3A899E56405",
   "pitch": -17.94,
   "yaw": 106.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30120C99_2045_19EC_41B3_E37C8761647E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.77,
   "yaw": 106.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_0D0D2D76_1F0B_6882_41B7_4225948E9FCF); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.54,
   "image": "this.AnimatedImageResource_1CE2EC87_21CF_19E4_416F_D1003783A1C7",
   "pitch": 3.82,
   "yaw": -75.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32DE9587_2043_0BE5_41A1_7F9A93F1829E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -75.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B, this.camera_0D574DB6_1F0B_6B82_41B1_5238DB56E94D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.93,
   "image": "this.AnimatedImageResource_1CEA8C94_21CF_19E4_41B0_C156DE03E9F8",
   "pitch": -9.59,
   "yaw": -54.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A544A2B_204F_192D_41B9_4B675F2083E1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.93,
   "yaw": -54.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3, this.camera_0D409DB6_1F0B_6B82_41B2_67ED1A9B8E04); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.8,
   "image": "this.AnimatedImageResource_1CEAFC94_21CF_19E4_41B9_70077AD52FE3",
   "pitch": -5.01,
   "yaw": 38.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B7025CD_204D_0B64_41BF_FE9295551BB0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.8,
   "yaw": 38.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0AEF8E9F_1E12_D455_41B7_225B21AB01B7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044C1546_1E6E_D42D_41B3_85D4B82BD4FC, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.93,
   "image": "this.AnimatedImageResource_4D950460_59D4_0DDB_41B7_9F93C3FFA7BE",
   "pitch": -22.25,
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42DBCFD4_57D4_F9BB_4193_08274DBC880A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.93,
   "yaw": -2.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0, this.camera_0C1D8E46_1F0B_6882_41B6_56CF0C618E1E); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.73,
   "image": "this.AnimatedImageResource_1CF1ACA0_21CF_19DB_41BB_09F6D390CE06",
   "pitch": -4.82,
   "yaw": -87.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D7B8862_21C5_395F_41AD_4122B9B77538",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.73,
   "yaw": -87.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_0D2DED86_1F0B_6B82_4185_DB5099362530); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.77,
   "image": "this.AnimatedImageResource_1CEE5C8B_21CF_19E3_4199_768AC3CCA6A9",
   "pitch": -34.05,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3494235E_2045_0F64_41C0_63E8DD68B75D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.77,
   "yaw": 120.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2, this.camera_0D222D96_1F0B_6B82_41AC_4F662C734677); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.65,
   "image": "this.AnimatedImageResource_1CEF9C8D_21CF_19E5_41B0_D6D8F21F2DEB",
   "pitch": -14.75,
   "yaw": -149.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35EA864E_2045_0964_41AB_1AC47E06F490",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.65,
   "yaw": -149.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA977_DE42_9590_41D0_061899CF6AED, this.camera_0D397DA6_1F0B_6B82_41BC_50C4EA2C2C2B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.61,
   "image": "this.AnimatedImageResource_1CEFFC8D_21CF_19E5_4189_8ED1D6586C37",
   "pitch": -14.56,
   "yaw": 32.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3531262E_2045_0924_41B5_40FBE8112F5C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.61,
   "yaw": 32.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0D80C7AF_1E16_3475_41B9_C0DC08C82B38, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_04498546_1E6E_D42D_41B1_3DBCFBE00FC3, null, null, null, this.audio_0D09FFEF_1E16_D3F5_41AE_5B0A0A636A7F, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_4DAE845E_59D4_0DE6_41B3_EC764217A621",
   "pitch": 3.09,
   "yaw": -72.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_44F8334D_57D4_0AA5_41BE_5E40BC25934C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.32,
   "yaw": -72.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE, this.camera_0EF62D66_1F0B_6882_41B7_DFCF862258BD); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.69,
   "image": "this.AnimatedImageResource_1CF6DC9C_21CF_19E4_41BE_5C8FD2D7FEA1",
   "pitch": -24.76,
   "yaw": 48.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0275B519_21C7_08EC_41BC_0BB5A102A904",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.69,
   "yaw": 48.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C, this.camera_0EE1FD56_1F0B_6882_418B_BBE62AEB7C9A); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.93,
   "image": "this.AnimatedImageResource_1CF63C9C_21CF_19E4_4195_B2F919D59D24",
   "pitch": -11.26,
   "yaw": -74.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_02E48CBC_21C7_1924_41BC_CB2B469180CB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.93,
   "yaw": -74.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_1CEFCC8E_21CF_19E7_419F_2855C9B00931",
   "pitch": -12.21,
   "yaw": 4.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_365F9074_205D_093B_41AA_493B17FEAB40",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.71,
   "yaw": 4.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_0BA4FC41_1F0B_68FE_41B6_37189653571F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5,
   "image": "this.AnimatedImageResource_1CEF0C92_21CF_19FC_41B4_3020312A4968",
   "pitch": -18.34,
   "yaw": 99.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37DD3AB1_2043_193D_4196_C886D308E984",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5,
   "yaw": 99.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_0B948C2B_1F0B_6882_41B2_AEBB017AE961); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.28,
   "image": "this.AnimatedImageResource_1CEF6C93_21CF_19FC_41B3_E7F7935AED6C",
   "pitch": -48.59,
   "yaw": -51.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_38FF3D73_2045_1B3C_41B1_DFBA6AA6D99E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.28,
   "yaw": -51.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_0E957D06_1F0B_6882_4183_A9D0177EC0F0); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.35,
   "image": "this.AnimatedImageResource_1CF2FC9F_21CF_19E5_41A7_A695E4D9A003",
   "pitch": -8.83,
   "yaw": 92.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06FC6BA6_21C5_7F24_419F_77E2772C17AA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.35,
   "yaw": 92.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6, this.camera_0E9D1D06_1F0B_6882_4189_2F1FAD19D170); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.81,
   "image": "this.AnimatedImageResource_1CF27C9F_21CF_19E5_41AD_7F5764FB63CE",
   "pitch": -42.5,
   "yaw": -93.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09FB798C_21C7_1BE4_41BF_8A6063842F16",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.81,
   "yaw": -93.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4296C53_DE46_9390_41E4_B6F280630208, this.camera_0EBEBD26_1F0B_6882_41B2_991614031F95); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.39,
   "image": "this.AnimatedImageResource_1CFFFCA6_21CF_1924_41B5_2ADF7FB75D59",
   "pitch": -2.63,
   "yaw": 94.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EA31A6C_21C5_3924_41BB_A21CAAB20A5D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.39,
   "yaw": 94.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4351C5B_DE46_B390_41D8_A7263A594F00, this.camera_0EA87D16_1F0B_6882_4185_976FFEF3BF3A); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.82,
   "image": "this.AnimatedImageResource_1CFEDCA7_21CF_1924_41B2_933CFC1EA5EB",
   "pitch": -9.43,
   "yaw": -78.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E255A43_21C3_195C_41BF_F15D6DAA1583",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.82,
   "yaw": -78.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350, this.camera_0C6AEE86_1F0B_6985_41A6_4A851DFDA4C9); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.78,
   "image": "this.AnimatedImageResource_1CE98C95_21CF_19E4_41B6_4D49C9FACB40",
   "pitch": -16.18,
   "yaw": -22.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F592C4F_203F_3964_4198_2A0F512A9203",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.78,
   "yaw": -22.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0BBC50AC_1E32_6C7A_41BB_8588896C4508, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0471A556_1E6E_D42D_41A8_6B452DD3BB2B, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.45,
   "image": "this.AnimatedImageResource_4D9A6462_59D4_0DDF_41B2_116F9B689721",
   "pitch": -33.23,
   "yaw": -46.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43507AD3_57CC_3BBC_4193_9AB9041DC73A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.45,
   "yaw": -46.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1, this.camera_0A0B2C77_1F0B_6882_41A3_22B8A8DDD3FA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.41,
   "image": "this.AnimatedImageResource_1CE24C87_21CF_19E4_41AF_7F7993965E06",
   "pitch": -24.15,
   "yaw": -148.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_316F9A97_2043_79E4_41BA_CE4E5EF442CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.41,
   "yaw": -148.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599, this.camera_0A1B1C77_1F0B_6882_41B9_88C5AD32B7B9); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_1CE39C88_21CF_19EC_41B1_1E18365F339D",
   "pitch": -5.63,
   "yaw": -65.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_324636E8_204D_092B_41AE_09FF0120DBB9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -65.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F, this.camera_0A2B3C87_1F0B_6982_419B_1986D33449C2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.19,
   "image": "this.AnimatedImageResource_18271367_21C3_0F24_41B8_E2C4DA23E026",
   "pitch": -31.06,
   "yaw": 119.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1498993A_21C7_3B2F_41B8_9AED007680D9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.19,
   "yaw": 119.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9, this.camera_0B2E6BEB_1F0B_6F82_41B6_450AFC4883AA); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "image": "this.AnimatedImageResource_1CFE5CA7_21CF_1924_41BB_2C2041F1BA46",
   "pitch": -4.89,
   "yaw": -89.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_119F0861_21FD_795C_418C_82FA1324C548",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.71,
   "yaw": -89.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133, this.camera_0B210BEB_1F0B_6F82_41A1_A2E4AE56E5BF); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.78,
   "image": "this.AnimatedImageResource_1CFFCCA7_21CF_1924_41AD_BE8D59B2C602",
   "pitch": -6.05,
   "yaw": 85.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_104C262C_21FD_0924_41AE_83929F9E5BE4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.78,
   "yaw": 85.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_0B856C2B_1F0B_6882_41B6_176199A5B474); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.96,
   "image": "this.AnimatedImageResource_1CEEBC8D_21CF_19E5_41BE_CBA1672BD239",
   "pitch": -14.95,
   "yaw": -162.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3514D4C6_2047_0964_4182_9857941DBE94",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.96,
   "yaw": -162.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0505B6F5_1E12_35EF_41B8_201931EBFC75, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_3FC45232_1E1E_6C65_41A7_57C413CBACD2, null, null, null, this.audio_02F351C8_1E12_6C26_41B4_A17D0B0128A0, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.67,
   "image": "this.AnimatedImageResource_4D898469_59D4_0DAD_41C6_AA7B19C3C512",
   "pitch": -15.84,
   "yaw": 15.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C7691CD_59F4_06E5_41D1_140C5C038DE8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.67,
   "yaw": 15.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F, this.camera_0C276E5F_1F0B_6882_41A9_5BD0001BE9E9); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.96,
   "image": "this.AnimatedImageResource_1CECDC93_21CF_19FC_41A0_5EAB7534CF03",
   "pitch": -3.8,
   "yaw": 136.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_384A1827_2047_1924_41BC_1E977306D9E0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.96,
   "yaw": 136.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B, this.camera_0C132E59_1F0B_688E_41B1_5E5C71496DEF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.68,
   "image": "this.AnimatedImageResource_1CEC2C93_21CF_19FC_418F_F47B2A53529A",
   "pitch": -11.95,
   "yaw": 24.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_380610F6_2043_0924_41AB_EE3CF1D701A4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.68,
   "yaw": 24.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4138ABD_DE41_9490_41C9_48170AE04350, this.camera_0C4F8E75_1F0B_6886_4199_00D174B896CC); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.4,
   "image": "this.AnimatedImageResource_1CEC7C93_21CF_19FC_41A1_45A85A88191D",
   "pitch": -16.57,
   "yaw": 32.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3D95F8F4_2045_3924_41BB_2E7CB4B592D1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.4,
   "yaw": 32.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD, this.camera_0C38DE66_1F0B_6885_41A4_AACE693D279B); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.27,
   "image": "this.AnimatedImageResource_0087FA8E_2E01_0E16_41AB_B7E1A4540F5C",
   "pitch": -22.83,
   "yaw": -56.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E1C60FC_2E03_3BFA_41B3_5FABF5D063F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.27,
   "yaw": -56.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A971757_1E11_D4D6_41B2_088DA7F64403, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044A2546_1E6E_D42D_41A1_BDC087AE90F7, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_4D92E45F_59D4_0DE5_41BA_4856FEABCF64",
   "pitch": -24.01,
   "yaw": -13.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4464A16E_57DC_0967_418A_8BB14FB1CB72",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -13.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08F20622_1E12_746E_419D_EBD9B1F9F454, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044A9546_1E6E_D42D_41BC_69D06113404E, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.63,
   "image": "this.AnimatedImageResource_4D93445F_59D4_0DE5_41D2_B3E2656840FD",
   "pitch": -29.52,
   "yaw": -74.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_431C4CDC_57DC_1FA4_41C5_5E1B46A0D0EE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.63,
   "yaw": -74.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD, this.camera_0CA75EC6_1F0B_6982_41B3_FDEA8A22B69D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "image": "this.AnimatedImageResource_1CEA6C94_21CF_19E4_41AF_9692254B7594",
   "pitch": -21.1,
   "yaw": -73.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C3307E0_2043_F75C_41AA_3EF310792F38",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.64,
   "yaw": -73.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8, this.camera_0C906EB6_1F0B_6982_41A9_01B7722090BE); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.3,
   "image": "this.AnimatedImageResource_1CEBBC94_21CF_19E4_41A4_F114AC531E39",
   "pitch": -13.56,
   "yaw": -157.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3C6BCD2F_2044_FB24_41B4_9ADE0FA8F64C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.3,
   "yaw": -157.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A19CE6B_1E11_F4FE_4196_51E5D9ADE9C6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044C9546_1E6E_D42D_41B9_F9E7FCE69FC4, null, null, null, this.audio_0AF73359_1E2E_2CDD_41B7_0AE09DF35BC3, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.58,
   "image": "this.AnimatedImageResource_40E2E654_57CC_0ABB_41B7_167FDEB95295",
   "pitch": -19.82,
   "yaw": -34.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_46E87AA6_57FC_7BE7_41CB_5F1E68D61C29",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.58,
   "yaw": -34.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B80ED9C_1E2E_745A_41B7_97E159176A4D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044E0546_1E6E_D42D_4161_9CB88A29B03C, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.73,
   "image": "this.AnimatedImageResource_4D963460_59D4_0DDB_41D3_D3ABBA9A133E",
   "pitch": -27.4,
   "yaw": -55.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_452F9AE6_57D4_1B67_41D3_80CE3BF06056",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.73,
   "yaw": -55.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B96F5F7_1E2E_37D6_41B6_EDC9E6BF4523, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044E9546_1E6E_D42D_419C_1437C252B6EB, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.87,
   "image": "this.AnimatedImageResource_4D96A461_59D4_0DDD_41CF_5354E5905CF7",
   "pitch": -23.93,
   "yaw": -115.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43BE90A6_57D4_07E7_419A_3D5641FB7FD5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.87,
   "yaw": -115.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A, this.camera_0A3A8C87_1F0B_6982_41B2_F5BDFA31B6A7); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "image": "this.AnimatedImageResource_1CF7AC9D_21CF_19E4_41AD_11760DB09DA0",
   "pitch": -11.53,
   "yaw": 27.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0595202E_21C5_0927_41B9_13750AE1712B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.71,
   "yaw": 27.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D414C304_DE46_9570_41E8_C12BB201207D, this.camera_0A4ACC97_1F0B_6983_41AC_B80DECFA4745); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.88,
   "image": "this.AnimatedImageResource_1CF71C9D_21CF_19E4_41B6_7C7BB2BFCA23",
   "pitch": -11.05,
   "yaw": -69.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04E6CAD5_21DF_7964_41B9_068AFF60DD7A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.88,
   "yaw": -69.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.05
  }
 ]
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button settings VR"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "push",
 "paddingRight": 0,
 "height": 71,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925, this.camera_0D6ACDC6_1F0B_6B82_41B3_11E17836FC94); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.02,
   "image": "this.AnimatedImageResource_1CE32C89_21CF_19EC_41B2_A48848C1695C",
   "pitch": -26.06,
   "yaw": 108.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D860D8_204F_096C_4168_4A660CA7699C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.02,
   "yaw": 108.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_0D7ECDD6_1F0B_6B82_41A2_AA878E4E5961); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.53,
   "image": "this.AnimatedImageResource_1CE08C89_21CF_19EC_4161_192AFF803BFC",
   "pitch": -24.09,
   "yaw": 25.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D839D9_204D_1B6D_41C0_679893BB4D26",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.53,
   "yaw": 25.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D414B289_DE46_7770_41C5_3AA777A5362C, this.camera_0CB8BEC6_1F0B_6982_4188_0E2EB97763EF); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.29,
   "image": "this.AnimatedImageResource_1CF75C9D_21CF_19E4_41A0_1853D22CFCA0",
   "pitch": -13.28,
   "yaw": 157.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08FC0D31_21DD_FB3D_41A6_748ADDF328FD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.29,
   "yaw": 157.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_0CCE7EE5_1F0B_6986_41A7_F5E7A38A8EEA); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.89,
   "image": "this.AnimatedImageResource_1CF4CC9D_21CF_19E4_41B7_56A1FCF7202D",
   "pitch": -11.02,
   "yaw": -4.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_04A60F3E_21DF_1727_41BB_9F7357F4831B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.89,
   "yaw": -4.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_0D9F6DE6_1F0B_6B82_41A2_2F7F6F217E77); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.2,
   "image": "this.AnimatedImageResource_1CE90C96_21CF_19E4_41BB_9E247C64BC97",
   "pitch": -10.06,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_01C5BA36_21C3_1924_4141_2A1C86F3F090",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.2,
   "yaw": -2.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB, this.camera_0D90EDFB_1F0B_6B83_41B5_687B81411341); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.51,
   "image": "this.AnimatedImageResource_1CE93C96_21CF_19E4_41A3_B74339B4F971",
   "pitch": -17.88,
   "yaw": -154.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_01FF6714_21CF_08E4_4194_CF2EFDD1FFAC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.51,
   "yaw": -154.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B8F6FDF_1E32_D3D6_41AA_A771772B8633, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0470D556_1E6E_D42D_41B7_ECD9D53D3C66, null, null, null, this.audio_0BBE9895_1E32_5C2A_41B4_01768A452226, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_4D9B4462_59D4_0DDF_41B0_BC91597482BC",
   "pitch": 1.48,
   "yaw": 157.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C548976_59CC_07A7_41D5_C19BC12B1B54",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.26,
   "yaw": 157.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B, this.camera_0DCFCE06_1F0B_6882_41B7_8EF0A0E65A5D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.43,
   "image": "this.AnimatedImageResource_1BC02112_21C5_08FC_41B2_85F349804E96",
   "pitch": -10.23,
   "yaw": -59.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2FC651CC_205F_0B64_41B6_94A1A42EB03B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.43,
   "yaw": -59.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_0DC2AE16_1F0B_6882_41AB_CBD8FB900254); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_1CE58C85_21CF_19E4_41A3_FE5AD223A9C7",
   "pitch": 1.35,
   "yaw": 140.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_124250F9_21C5_092C_41BB_278B80E3CD00",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.29,
   "yaw": 140.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5, this.camera_0C568E86_1F0B_6985_4184_FCDA47C4ED55); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.72,
   "image": "this.AnimatedImageResource_1CF3DCA0_21CF_19DB_41B2_FA5AB9543F44",
   "pitch": -20.7,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_085B0A2F_21CD_1924_41A1_17329E4EC9C1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.72,
   "yaw": -109.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508, this.camera_0C43DE75_1F0B_6886_41A2_BD3AD3CB7030); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.52,
   "image": "this.AnimatedImageResource_1CF34CA0_21CF_19DB_41BD_5C5590817138",
   "pitch": -5.9,
   "yaw": 116.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B76FC2A_21CF_192F_41BF_4CB9EBF1A05C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.52,
   "yaw": 116.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B40B136_1E72_2C6B_41B5_AC1C29FD9C15, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0475055A_1E6E_D425_41B9_6861D3A144E1, null, null, null, this.audio_0B430E31_1E76_3466_41B8_798663F0E143, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.41,
   "image": "this.AnimatedImageResource_4D82A466_59D4_0DA7_41D3_E0D4EAD2CA4B",
   "pitch": -34.07,
   "yaw": -107.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D8C9758_59F4_0BEC_41C0_AB80AAF1E278",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.41,
   "yaw": -107.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D41533E1_DE46_94B0_41D1_97019899FFD6, this.camera_0D16CD86_1F0B_6B82_41BB_DA15EF275CF7); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.18,
   "image": "this.AnimatedImageResource_1CF0BCA0_21CF_19DB_41B4_2AE09888AA17",
   "pitch": -8.44,
   "yaw": -74.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B3069FF_21CC_FB25_41BB_1C0129DBB963",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.18,
   "yaw": -74.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B9FBF5C_1E76_54DF_41B7_B53531A83788, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0475E55A_1E6E_D425_4196_7F617EA501CC, null, null, null, this.audio_0B430E31_1E76_3466_41B8_798663F0E143, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_4D83E466_59D4_0DA7_41BF_00F512255AA4",
   "pitch": -40.68,
   "yaw": -97.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4DBA1CDD_59F4_3EE5_41C6_15EAD640AC4A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.81,
   "yaw": -97.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0, this.camera_0ED42D46_1F0B_6882_41A5_8E664AAFF048); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.89,
   "image": "this.AnimatedImageResource_1CFE0CA6_21CF_1924_41A8_2A61098BFADB",
   "pitch": -9.52,
   "yaw": 91.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0CBDA83C_21C7_7924_4190_F2C9B6B73D54",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.89,
   "yaw": 91.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D415046A_DE46_B3B0_4185_426DA6BC4133, this.camera_0EEA9D56_1F0B_6882_41BD_9AA1E34527A2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.7,
   "image": "this.AnimatedImageResource_1CFE7CA6_21CF_1924_41B1_8BE710BE0FF2",
   "pitch": -2.44,
   "yaw": -90.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E5C4E8C_21C5_19E4_41AC_A6C0CDEDEAB9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -90.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_234730B3_3121_9FA2_41A3_51297DD76840, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_20AE00CD_3121_9FE6_41C0_CF097421C5DC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.25,
   "image": "this.AnimatedImageResource_207790A6_3121_9FA2_419D_9EF091CEEC0F",
   "pitch": -15,
   "yaw": -19.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F1FDCC9_30E1_87EF_41B9_EE513C912C95",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.25,
   "yaw": -19.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_0DED9E26_1F0B_6882_41BC_6EA8B5D2C6DC); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.48,
   "image": "this.AnimatedImageResource_1CEB1C95_21CF_19E4_41A3_DA05BD17D08B",
   "pitch": -12.11,
   "yaw": 24.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3CAD5E04_2045_78E4_41B2_0B8F0BCE57B2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.48,
   "yaw": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3, this.camera_0DD6FE26_1F0B_6882_4181_38F60B9A0A2C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.43,
   "image": "this.AnimatedImageResource_1CEB5C95_21CF_19E4_41B7_06EB44BEAC5A",
   "pitch": -23.85,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3DB395EE_2047_0B24_41B1_4F90FE1495BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.43,
   "yaw": 179.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A0BAF4D_1E2F_F43A_41A0_73D1F710C093, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044FA546_1E6E_D42D_41A6_EE17A58336BA, null, null, null, this.audio_0AF73359_1E2E_2CDD_41B7_0AE09DF35BC3, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.5,
   "image": "this.AnimatedImageResource_40E32654_57CC_0ABB_41CA_09C50595D8A2",
   "pitch": -27.35,
   "yaw": 84.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_470D5FAE_57FC_19E7_41D0_B26170E0084D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.5,
   "yaw": 84.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08DD932C_1E2E_6C7B_41B4_0B02F9211B90, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044E3546_1E6E_D42D_41B4_89059C55E1CF, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.17,
   "image": "this.AnimatedImageResource_4D986461_59D4_0DDD_41CF_9281050CA749",
   "pitch": -53.44,
   "yaw": 66.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42C5B39B_57D4_09AD_41D2_B27564515B55",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.17,
   "yaw": 66.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08D33A9C_1E2E_3C5A_41AF_D38A6695BDF5, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044E8546_1E6E_D42D_41A5_0244F01CA635, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.25,
   "image": "this.AnimatedImageResource_4D983461_59D4_0DDD_41D5_67091CD974F4",
   "pitch": -37.04,
   "yaw": -90.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_439F0433_57D4_0EFC_41C3_751893D30A9C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.25,
   "yaw": -90.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_0B41FC06_1F0B_6882_4193_62024DA12CE5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.89,
   "image": "this.AnimatedImageResource_1CEE1C8D_21CF_19E5_41B4_6BB5F3F33CF8",
   "pitch": -18.27,
   "yaw": 39.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36CD586A_2047_192C_41B8_B9D9015D1232",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.89,
   "yaw": 39.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0A2CE25A_1E17_ECDF_41BB_80DC82DDC2D3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0448E546_1E6E_D42D_41AF_3E3F5E56A49D, null, null, null, this.audio_0D09FFEF_1E16_D3F5_41AE_5B0A0A636A7F, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_4DAF845E_59D4_0DE7_41A1_E6A4EB91AE3F",
   "pitch": 6.35,
   "yaw": 76.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43F2D668_57DC_0B6B_4199_0CD455B40638",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.29,
   "yaw": 76.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9, this.camera_0ECA4D36_1F0B_6882_41BE_426AAFCDBA3F); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.21,
   "image": "this.AnimatedImageResource_1CFC3CA8_21CF_192C_41A7_43431F30E2BC",
   "pitch": -4.01,
   "yaw": 75.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1306F3DB_21FD_0F6C_41B2_63B4B1614A0E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.21,
   "yaw": 75.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4154425_DE46_73B3_41E3_24B4CB004799, this.camera_0EC11D36_1F0B_6882_41A6_45973DB8EE89); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.86,
   "image": "this.AnimatedImageResource_1CFDBCA8_21CF_192C_4192_19A714A5A602",
   "pitch": -7.61,
   "yaw": -80.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_138FC3B3_21FD_0F3C_41B7_CA0D5402039F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.86,
   "yaw": -80.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C, this.camera_0EB5CD26_1F0B_6882_41B0_7C8B14019F05); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.5,
   "image": "this.AnimatedImageResource_1CFD3CA8_21CF_192C_41A9_BA56D0B6AD6A",
   "pitch": -13.61,
   "yaw": -109,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_126F495C_21C4_FB64_41BF_E8527C52A677",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.5,
   "yaw": -109,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_08F061D8_1E71_EC26_419F_BD740BB927A2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_0474D55C_1E6E_D4DF_416A_ECF6C4AC75A4, null, null, null, this.audio_0B2D3B29_1E72_7C66_41BA_7D92EFE385EE, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.28,
   "image": "this.AnimatedImageResource_04A6A526_1E6E_D46A_41AC_B4AD17248C27",
   "pitch": -7.16,
   "yaw": -98.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B4E3D9C_1E71_D45F_41B3_8C75E6AA143E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.28,
   "yaw": -98.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D413AA81_DE41_F770_41E4_D256127F3328, this.camera_0BE9DC67_1F0B_6882_41B0_20954F211822); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.4,
   "image": "this.AnimatedImageResource_1CF6BC96_21CF_19E4_41B5_DB850F2D2138",
   "pitch": -3.64,
   "yaw": 34.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_032BEAD8_21CF_396C_41A1_B3BA75F76CCE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.4,
   "yaw": 34.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE, this.camera_0BF9DC6A_1F0B_6882_41B1_53BFDDF43F6C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.96,
   "image": "this.AnimatedImageResource_1CE9BC96_21CF_19E4_414F_FC49DBE2B192",
   "pitch": -13.89,
   "yaw": 127.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0282E82B_21CD_392C_41B6_108A08846FAE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.96,
   "yaw": 127.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72, this.camera_0B311BFB_1F0B_6F82_41BB_3485553D9A20); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.99,
   "image": "this.AnimatedImageResource_1CFA8CA8_21CF_192C_41A8_79FEDF0BEE7D",
   "pitch": -8.25,
   "yaw": 103.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_135577A5_21C3_1724_41A3_354120217681",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.99,
   "yaw": 103.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4341122_DE42_95B0_41E2_776E16E3A599, this.camera_0E825CF6_1F0B_6982_41B4_0061EFEF10CE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.31,
   "image": "this.AnimatedImageResource_1CE0DC89_21CF_19EC_419E_5D5CE524CBAB",
   "pitch": -21.67,
   "yaw": -174.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34DA4C00_2045_18DB_41B0_465B481DF208",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.31,
   "yaw": -174.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4332189_DE42_B570_41DA_7335441D6620, this.camera_0A5C6CA6_1F0B_6982_4164_FE5536562591); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_1CE01C89_21CF_19EC_41BA_AE63F7E33D93",
   "pitch": -6.99,
   "yaw": -77.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_334DA1E7_204F_0B24_41B4_612FAA3C2C6D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -77.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D439F1B7_DE42_7490_4192_B464C382F8D5, this.camera_0E8F0CE6_1F0B_6982_41A0_8C634EBC9AE3); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.73,
   "image": "this.AnimatedImageResource_1CE07C8A_21CF_19EC_41B9_4ED99B4F6AAF",
   "pitch": -14.87,
   "yaw": 91.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3647FACE_205D_3964_4188_3898980AFE33",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.73,
   "yaw": 91.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4139968_DE42_75B0_41C8_766242CD5A0F, this.camera_0E88FCF6_1F0B_6982_41BB_4513101DBA4A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.59,
   "image": "this.AnimatedImageResource_1CE1CC8A_21CF_19EC_41B0_3D634A2A3B69",
   "pitch": -27.51,
   "yaw": 33.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37692CA9_2043_192D_41BF_9E43653448F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.59,
   "yaw": 33.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4, this.camera_0B757C1B_1F0B_6882_41B5_371714873E31); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.03,
   "image": "this.AnimatedImageResource_1CF03CA0_21CF_19DB_41B8_C29DABAD5A9D",
   "pitch": -7.81,
   "yaw": 60.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A12A2D6_21C3_0964_41B7_831A46539169",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.03,
   "yaw": 60.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42CB13D_DE41_9590_41E3_F00E41F70947, this.camera_0D89DDE6_1F0B_6B82_41B5_5BD8BFA42B5A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.35,
   "image": "this.AnimatedImageResource_1CEDDC94_21CF_19E4_41AA_02C50531A1ED",
   "pitch": -5.18,
   "yaw": -92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3ABD52E6_2043_0924_41B2_332D09683BD5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.35,
   "yaw": -92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8, this.camera_0D75BDD6_1F0B_6B82_41B9_5F112F23BA76); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.41,
   "image": "this.AnimatedImageResource_1CED4C94_21CF_19E4_4156_05BF1F14586E",
   "pitch": -10.14,
   "yaw": -5.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BDEF27F_204F_0924_41AD_F18625CBA26D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.41,
   "yaw": -5.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0ABBB587_1E12_5436_4188_EB0CE08E767F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044D0546_1E6E_D42D_41A3_5204117A2223, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_4D93B45F_59D4_0DE5_41C8_C3200E05D5FA",
   "pitch": -24.11,
   "yaw": -40.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43964DD8_57D4_39AB_41C4_902A932FB06E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -40.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0B6381CA_1E13_EC3E_41A9_8EB3B1635D6E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044DE546_1E6E_D42D_41B6_BE75D28309C2, null, null, null, this.audio_0AC03308_1E12_EC3A_41A3_480EB10FA47B, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.67,
   "image": "this.AnimatedImageResource_4D940460_59D4_0DDB_41A9_58A584D3AA3C",
   "pitch": -28.74,
   "yaw": -141.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_42FA906D_57D4_0765_41D2_5308C9ED054F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.67,
   "yaw": -141.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D414C304_DE46_9570_41E8_C12BB201207D, this.camera_0C086E46_1F0B_6882_41AE_FEC827649D9E); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.61,
   "image": "this.AnimatedImageResource_1CF43C9D_21CF_19E4_41A3_21D0DBD201E0",
   "pitch": -10.49,
   "yaw": 126.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_07B25F7C_21DD_1724_4174_153423197FB4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.61,
   "yaw": 126.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_1CF5AC9D_21CF_19E4_41B1_2CA1A474DA0F",
   "pitch": -16.92,
   "yaw": -168.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06113723_21C3_08DC_41B9_9E54DAB03D79",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": -168.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D43DCBD5_DE46_B490_41D2_DD4259448508, this.camera_0DF2AE36_1F0B_6882_41B6_5C87A59EE0DD); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.22,
   "image": "this.AnimatedImageResource_1CF51C9F_21CF_19E5_41AB_44298695849C",
   "pitch": -9.44,
   "yaw": -157.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_06B606A7_21C5_0924_41BF_805477E35F89",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.22,
   "yaw": -157.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0, this.camera_0DE1FE36_1F0B_6882_41B2_B5E79ABBF10E); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.33,
   "image": "this.AnimatedImageResource_1CF28C9F_21CF_19E5_41B4_FEB3D285EB27",
   "pitch": -10.05,
   "yaw": -42.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AC75EBA_21CD_392C_41A3_E474B7B1A2BF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.33,
   "yaw": -42.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C, this.camera_0B535C0B_1F0B_6882_41BA_4E452959B4B5); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.34,
   "image": "this.AnimatedImageResource_1CE50C86_21CF_19E4_41A1_527EB134E43F",
   "pitch": -15.64,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F3CA3A6_2043_0F27_41BF_410F7F35504C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.34,
   "yaw": 111.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F, this.camera_0B633C0B_1F0B_6882_41B5_8C6337D01ECC); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.48,
   "image": "this.AnimatedImageResource_1CE55C87_21CF_19E4_41BA_9081E4C850DB",
   "pitch": -33.04,
   "yaw": -69.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_304C69A8_2047_3B2C_419C_082DE4DF495C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.48,
   "yaw": -69.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_0D4CDDA6_1F0B_6B82_41BD_58EC29230CB3); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.36,
   "image": "this.AnimatedImageResource_1CEE5C8D_21CF_19E5_41B4_7815622738B0",
   "pitch": -7.54,
   "yaw": 145.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37005C7B_205F_192C_41C0_594EF5139986",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 145.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_0AAF5BF7_1E16_F3D6_41AF_D79DF591BC1B, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_044B1546_1E6E_D42D_41B6_B2F0E1A72500, null, null, null, this.audio_0D4A1AAB_1E16_5C7D_41AF_CE5895849164, true)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.58,
   "image": "this.AnimatedImageResource_4D90045E_59D4_0DE7_41D2_DE8E4D2C148D",
   "pitch": -30.64,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_43DD0D02_57DC_1E9F_41D5_48D8B0BBE855",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.58,
   "yaw": -86.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801, this.camera_0B1F3BDB_1F0B_6F82_415B_29FF844EA144); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.88,
   "image": "this.AnimatedImageResource_1CE11C8A_21CF_19EC_41A3_EC1BAE1C624D",
   "pitch": -20.07,
   "yaw": 117.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34D5401F_204D_08E4_41BD_EA7488B1C803",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.88,
   "yaw": 117.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758, this.camera_0CFA5BBC_1F0B_6F85_41A0_8D65CCFC97CF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.7,
   "image": "this.AnimatedImageResource_1CE17C8B_21CF_19EC_41A6_B1E8A208D9CD",
   "pitch": 5.91,
   "yaw": -73.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_347CACD1_2043_397C_41B2_CD491F42711A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.7,
   "yaw": -73.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D413AA81_DE41_F770_41E4_D256127F3328, this.camera_0B0DFBCB_1F0B_6F82_41B0_7FFDE409BC62); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.49,
   "image": "this.AnimatedImageResource_1CEEDC8B_21CF_19EC_4197_2C194D0019F5",
   "pitch": -6.24,
   "yaw": 38.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0162DAFD_21C5_3924_41AE_E2FEF2F7BD9D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.49,
   "yaw": 38.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.24
  }
 ]
},
{
 "fontFamily": "Montserrat",
 "data": {
  "name": "Banjar Hotspring"
 },
 "left": 76,
 "width": 450,
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "minHeight": 1,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "text": "Banjar Hotspring",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": 60,
 "fontSize": 31,
 "paddingTop": 0,
 "class": "Label",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "textDecoration": "none",
 "fontStyle": "normal",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "layout": "horizontal",
 "width": 1202.9,
 "scrollBarColor": "#000000",
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "right": "0%",
 "minWidth": 1,
 "top": "0%",
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 15,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": 60,
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 3,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "width": 44,
 "id": "IconButton_11C1AFD0_1E11_D3F6_41B7_36550307B36C",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_11C1AFD0_1E11_D3F6_41B7_36550307B36C.png",
 "maxHeight": 101,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "if(!this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF.get('visible')){ this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF, false, 0, null, null, false) }",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_11C1AFD0_1E11_D3F6_41B7_36550307B36C_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "width": 44,
 "id": "IconButton_11C15FD0_1E11_D3F6_41BA_BAEB6D6193AA",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_11C15FD0_1E11_D3F6_41BA_BAEB6D6193AA.png",
 "maxHeight": 101,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://www.google.com/maps/place/Banjar+Hot+Spring/@-8.2106057,114.9644437,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e6f62183e68d4d7:0xd6004ccdd7930d5e!8m2!3d-8.2106057!4d114.9670186!16s%2Fg%2F1q62gc8c0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_11C15FD0_1E11_D3F6_41BA_BAEB6D6193AA_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "width": 44,
 "id": "IconButton_11C14FD0_1E11_D3F6_41B4_79A5EA0A912A",
 "transparencyActive": true,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 1,
 "maxWidth": 101,
 "iconURL": "skin/IconButton_11C14FD0_1E11_D3F6_41B4_79A5EA0A912A.png",
 "maxHeight": 101,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://youtu.be/wLolG0hwnkU', '_blank')",
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_11C14FD0_1E11_D3F6_41B4_79A5EA0A912A_rollover.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFF5CA7_21CF_1924_419A_A00A7FB32B18",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D415C40E_DE46_9370_41DA_0370CDB7AEF9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFCDCA8_21CF_192C_4195_78D0EF226F42",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE9FC96_21CF_19E4_41A3_578E85DAFA0C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE96C9C_21CF_19E4_4190_7B275B698D8F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D9C8463_59D4_0DDD_4168_D1506A2E6E95",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4135B2B_DE41_95B0_41E8_BB93436403CE_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D9D6463_59D4_0DDD_41C0_8B63BF08560B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CD8CD_DE42_F4F0_41BD_61D97A4928B1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE3DC88_21CF_19EC_4197_AB5F3F8142A8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE8DC95_21CF_19E4_419D_FD8986F1F410",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE83C95_21CF_19E4_41B9_7490D25006C7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4138ABD_DE41_9490_41C9_48170AE04350_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D99C462_59D4_0DDF_41BB_443D9703E7D9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF10CA1_21CF_19DD_419B_3CDE586A0428",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D41563AF_DE46_94B0_41D1_4DFFE2561AF0_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE9CA6_21CF_1924_41B9_4EFE11690644",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE2AC87_21CF_19E4_41AE_C3A899E56405",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40C4732_DE42_9D90_41D1_0404C05CC74F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE2EC87_21CF_19E4_416F_D1003783A1C7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEA8C94_21CF_19E4_41B0_C156DE03E9F8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEAFC94_21CF_19E4_41B9_70077AD52FE3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D42851E3_DE41_B4B0_41E3_4D03B7B870B8_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D950460_59D4_0DDB_41B7_9F93C3FFA7BE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4337BC4_DE46_F4F0_41DF_6AC45802FE35_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF1ACA0_21CF_19DB_41BB_09F6D390CE06",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE5C8B_21CF_19E3_4199_768AC3CCA6A9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF9C8D_21CF_19E5_41B0_D6D8F21F2DEB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEFFC8D_21CF_19E5_4189_8ED1D6586C37",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D40CA9BB_DE42_B490_41CD_DEECE1687758_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4DAE845E_59D4_0DE6_41B3_EC764217A621",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF6DC9C_21CF_19E4_41BE_5C8FD2D7FEA1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42AFA02_DE41_9770_41BC_25FBB4020A7A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF63C9C_21CF_19E4_4195_B2F919D59D24",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEFCC8E_21CF_19E7_419F_2855C9B00931",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF0C92_21CF_19FC_41B4_3020312A4968",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139968_DE42_75B0_41C8_766242CD5A0F_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEF6C93_21CF_19FC_41B3_E7F7935AED6C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF2FC9F_21CF_19E5_41A7_A695E4D9A003",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43DCBD5_DE46_B490_41D2_DD4259448508_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF27C9F_21CF_19E5_41AD_7F5764FB63CE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFFFCA6_21CF_1924_41B5_2ADF7FB75D59",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D415046A_DE46_B3B0_4185_426DA6BC4133_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFEDCA7_21CF_1924_41B2_933CFC1EA5EB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE98C95_21CF_19E4_41B6_4D49C9FACB40",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4293268_DE41_F7B0_41E4_7626A6300377_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D9A6462_59D4_0DDF_41B2_116F9B689721",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE24C87_21CF_19E4_41AF_7F7993965E06",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE39C88_21CF_19EC_41B1_1E18365F339D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42EC08A_DE42_F370_41E3_C25C7E1C2925_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_18271367_21C3_0F24_41B8_E2C4DA23E026",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE5CA7_21CF_1924_41BB_2C2041F1BA46",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4351C5B_DE46_B390_41D8_A7263A594F00_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFFCCA7_21CF_1924_41AD_BE8D59B2C602",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43A71D0_DE42_9490_41E2_AEE7DF33E0C2_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEEBC8D_21CF_19E5_41BE_CBA1672BD239",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_0BC5B812_2E01_0A0C_41B3_FD16E09A9903_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D898469_59D4_0DAD_41C6_AA7B19C3C512",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CECDC93_21CF_19FC_41A0_5EAB7534CF03",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEC2C93_21CF_19FC_418F_F47B2A53529A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEC7C93_21CF_19FC_41A1_45A85A88191D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0087FA8E_2E01_0E16_41AB_B7E1A4540F5C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D92E45F_59D4_0DE5_41BA_4856FEABCF64",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D42CB13D_DE41_9590_41E3_F00E41F70947_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D93445F_59D4_0DE5_41D2_B3E2656840FD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEA6C94_21CF_19E4_41AF_9692254B7594",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEBBC94_21CF_19E4_41A4_F114AC531E39",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_40E2E654_57CC_0ABB_41B7_167FDEB95295",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D963460_59D4_0DDB_41D3_D3ABBA9A133E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_B7F0_41E3_CF4156C5ACD3_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D96A461_59D4_0DDD_41CF_5354E5905CF7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF7AC9D_21CF_19E4_41AD_11760DB09DA0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D414B289_DE46_7770_41C5_3AA777A5362C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF71C9D_21CF_19E4_41B6_7C7BB2BFCA23",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE32C89_21CF_19EC_41B2_A48848C1695C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4341122_DE42_95B0_41E2_776E16E3A599_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE08C89_21CF_19EC_4161_192AFF803BFC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF75C9D_21CF_19E4_41A0_1853D22CFCA0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D414C304_DE46_9570_41E8_C12BB201207D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF4CC9D_21CF_19E4_41B7_56A1FCF7202D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE90C96_21CF_19E4_41BB_9E247C64BC97",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE93C96_21CF_19E4_41A3_B74339B4F971",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D413AA81_DE41_F770_41E4_D256127F3328_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D9B4462_59D4_0DDF_41B0_BC91597482BC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1BC02112_21C5_08FC_41B2_85F349804E96",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40C6703_DE42_BD70_41D7_FFB6E119FE5C_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE58C85_21CF_19E4_41A3_FE5AD223A9C7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF3DCA0_21CF_19DB_41B2_FA5AB9543F44",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF34CA0_21CF_19DB_41BD_5C5590817138",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D41533E1_DE46_94B0_41D1_97019899FFD6_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D82A466_59D4_0DA7_41D3_E0D4EAD2CA4B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF0BCA0_21CF_19DB_41B4_2AE09888AA17",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D43D1BDB_DE46_9490_41D7_08D9FF7FCDA5_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D83E466_59D4_0DA7_41BF_00F512255AA4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE0CA6_21CF_1924_41A8_2A61098BFADB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFE7CA6_21CF_1924_41B1_8BE710BE0FF2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4296C53_DE46_9390_41E4_B6F280630208_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_207790A6_3121_9FA2_419D_9EF091CEEC0F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEB1C95_21CF_19E4_41A3_DA05BD17D08B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEB5C95_21CF_19E4_41B7_06EB44BEAC5A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_40E32654_57CC_0ABB_41CA_09C50595D8A2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D986461_59D4_0DDD_41CF_9281050CA749",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D43362F4_DE41_9490_41C6_098A12EDA1DD_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D983461_59D4_0DDD_41D5_67091CD974F4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE1C8D_21CF_19E5_41B4_6BB5F3F33CF8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D40CA977_DE42_9590_41D0_061899CF6AED_0_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4DAF845E_59D4_0DE7_41A1_E6A4EB91AE3F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFC3CA8_21CF_192C_41A7_43431F30E2BC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFDBCA8_21CF_192C_4192_19A714A5A602",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFD3CA8_21CF_192C_41A9_BA56D0B6AD6A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D430BC0B_DE46_9370_41AF_F5B9BA771C72_0_HS_3_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_04A6A526_1E6E_D46A_41AC_B4AD17248C27",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF6BC96_21CF_19E4_41B5_DB850F2D2138",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4365284_DE41_9770_41D0_4EA195BDC4EB_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE9BC96_21CF_19E4_414F_FC49DBE2B192",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4154425_DE46_73B3_41E3_24B4CB004799_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CFA8CA8_21CF_192C_41A8_79FEDF0BEE7D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE0DC89_21CF_19EC_419E_5D5CE524CBAB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE01C89_21CF_19EC_41BA_AE63F7E33D93",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE07C8A_21CF_19EC_41B9_4ED99B4F6AAF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D40CF9A8_DE42_94B1_41E9_EF8BA6B71801_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE1CC8A_21CF_19EC_41B0_3D634A2A3B69",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D41563D4_DE46_F490_41E7_D85D443C6CD0_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF03CA0_21CF_19DB_41B8_C29DABAD5A9D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEDDC94_21CF_19E4_41AA_02C50531A1ED",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CED4C94_21CF_19E4_4156_05BF1F14586E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_4_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D93B45F_59D4_0DE5_41C8_C3200E05D5FA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D4139A41_DE41_97F0_41D9_FC07D06FEF5B_0_HS_5_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D940460_59D4_0DDB_41A9_58A584D3AA3C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF43C9D_21CF_19E4_41A3_21D0DBD201E0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF5AC9D_21CF_19E4_41B1_2CA1A474DA0F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF51C9F_21CF_19E5_41AB_44298695849C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4360B8E_DE46_948E_41E8_B044419A1BD4_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CF28C9F_21CF_19E5_41B4_FEB3D285EB27",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE50C86_21CF_19E4_41A1_527EB134E43F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D430FF06_DE42_8D71_41E4_38929E95FE8B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE55C87_21CF_19E4_41BA_9081E4C850DB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEE5C8D_21CF_19E5_41B4_7815622738B0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_D439F1B7_DE42_7490_4192_B464C382F8D5_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_4D90045E_59D4_0DE7_41D2_DE8E4D2C148D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE11C8A_21CF_19EC_41A3_EC1BAE1C624D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CE17C8B_21CF_19EC_41A6_B1E8A208D9CD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_D4332189_DE42_B570_41DA_7335441D6620_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_1CEEDC8B_21CF_19EC_4197_2C194D0019F5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "width": 140,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "data": {
  "name": "Drone View"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 15,
 "paddingLeft": 15,
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "Drone View",
 "height": "100%",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "paddingTop": 0,
 "class": "DropDown",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "popUpShadowColor": "#000000",
 "popUpPaddingLeft": 15,
 "textDecoration": "none",
 "popUpShadowOpacity": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "fontSize": 12,
 "popUpFontColor": "#FFFFFF",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "width": 140,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "data": {
  "name": "DropDown 4"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 15,
 "paddingLeft": 15,
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "The Hotspring",
 "height": "100%",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "paddingTop": 0,
 "class": "DropDown",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "popUpShadowColor": "#000000",
 "popUpPaddingLeft": 15,
 "textDecoration": "none",
 "popUpShadowOpacity": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "fontSize": 12,
 "popUpFontColor": "#FFFFFF",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "width": 140,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "data": {
  "name": "DropDown 5"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 15,
 "paddingLeft": 15,
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "The Jakuzzi",
 "height": "100%",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "paddingTop": 0,
 "class": "DropDown",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "popUpShadowColor": "#000000",
 "popUpPaddingLeft": 15,
 "textDecoration": "none",
 "popUpShadowOpacity": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "fontSize": 12,
 "popUpFontColor": "#FFFFFF",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpBackgroundColor": "#F7931E",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "width": 140,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "data": {
  "name": "DropDown 2"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 15,
 "paddingLeft": 15,
 "backgroundColor": [
  "#F7931E"
 ],
 "label": "Locket and Parking",
 "height": "100%",
 "popUpPaddingTop": 10,
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "paddingTop": 0,
 "class": "DropDown",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "popUpShadowColor": "#000000",
 "popUpPaddingLeft": 15,
 "textDecoration": "none",
 "popUpShadowOpacity": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 5,
 "fontSize": 12,
 "popUpFontColor": "#FFFFFF",
 "propagateClick": false,
 "fontWeight": "bold",
 "arrowColor": "#FFFFFF"
},
{
 "arrowBeforeLabel": false,
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "popUpShadowSpread": 1,
 "arrowColor": "#FFFFFF",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 136,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "popUpPaddingBottom": 10,
 "popUpGap": 2,
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "data": {
  "name": "DropDown 6"
 },
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 15,
 "popUpPaddingTop": 10,
 "paddingRight": 15,
 "height": 60,
 "popUpShadowBlurRadius": 6,
 "popUpShadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "DropDown",
 "popUpShadowOpacity": 0,
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "textDecoration": "none",
 "popUpShadowColor": "#000000",
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "fontSize": 12,
 "popUpFontColor": "#FFFFFF",
 "propagateClick": false,
 "fontWeight": "bold",
 "prompt": "All"
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "height": 60,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "iconHeight": 17,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 17,
 "rollOverBackgroundOpacity": 1
}],
 "start": "this.init(); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.mainPlayList])",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_11C17FD0_1E11_D3F6_41B8_85164D7DE6ED",
  "this.Image_221569DE_31E7_81E5_41A8_23A4FDD627F5",
  "this.Image_22232A2E_31FE_82A2_41C1_234D93435EAF",
  "this.Image_222D20B5_31E2_9FA6_41C8_0CDC6BC5329B",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_11C1BFD0_1E11_D3F6_4175_2D8853207E18",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
