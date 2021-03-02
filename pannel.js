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
            "yaw": 15,
            "autoLoad": true,
            "horizonRoll": -2.5,//added to correct non-level panorama
            "compass": true,
            "type": "equirectangular",
            "panorama": "https://i.imgur.com/oSC3BEj.jpg",
            "hotSpots": [
               {//welcome hotspot - sound works. 
                    "yaw": -30,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "clickHandlerFunc": playAudio,
                    "clickHandlerArgs": "lowerWelcomeAudio",
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
                }
           
            ]
        },
        "pano2": {
            "title": "Molson Stadium",
            "author": "McGill Library",
            "hfov": 300,
            "pitch": -3,
            "yaw": 17,
            "compass": true,
            "autoLoad": true,
            "type": "equirectangular",
            //image of the panorama
           "panorama": "https://i.imgur.com/SQnSsQt.jpeg",
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
                  {//welcome hotspot 
                    "yaw": -2.1,
                    "pitch": 0,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "clickHandlerFunc": playMolsonAudio,
                    "clickHandlerArgs": "molsonAudio",
                    "text": "Welcome to Molson Stadium",
                },
                /*commented out bc i don't think we need it{
                    "pitch": -2.1,
                    "yaw": 15,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Birks Reading Room",
                    "sceneId": "pano3"
                },*/
            	{//phil map Puzzle
                "pitch":-5,
                "yaw": 180,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalPhilMap",
                "text":"Solve the puzzle, and enter the password in your card inventory to unlock this teammate."
            },
                {
                //Daniel Compare Puzzle
                "pitch": 0,
                "yaw": 60,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "imageModalCompare",
                "text":"Solve the puzzle, and enter the password in your card inventory to unlock this teammate."
            },
                
                {//easter egg percival molson
                    "pitch": 9.4,
                    "yaw": 102.6,
                    "type": "info",
                    "cssClass": "infoHotspot",
                    "clickHandlerFunc": openWindowFunc,
                    "clickHandlerArgs": "modalPercival",
                    "text":"Why Molson Stadium?"
                },
                /*extras for easter eggs{
                    "pitch": 0.9,
                    "yaw": 144.4,
                    "type": "info",
                    "clickHandlerFunc": passWord,
                    "clickHandlerArgs": "hotspot3",
                }*/
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
                 I don't think we need this scene link. {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "cssClass": "directionArrow",
                    "text": "To Molson Stadium",
                    "sceneId": "pano2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },*/
                {//welcome hotspot birks
                    "yaw": -2.1,
                    "pitch": 0,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "clickHandlerFunc": playBirksAudio,
                    "clickHandlerArgs": "birksAudio",
                    "text": "Welcome to Birks Reading Room",
                },
                {
                    "pitch": -2.1,
                    "yaw": 45,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
             
                {//beryl jigsaw external window
                "pitch": 0.9,
                "yaw": 150,
                "type": "info",
                "cssClass": "hotspotPuzzleImage",
                "URL": "https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?url=aHR0cHM6Ly9pLmltZ3VyLmNvbS93WXJvM3ZYLmpwZ18obm9fcHJldmlld180KV8obm9wPTUwKQ~~&cred=TWNHaWxsIExpYnJhcnk~&color=white",
                "text":"Solve the puzzle, and find the key hidden underneath the password in the final image."
           		},
                
                
                {//easter egg1
                "pitch": 0.9,
                "yaw": 20,
                "type": "info",
                "cssClass": "easterEgg1",
                 "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalEgg1",
                "text":"Birk's Chapel"
           		},
           		
           		{ //Rosemary Brown puzzle 
                "pitch": -5,
                "yaw": 212,
                "type": "info",
                "cssClass": "hotspotPuzzleImage",
                "text":"Solve the puzzle, and enter the password in your card inventory",
                "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalRose"
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
                {//welcome hotspot  
                    "yaw": -2.1,
                    "pitch": -30,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "clickHandlerFunc": playMoyseAudio,
                    "clickHandlerArgs": "moyseAudio",
                    "text": "Welcome to Moyse Hall",
                },
                
                {
                    "pitch": -2.1,
                    "yaw": 0,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Lower Campus",
                    "sceneId": "pano1"
                },
                /*directional hotspots not necessarily needed, but save for re-deployment if beta testing suggests they should be there.
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
                    "pitch": -8,
                    "yaw": -75,
                    "type": "scene",
                     "cssClass": "directionArrow",
                    "text": "To Birks Reading Room",
                    "sceneId": "pano3"
                },*/
                 {//Bertha puzzle
                "pitch": 0.9,
                "yaw": 100,
                "type": "info",
                "cssClass": "hotspotPuzzleImage",
                "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalMyCipher",
                "text":"Solve the puzzle"
           		},
           		
           		{//barbara jones puzzle - potato puzzle
                "pitch": 0.9,
                "yaw": -100,
                "type": "info",
                "cssClass": "hotspotPuzzleImage",
                "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalPotato",
                "text":"Solve the puzzle, and enter the password in your card inventory to unlock this teammate."
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
                //Vibert douglas puzzle
                "pitch": 90,
                "yaw": 0,
                "type": "info",
               "cssClass": "hotspotPuzzleImage",
               "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "imageModal",
                "text":"Solve the puzzle, and enter the password in your card inventory"
                },
                {
                //Harriet Brooks puzzle
                "pitch": 0,
                "yaw": -100,
                "type": "info",
                "cssClass": "hotspotPuzzleImage",
                "clickHandlerFunc": openWindowFunc,
                "clickHandlerArgs": "modalBrooksPuzzle",
                "text":"Solve the puzzle, and enter the password in your card inventory to unlock this teammate."
            },
            {//'welcomeHotspot' with the image of the martlet to appear in the bottom left of every landing view. I want an info box to appear on click. How do we make that happen?
                    "pitch": -15,
                    "yaw": -30,
                    "type": "info",
                    "cssClass": "welcomeHotspot",
                    "clickHandlerFunc": playAudioMuseum,
                    "clickHandlerArgs": "redpathAudio",
                    "text": "Welcome to Redpath Museum"
                },
               
           	
            ]
        }
        
    
}});

