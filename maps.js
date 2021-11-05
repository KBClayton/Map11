
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
						title: "GPS of property from document"
					});
					point_001.setMap(map);             
				},	 
				
				line: function(){
					var ex_9_1_1 = { lat: 32.482212, lng: -97.033155 };
					var ex_9_1_2 = { lat: 32.482134, lng: -97.025567 }; 
					var ex_9_1_3 = { lat: 32.477227, lng: -97.023497 }; 
					var ex_9_1_4 = { lat: 32.474720, lng: -97.023915 };
					var ex_9_1_5 = { lat: 32.474720, lng: -97.030267 };
					var ex_9_1_6 = { lat: 32.475245, lng: -97.031447 };
					var ex_9_1_7 = { lat: 32.475199, lng: -97.033217 };
					var ex_9_1_8 = { lat: 32.477435, lng: -97.033207 };
					var ex_9_1_9 = { lat: 32.478177, lng: -97.032123 };
					var ex_9_1_10 = { lat: 32.479922, lng: -97.033153 };
					//var ex_9_1_1 = { lat: lng:  };
					
					var ex_9_1 = [ ex_9_1_1, ex_9_1_2, ex_9_1_3, ex_9_1_4, ex_9_1_5, ex_9_1_6, ex_9_1_7, ex_9_1_8, , ex_9_1_9, ex_9_1_10, ex_9_1_1 ];
					var ex_9_1_line = new google.maps.Polyline({
							path: ex_9_1,
							geodesic: true,
							strokeColor: '#0000FF',
							strokeOpacity: .7,
							strokeWeight: 1
						});
					ex_9_1_line.setMap(map);
				}
        }
        water_points.draw();
		water_points.line();

    });
    


});