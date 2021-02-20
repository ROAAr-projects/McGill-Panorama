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
               {//i want this 'welcomHotspot' with the image of the martlet to appear in the bottom left of every landing view. I want an info box to appear on click. How do we make that happen?
                    "pitch": -15,
                    "yaw": -30,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "text": "Welcome to McGill's Lower Campus. Here you see the Arts Building, but click and drag and you'll see the path to other places to explore on Campus. Go left for the Redpath Museum, or go right to make your way to Birks Library and the Molson Stadium."
                    
                    
                },
                {
                    "pitch": -0.6,
                    "yaw": 120,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Moyse Hall",
                   "sceneId": "pano4",
                   "targetYaw": 5,

             },
              {
                    "pitch": -2.1,
                    "yaw": 45,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Birks Reading Room",
                    "sceneId": "pano3"
                },
                 {
                    "pitch": -2.1,
                    "yaw": -120,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Redpath Museum",
                    "sceneId": "pano5"
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
                "clickHandlerArgs": "imageModalCompare",
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
                    "yaw": -30,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                {
                    "pitch": -2.1,
                    "yaw": 15,
                    "type": "scene",
                    "cssClass": "directionArrow",
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
        "pano3": {
            "title": "Birks Reading Room",
            "author": "McGill Library",
            "hfov": 300,
            "yaw": 5,
            "compass": true,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/8IdaXtl.jpeg",
            "hotSpots": [
                /*
                 I don't think we necessarily need this scene link. {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },*/
                {//need to set position and icon
                    "pitch": -2.1,
                    "yaw": 45,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                {
                //Rosemary Brown puzzle
                "pitch": 0,
                "yaw": -60,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "imageModal",
                "text":"Solve the puzzle, and enter the password in your card inventory"
                },
           		
           		{
                "pitch": 0.9,
                "yaw": 144.4,
                "type": "info",
                "URL": "https://google.com",
                "text":"hotspot 3"
           		},
                
            ]
        },
        "pano4": {
            "title": "Moyse Hall",
            "author": "McGill Library",
            "hfov": 200,
            "yaw": 5,
            "compass": true,
            "type": "equirectangular",
           
            "panorama": "https://i.imgur.com/s5RrK6d.jpeg",
            "hotSpots": [
                {
                    "pitch": -8,
                    "yaw": 75,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
            
                 {
                    "pitch": -8,
                    "yaw": -75,
                    "type": "scene",
                     "cssClass": "directionArrow",
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
        },
         "pano5": {
            "title": "Redpath Museum",
            "author": "McGill Library",
            "hfov": 200,
            "yaw": 0,
            "compass": true,
            "autoload": true,
            "type": "equirectangular",
           
            "panorama": "https://i.imgur.com/AAeUIbl.jpeg",
            "hotSpots": [
            
                {
                    "pitch": -2.1,
                    "yaw": 180,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                {
                //allie v. douglas puzzle
                "pitch": 0,
                "yaw": -60,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "imageModal",
                "text":"Solve the puzzle, and enter the password in your card inventory"
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
//modals
var modal  = document.getElementById("myModal");
var modalImage = document.getElementById("imageModal");
var modalImageCompare = document.getElementById("imageModalCompare");

//close buttons
var span = document.getElementsByClassName("close")[0];
var spanImage = document.getElementsByClassName("close1")[0];
var spanImage2 = document.getElementsByClassName("close2")[0];

//audio
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

spanImage2.onclick = function(){
    modalImageCompare.style.display = "none";
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