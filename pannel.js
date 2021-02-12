pannellum.viewer('panorama', {   
    //initialize the starting photosphere
    "default": {
        "firstScene": "pano1",
    },

    //add all the possible different photospheres in here
    "scenes": {
    "pano1": {
            "title": "Lower Campus",
            "author": "McGill Library",
            "hfov": 300,
            "yaw": 10,
            "autoLoad": true,
            "horizonRoll": -2,//added to correct non-level panorama
            "compass": true,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/wtVV2ZA.jpeg",
            "hotSpots": [
                {// need to change icon
                    "pitch": -0.6,
                    "yaw": 120,
                    "type": "scene",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                    "text": "To Moyse Hall",
                   "sceneId": "pano4",
                   "targetYaw": 5,

             },
            {
                "pitch": 14.1,
                "yaw": 1.5,
                "type": "info",
                "URL": "https://google.com",
                "text":"hotspot1"
            },                
            {
                    "pitch": 5,
                    "yaw": 200,
                    "type": "info",
                    "clickHandlerFunc": playAudio,
                    "clickHandlerArgs": "sound1",
                    "text":"audio1"
            },
            {
                //hotspot of the poster. TODO: change cssClass name as well as css class above in <style> </style>
                "pitch": 0,
                "yaw": -60,
                "type": "info",
               "cssClass": "hotspot",
               "clickHandlerFunc": openWindowFunc,
                    "clickHandlerArgs": "myModal",
                "text":"this is a poster"
            }
           
            ]
        },
        "pano2": {
            "title": "Molson Arena",
            "author": "McGill Library",
            "hfov": 300,
            "pitch": -3,
            "yaw": 17,
            "compass": true,
            "autoLoad": true,
            "type": "equirectangular",
            //image of the panorama
           "panorama": "https://i.imgur.com/SQnSsQt.jpeg",//updated pano to bw image
            //the list of hotspots belonging to this specific hotspot
            "hotSpots": [
                {
                    "pitch": 5.1,
                    "yaw": 0,
                    "type": "scene",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                {
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                    "text": "To Birks Reading Room",
                    "sceneId": "pano3"
                },
                {
                    "pitch": 14.1,
                    "yaw": 1.5,
                    "type": "info",
                    "URL": "https://google.com",
                    "text":"Puzzle me this"
                },
                {
                    "pitch": 9.4,
                    "yaw": 22.6,
                    "type": "info",
                    "URL": "https://google.com",
                    "text":"hotspot 2"
                },
                {
                    "pitch": 9.4,
                    "yaw": 102.6,
                    "type": "info",
                    "clickHandlerFunc": openWindowFunc,
                    "clickHandlerArgs": "myModal",
                    "text":"hotspot 4"
                },
                {
                    "pitch": 0.9,
                    "yaw": 144.4,
                    "type": "info",
                    "clickHandlerFunc": passWord,
                    "clickHandlerArgs": "hotspot3",
                }
            ]
        },
        //add the second panorama lower campus
    
         //added third panorama
        "pano3": {
            "title": "Birks Reading Room",
            "author": "McGill Library",
            "hfov": 300,
            "yaw": 5,
            "compass": true,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/8IdaXtl.jpeg",
            "hotSpots": [
                {//need to set location and icon still
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {//need to set position and icon
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
           		{
                "pitch": 0.9,
                "yaw": 144.4,
                "type": "info",
                "URL": "https://google.com",
                "text":"hotspot 3"
           		},
                {
                //hotspot of the poster. TODO: change cssClass name as well as css class above in <style> </style>
                "pitch": 0,
                "yaw": -60,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "imageModal",
                "text":"this is a poster"
                },
            ]
        },
         //added 4th panorama
        "pano4": {
            "title": "Moyse Hall",
            "author": "McGill Library",
            "hfov": 200,
            "yaw": 5,
            "compass": true,
            "type": "equirectangular",
           
            "panorama": "https://i.imgur.com/s5RrK6d.jpeg",
            "hotSpots": [
                {//need to set icon 
                    "pitch": -8,
                    "yaw": 75,
                    "type": "scene",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {//need to change icon
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                 {
                    "pitch": -8,
                    "yaw": -75,
                    "type": "scene",
                    "text": "To Birks Reading Room",
                    "sceneId": "pano3"
                },
           		{
                "pitch": 0.9,
                "yaw": 144.4,
                "type": "info",
                "URL": "https://google.com",
                "text":"hotspot 3"
           		},
            ]
        }
        
    
}});

//global vars
var modal  = document.getElementById("myModal");
var modalImage = document.getElementById("imageModal");
var span = document.getElementsByClassName("close")[0];
var spanImage = document.getElementsByClassName("close1")[0];
var audio1 = document.getElementById("audio");
var a1IsPlaying = false;

//function to play audio
function playAudio(hotspotDiv, args){
    if(a1IsPlaying){
        audio.pause();
        a1IsPlaying = false;
    } else{
        audio.play();
        a1IsPlaying = true;
    }
}

//functions opens a modal
function openWindowFunc(hotSpotDiv, args){
    //it takes the variable modal that we have initialized as "myModal" which is an id we
    //assign in the html section
    var tempModal = document.getElementById(args);
    tempModal.style.display = "block";
};

//function that checks for the element close in html and closes the modal for that specific span of the modal
span.onclick = function() {
    //when we click on the span (which is the class name of the button) and it hides that modal (which is out div)
  modal.style.display = "none";
}

spanImage.onclick = function(){
    modalImage.style.display = "none";
}

//function that checks for a password, enters a new site once enabled
function passWord(hotspotDiv, args) {
    var testV = 1;
    var pass1 = prompt('Please Enter Your Password',' ');
    //the function loops until a user gives the right password
    while (testV < 3) {
        if (!pass1)
            history.go(-1);
        if (pass1.toLowerCase() == "hello") {
            //if the password is right, open and break the loop
            window.open('passwordsite.html');
         break;
        }
        //give at least 3 tries -> this can be changed
        testV+=1;
        var pass1 =
        prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
    }
        if (pass1.toLowerCase()!="password" & testV ==3)
        history.go(-1);
    return " ";
}