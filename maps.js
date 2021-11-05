
$(document).ready(function() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function wait() {
        await sleep(1500);
    }
      
    wait().then(function(){
        var water_points = {
            draw: function(){
                var location_001={lat: 32.47440922, lng: -97.02867023}
                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "Centerpoint of property"
                });
                point_001.setMap(map);             
                
                //var location_002={lat: 33.834729, lng:-100.299591}
                //var point_002 = new google.maps.Marker({
                //    position: location_002,
                //    title: "Northeast corner of John F Heath survey"
                //});
                //point_002.setMap(map); 

                //var location_003={lat: 33.82778070096307, lng:-100.29961518420595}
                //var point_003 = new google.maps.Marker({
                //    position: location_003,
                //    title: "South 922.3 varas (773 meters)"
                // });
                // point_003.setMap(map); 
                
                //var location_004={lat: 33.827797978008704, lng:-100.30793959289387}
                //var point_004 = new google.maps.Marker({
                  //  position: location_004,
                 //   title: "West 918 varas (769 meters)"
                //});
                //point_004.setMap(map); 
                
                //var location_005={lat: 33.83475338812899, lng:-100.30803889263035}
                //var point_005 = new google.maps.Marker({
                //    position: location_005,
                //    title: "North 922.3 varas (773 meters)"
                //});
                //point_005.setMap(map); 
                
                // var location_006={lat: 32.671549, lng:-98.083757}

                // var point_006 = new google.maps.Marker({
                //     position: location_006,
                //     title: "Diversion point 61204013010 & On-channel Reservoir 61204013306"
                // });
                // point_006.setMap(map); 
                
                // var location_007={lat: 32.663729, lng:-98.096344}

                // var point_007 = new google.maps.Marker({
                //     position: location_007,
                //     title: "Diversion point 61204013006 & On-channel Reservoir 61204013302"
                // });
                // point_007.setMap(map); 
                
                // var location_008={lat: 32.663216, lng:-98.094527}

                // var point_008 = new google.maps.Marker({
                //     position: location_008,
                //     title: "Diversion point 61204013005 & On-channel Reservoir 61204013301"
                // });
                // point_008.setMap(map); 

                
                // var location_009={lat: 32.659454, lng:-98.094627}

                // var point_009 = new google.maps.Marker({
                //     position: location_009,
                //     title: "Diversion point 61204013008 & On-channel Reservoir 61204013304"
                // });
                // point_009.setMap(map); 

                
                // var location_010={lat: 32.659730, lng:-98.093472}

                // var point_010 = new google.maps.Marker({
                //     position: location_010,
                //     title: "Diversion point 61204013007 & On-channel Reservoir 61204013303"
                // });
                // point_010.setMap(map); 


                // var location_011={lat: 32.669692, lng:-98.068513}

                // var point_011 = new google.maps.Marker({
                //     position: location_011,
                //     title: "Diversion point 61204013012"
                // });
                // point_011.setMap(map); 
                
                // var location_012={lat: 32.659010, lng:-98.081757}

                // var point_012 = new google.maps.Marker({
                //     position: location_012,
                //     title: "Diversion point 61204013009 & On-channel Reservoir 61204013305"
                // });
                // point_012.setMap(map);
            } 
        }
        water_points.draw();

        // var original_parcel={
        //     draw: function(){
        //         var nw_point_AWilliams_885={lat:32.714343,lng:-98.083526};
        //         var nw_point_AWilliams_886={lat:32.693530,lng:-98.099981};
        //         var startpoint=geolib.computeDestinationPoint(nw_point_AWilliams_886, 1330.147, 180);
        //         var con_start={lat:startpoint.latitude,lng:startpoint.longitude};
        //         var start_loc = new google.maps.Marker({
        //             position: con_start,
        //             title: "start of old property 4364ft south of Williams, A 886 NW point lat:32.693530,lng:-98.099981"
        //         });
        //         start_loc.setMap(map);

        //         var loc_2_raw=geolib.computeDestinationPoint(con_start, 915.0096, 179.75);
        //         var loc_2={lat:loc_2_raw.latitude,lng:loc_2_raw.longitude};
        //         var loc_2_marker = new google.maps.Marker({
        //             position: loc_2,
        //             title: "South 0-1/4 degree east, 3002ft to NW corner of Church and cemetary"
        //         });
        //         loc_2_marker.setMap(map);

        //         var loc_3_raw=geolib.computeDestinationPoint(loc_2, 64.008, 90);
        //         var loc_3={lat:loc_3_raw.latitude,lng:loc_3_raw.longitude};
        //         var loc_3_marker = new google.maps.Marker({
        //             position: loc_3,
        //             title: "East 210 feet to the NE corner of said lot"
        //         });
        //         loc_3_marker.setMap(map);

        //         var loc_4_raw=geolib.computeDestinationPoint(loc_3, 358.14, 180);
        //         var loc_4={lat:loc_4_raw.latitude,lng:loc_4_raw.longitude};
        //         var loc_4_marker = new google.maps.Marker({
        //             position: loc_4,
        //             title: "South with the east line of the Church lot 1175 feet to the north line of T&PRR"
        //         });
        //         loc_4_marker.setMap(map); 


        //         var loc_5_raw=geolib.computeDestinationPoint(loc_4, 64.008, 270);
        //         var loc_5={lat:loc_5_raw.latitude,lng:loc_5_raw.longitude};
        //         var loc_5_marker = new google.maps.Marker({
        //             position: loc_5,
        //             title: "West 210 feet bact to the west line of said survey"
        //         });
        //         loc_5_marker.setMap(map); 

        //         var loc_6_raw=geolib.computeDestinationPoint(loc_4, 2884.018, 179.75);
        //         var loc_6={lat:loc_6_raw.latitude,lng:loc_6_raw.longitude};
        //         var loc_6_marker = new google.maps.Marker({
        //             position: loc_6,
        //             title: "South 0-1/4 degrees east with said west line 9462 feet to the lower bank of Brazos river oppisite the shouth of Palo Pinto Creek"
        //         });
        //         loc_6_marker.setMap(map); 


        //         //start error correction marker Brazos river bank
        //         var loc_7_raw={latitude:32.641600, longitude:-98.099708};
        //         var loc_7={lat:32.641600, lng:-98.099708};
        //         var loc_7_marker = new google.maps.Marker({
        //             position: loc_7,
        //             title: "ERRORS NOT ORIGINAL SURVEY: extention to actual brazos river bank by sattelite view"
        //         });
        //         //loc_7_marker.setMap(map); 
        //         //end error correction marker 
        //         var error1=geolib.getPathLength([loc_6_raw, loc_7_raw]);
        //         console.log("the first error correction is "+error1+" meters");

        //         var loc_8_raw=geolib.computeDestinationPoint(loc_6, 457.2, 135);
        //         var loc_8={lat:loc_8_raw.latitude,lng:loc_8_raw.longitude};
        //         var loc_8_marker = new google.maps.Marker({
        //             position: loc_8,
        //             title: "with meanders of lower bank of Brazos S 45 E 1500 feet"
        //         });
        //         loc_8_marker.setMap(map); 

        //         var loc_9_raw=geolib.computeDestinationPoint(loc_8, 548.64, 130.5);
        //         var loc_9={lat:loc_9_raw.latitude,lng:loc_9_raw.longitude};
        //         var loc_9_marker = new google.maps.Marker({
        //             position: loc_9,
        //             title: "S 50 1/2 E 1800 feet"
        //         });
        //         loc_9_marker.setMap(map); 

        //         var loc_10_raw=geolib.computeDestinationPoint(loc_9, 426.72, 122);
        //         var loc_10={lat:loc_10_raw.latitude,lng:loc_10_raw.longitude};
        //         var loc_10_marker = new google.maps.Marker({
        //             position: loc_10,
        //             title: "S 58 E 1400 feet"
        //         });
        //         loc_10_marker.setMap(map); 

        //         var loc_11_raw=geolib.computeDestinationPoint(loc_10, 457.2, 109.75);
        //         var loc_11={lat:loc_11_raw.latitude,lng:loc_11_raw.longitude};
        //         var loc_11_marker = new google.maps.Marker({
        //             position: loc_11,
        //             title: "S 70 1/4 E 1500 feet"
        //         });
        //         loc_11_marker.setMap(map); 

        //         var loc_12_raw=geolib.computeDestinationPoint(loc_11, 304.8, 90);
        //         var loc_12={lat:loc_12_raw.latitude, lng:loc_12_raw.longitude};
        //         var loc_12_marker = new google.maps.Marker({
        //             position: loc_12,
        //             title: "E 1000 feet"
        //         });
        //         loc_12_marker.setMap(map); 

        //         var loc_13_raw=geolib.computeDestinationPoint(loc_12, 316.992, 54.5);
        //         var loc_13={lat:loc_13_raw.latitude, lng:loc_13_raw.longitude};
        //         var loc_13_marker = new google.maps.Marker({
        //             position: loc_13,
        //             title: "N 54 1/2 E 1040 feet"
        //         });
        //         loc_13_marker.setMap(map); 

        //         var loc_14_raw=geolib.computeDestinationPoint(loc_13, 441.96, 30.5);
        //         var loc_14={lat:loc_14_raw.latitude, lng:loc_14_raw.longitude};
        //         var loc_14_marker = new google.maps.Marker({
        //             position: loc_14,
        //             title: "N 30 1/2 east 1450 feet"
        //         });
        //         loc_14_marker.setMap(map); 

        //         var loc_15_raw=geolib.computeDestinationPoint(loc_14, 152.4, 357);
        //         var loc_15={lat:loc_15_raw.latitude, lng:loc_15_raw.longitude};
        //         var loc_15_marker = new google.maps.Marker({
        //             position: loc_15,
        //             title: "N 3 W 500 feet"
        //         });
        //         loc_15_marker.setMap(map); 

        //         var loc_16_raw=geolib.computeDestinationPoint(loc_15, 1524, 320);
        //         var loc_16={lat:loc_16_raw.latitude, lng:loc_16_raw.longitude};
        //         var loc_16_marker = new google.maps.Marker({
        //             position: loc_16,
        //             title: "N 40 W 5000 feet"
        //         });
        //         loc_16_marker.setMap(map); 

        //         var loc_17_raw=geolib.computeDestinationPoint(loc_16, 121.92, 13);
        //         var loc_17={lat:loc_17_raw.latitude, lng:loc_17_raw.longitude};
        //         var loc_17_marker = new google.maps.Marker({
        //             position: loc_17,
        //             title: "N 13 E 400 feet"
        //         });
        //         loc_17_marker.setMap(map); 

        //         var loc_18_raw=geolib.computeDestinationPoint(loc_17, 274.32, 27.25);
        //         var loc_18={lat:loc_18_raw.latitude, lng:loc_18_raw.longitude};
        //         var loc_18_marker = new google.maps.Marker({
        //             position: loc_18,
        //             title: "N 27 1/4 E 900 feet"
        //         });
        //         loc_18_marker.setMap(map); 

        //         var loc_19_raw=geolib.computeDestinationPoint(loc_18, 804.672, 34.5);
        //         var loc_19={lat:loc_19_raw.latitude, lng:loc_19_raw.longitude};
        //         var loc_19_marker = new google.maps.Marker({
        //             position: loc_19,
        //             title: "N 34.5 E 2640 feet"
        //         });
        //         loc_19_marker.setMap(map); 

        //         var loc_20_raw=geolib.computeDestinationPoint(loc_19, 313.944, 43.5);
        //         var loc_20={lat:loc_20_raw.latitude, lng:loc_20_raw.longitude};
        //         var loc_20_marker = new google.maps.Marker({
        //             position: loc_20,
        //             title: "N 43.5 E 1030 feet"
        //         });
        //         loc_20_marker.setMap(map); 

        //         var loc_21_raw=geolib.computeDestinationPoint(loc_20, 944.88, 39.25);
        //         var loc_21={lat:loc_21_raw.latitude, lng:loc_21_raw.longitude};
        //         var loc_21_marker = new google.maps.Marker({
        //             position: loc_21,
        //             title: "N 39.25 E 3100 feet"
        //         });
        //         loc_21_marker.setMap(map); 

        //         var loc_22_raw=geolib.computeDestinationPoint(loc_21, 512.064, 32.25);
        //         var loc_22={lat:loc_22_raw.latitude, lng:loc_22_raw.longitude};
        //         var loc_22_marker = new google.maps.Marker({
        //             position: loc_22,
        //             title: "N 32.25 E 1680 feet, to an old northery subdivision marked line at river bank"
        //         });
        //         loc_22_marker.setMap(map); 

        //         var loc_23_raw=geolib.computeDestinationPoint(loc_22, 1758.696, 24.5);
        //         var loc_23={lat:loc_23_raw.latitude, lng:loc_23_raw.longitude};
        //         var loc_23_marker = new google.maps.Marker({
        //             position: loc_23,
        //             title: "N 24.5 E 5770 feet, to SE corner of JH Gilbert lands out of said East Willams survey"
        //         });
        //         loc_23_marker.setMap(map); 

        //         var loc_24_raw=geolib.computeDestinationPoint(loc_23, 1758.696, 24.5);
        //         var loc_24={lat:loc_24_raw.latitude, lng:loc_24_raw.longitude};
        //         var loc_24_marker = new google.maps.Marker({
        //             position: loc_24,
        //             title: "With Gilbert's south line "
        //         });
        //         loc_24_marker.setMap(map);



        //         var roll_LineCoord=[con_start, loc_2, loc_3, loc_4, loc_5, loc_6, loc_8, loc_9, loc_10, loc_11, loc_12, loc_13, loc_14, loc_15, loc_16, loc_17, loc_18, loc_19, loc_20, loc_21, loc_22, loc_23];
        //         console.log(roll_LineCoord);
        //         var original_parcel_line = new google.maps.Polyline({
        //             path: roll_LineCoord,
        //             geodesic: true,
        //             strokeColor: '#0000FF',
        //             strokeOpacity: .7,
        //             strokeWeight: 1
        //           });
        //           original_parcel_line.setMap(map);

        //     }
        // }
        // original_parcel.draw();


        // var parcel_2017={
        //     draw: function(){
        //         console.log("in 2017 parcel method")
        //     }
        // }
        // parcel_2017.draw();

    });
    


});