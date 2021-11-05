
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
				
				line1: function(){
					var ex_9_1_1 = { lat: 32.48219857761756, lng: -97.03315494482366 };  
					var ex_9_1_2 = { lat: 32.482089972736524, lng: -97.02561257315996 };  
					var ex_9_1_3 = { lat: 32.477193567802246, lng: -97.02506540252715 };  
					var ex_9_1_4 = { lat: 32.474930813801755, lng: -97.02512977554277 };  	
					var ex_9_1_5 = { lat: 32.47496701831349, lng: -97.03119156784747 };  
					var ex_9_1_6 = { lat: 32.47511183621487, lng: -97.0312022966834 }; 
					var ex_9_1_7 = { lat: 32.47516614286783, lng: -97.03320858900372 }; 
					var ex_9_1_8 = { lat: 32.47741984007404, lng: -97.03317640249591 };
					var ex_9_1_9 = { lat: 32.47775472199244, lng: -97.0318031114959 };  
					var ex_9_1_10 = { lat: 32.47975493669494, lng: -97.03317640249591 }; 
					//var ex_9_1_1 = { lat: lng:  };
					
					var ex_9_1 = [ ex_9_1_1, ex_9_1_2, ex_9_1_3, ex_9_1_4, ex_9_1_5, ex_9_1_6, ex_9_1_7, ex_9_1_8, ex_9_1_9, ex_9_1_10, ex_9_1_1 ];
					console.log(ex_9_1);
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
		water_points.line1();


    });
    


});