//global vars
//modals
var modal  = document.getElementById("myModal");
var modalImage = document.getElementById("imageModal");
var modalImageCompare = document.getElementById("imageModalCompare");
var modalPhilMap = document.getElementById("modalPhilMap");
var modalBrooksPuzzle = document.getElementById("modalBrooksPuzzle");
var modalMyJigsaw = document.getElementById("modalMyJigsaw");
var modalMyCipher = document.getElementById("modalMyCipher");
var modalRose = document.getElementById("modalRose");
var modalPotato = document.getElementById("modalPotato");
var modalEgg1 = document.getElementById("modalEgg1");
var modalPercival = document.getElementById("modalPercival");



//close buttons
var span = document.getElementsByClassName("close")[0];
var spanImage = document.getElementsByClassName("close1")[0];
var spanImage2 = document.getElementsByClassName("close2")[0];
var spanPhilClose = document.getElementsByClassName("close3") [0];
var spanBrooksClose = document.getElementsByClassName("close4") [0];
var spanJigsawClose = document.getElementsByClassName("close5") [0];
var spanCipherClose = document.getElementsByClassName("close6") [0];
var spanEgg1Close = document.getElementsByClassName("close7") [0];
var spanRoseClose = document.getElementsByClassName("close8")[0];
var spanPotatoClose = document.getElementsByClassName("close9")[0];
var spanPercivalClose = document.getElementsByClassName("close10")[0];



//audio
var audio1 = document.getElementById("audio");
//var lowerWelcomeAudio = document.getElementById("lowerWelcomeAudio");
var redpathAudio = document.getElementById("redpathAudio");
var moyseAudio = document.getElementById("moyseAudio");
var molsonAudio = document.getElementById("molsonAudio");
var birksAudio = document.getElementById("birksAudio");




var a1IsPlaying = false;
var museumAudioIsPlay = false;
var moyseAudioIsPlay = false;
var molsonAudioIsPlay = false;
var birksAudioIsPlay = false;



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

function playAudioMuseum(hotspotDiv, args){
    if(museumAudioIsPlay){
        redpathAudio.pause();
        museumAudioIsPlay = false;
    } else{
        redpathAudio.play();
        museumAudioIsPlay = true;
    }
}

function playMoyseAudio(hotspotDiv, args){
    if(moyseAudioIsPlay){
        moyseAudio.pause();
       moyseAudioIsPlay = false;
    } else{
        moyseAudio.play();
        moyseAudioIsPlay = true;
    }
}

function playMolsonAudio(hotspotDiv, args){
    if(molsonAudioIsPlay){
        molsonAudio.pause();
       molsonAudioIsPlay = false;
    } else{
        molsonAudio.play();
        molsonAudioIsPlay = true;
    }
}

function playBirksAudio(hotspotDiv, args){
    if(birksAudioIsPlay){
        birksAudio.pause();
       birksAudioIsPlay = false;
    } else{
        birksAudio.play();
        birksAudioIsPlay = true;
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

spanPhilClose.onclick = function(){
    modalPhilMap.style.display = "none";
}

spanBrooksClose.onclick = function(){
    modalBrooksPuzzle.style.display = "none";
}
spanJigsawClose.onclick = function(){
    modalMyJigsaw.style.display = "none";
}
spanCipherClose.onclick = function(){
    modalMyCipher.style.display = "none";
}
//spanEgg1Close.onclick = function(){
//    modalEgg1.style.display = "none";
//}
spanRoseClose.onclick = function(){
    modalRose.style.display = "none";
}

spanPotatoClose.onclick = function(){
    modalPotato.style.display = "none";
}

spanPercivalClose.onclick = function(){
    modalPercival.style.display = "none";
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