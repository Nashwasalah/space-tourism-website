
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////Get Element ////////////////////////////////

var destinationContainer= document.getElementById("destinationContainer")
var innerContainer =document.getElementById("innerContainer")
var CrewMainContainer = document.getElementById("CrewMainContainer")
var TechnologyMainContainer = document.getElementById("TechnologyMainContainer")

var HOMEbtn= document.getElementById("HOME")
var DESTINATIONbtn =document.getElementById("DESTINATION")
var CREWbtn = document.getElementById("CREW")
var TECHNOLOGYbtn = document.getElementById("TECHNOLOGY")
var hamburgerButton =document.getElementById("hamburgerButton")
var hamburgericon =document.getElementById("hamburgericon")
var MobileNavMenu = document.getElementById("MobileNavMenu")
var MainContainer =document.getElementById("MainContainer")
var NavBarDiv =document.getElementById("NavBarDiv")
var closeButton =document.getElementById("closeButton")
/////////////////////////////////////////////////////////////

destinationContainer.style.display='none'
CrewMainContainer.style.display='none'
 TechnologyMainContainer.style.display='none'



  ////////////////////////////////////////////////////////////

 DESTINATIONbtn.onclick =function(){
    innerContainer.style.display='none'
    CrewMainContainer.style.display='none'
    TechnologyMainContainer.style.display='none'
    destinationContainer.style.display='block'
    document.body.style.backgroundImage ="url(/assets/destination/background-destination-desktop.jpg)"
}
//////////////////////////////////////////////////////////
ExploreButton.onclick =function(){
    innerContainer.style.display='none'
    CrewMainContainer.style.display='none'
    TechnologyMainContainer.style.display='none'
    destinationContainer.style.display='block'
    document.body.style.backgroundImage ="url(/assets/destination/background-destination-desktop.jpg)"
}
CREWbtn.onclick =function(){
    destinationContainer.style.display='none'
    innerContainer.style.display='none'
    TechnologyMainContainer.style.display='none'
    CrewMainContainer.style.display='block'
    document.body.style.backgroundImage ="url(/assets/crew/background-crew-desktop.jpg)"

}

HOMEbtn.onclick =function(){
    destinationContainer.style.display='none'
    innerContainer.style.display='block'
    innerContainer.style.paddingTop='20%'
    CrewMainContainer.style.display='none'
    TechnologyMainContainer.style.display='none'
    document.body.style.backgroundImage ="url(/assets/home/background-home-desktop.jpg)"
    




     
     if(document.body.style.width <=768){
        document.body.style.backgroundImage ="url(/assets/home/background-home-tablet.jpg)"
    }
     else {
        document.body.style.backgroundImage ="url(/assets/home/background-home-mobile.jpg)"  
    }
    
    
}

TECHNOLOGYbtn.onclick =function(){
    TechnologyMainContainer.style.display='block'
    destinationContainer.style.display='none'
    innerContainer.style.display='none'
    CrewMainContainer.style.display='none'
    document.body.style.backgroundImage ="url(/assets/technology/background-technology-desktop.jpg)"
}


///////////////////////////////destination////////////////////////////////////////////
var MARSbtn = document.getElementById("MARS")
var MOONbtn = document.getElementById("MOON")
var EUROPAbtn = document.getElementById("EUROPA")
var TITANbtn = document.getElementById("TITAN")

var MOONLABLE=document.getElementById("MOONLABLE")
var MoonParagraph=document.getElementById("MoonParagraph")
var distanceKM=document.getElementById("distanceKM")
var TIME=document.getElementById("TIME")
var MoonImage=document.getElementById("MoonImage")

MARSbtn.onclick = function(){
    MOONLABLE.innerText ='MARS'
    MoonParagraph.innerText ='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    distanceKM.innerText ='225 MIL. km'
    TIME.innerText ='9 months'
    MoonImage.src ='/assets/destination/image-mars.png'

}

MOONbtn.onclick = function(){
    MOONLABLE.innerText ='MOON'
    MoonParagraph.innerText ='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
    distanceKM.innerText ='384,400 km'
    TIME.innerText ='3 days'
    MoonImage.src ='/assets/destination/image-moon.png'
}

EUROPAbtn.onclick = function(){
    MOONLABLE.innerText ='EUROPA'
    MoonParagraph.innerText =' The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
    distanceKM.innerText ='628 MIL. km'
    TIME.innerText ='3 years'
    MoonImage.src ='/assets/destination/image-europa.png'
}

TITANbtn.onclick = function(){
    MOONLABLE.innerText ='TITAN'
    MoonParagraph.innerText =' The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
    distanceKM.innerText ='1.6 BIL. km'
    TIME.innerText ='7 years'
    MoonImage.src ='/assets/destination/image-titan.png'
}

////////////////////////////Crew/////////////////////////////////

var Commanderbtn = document.getElementById("Commander")
var MissionSpecialistbtn = document.getElementById("MissionSpecialist")
var PILOTbtn = document.getElementById("PILOT")
var FlightEngineerbtn = document.getElementById("FlightEngineer")

var crewPosition = document.getElementById("crewPosition")
var crewName = document.getElementById("crewName")
var Crewinformation = document.getElementById("Crewinformation")
var CrewImage = document.getElementById("CrewImage")

MissionSpecialistbtn.onclick = function(){
    crewPosition.innerText ='MISSION SPECIALIST'
    crewName.innerText =' MARK SHUTTLEWORTH'
    Crewinformation.innerText ='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    CrewImage.src ='/assets/crew/image-mark-shuttleworth.png'
}
Commanderbtn.onclick = function(){
    crewPosition.innerText ='COMMANDER'
    crewName.innerText =' DOUGLAS HURLEY'
    Crewinformation.innerText ='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    CrewImage.src ='/assets/crew/image-douglas-hurley.png'
}

PILOTbtn.onclick = function(){
    crewPosition.innerText ='PILOT '
    crewName.innerText ='VICTOR GLOVER'
    Crewinformation.innerText ='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    CrewImage.src ='/assets/crew/image-victor-glover.png'
}

FlightEngineerbtn.onclick = function(){
    crewPosition.innerText ='FLIGHT ENGINEER '
    crewName.innerText ='Anousheh Ansari'
    Crewinformation.innerText ='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    CrewImage.src ='/assets/crew/image-anousheh-ansari.png'
}


/////////////////////////Technology//////////////////////////////

var firstBtn = document.getElementById("firstBtn")
var secondBtn = document.getElementById("secondBtn")
var ThirdBtn = document.getElementById("ThirdBtn")

var Technologylable1 = document.getElementById("Technologylable1")
var Technologylable2 = document.getElementById("Technologylable2")
var TechnologyParagraph = document.getElementById("TechnologyParagraph")
var TechnologyImage = document.getElementById("TechnologyImage")


firstBtn.onclick = function(){
    firstBtn.style.background ='white'
    firstBtn.style.color ='#0B0D17'
    secondBtn.style.background ='#0B0D17'
    ThirdBtn.style.background ='#0B0D17'
    secondBtn.style.color ='white'
    ThirdBtn.style.color ='white'
    Technologylable1.innerText ='THE TERMINOLOGY…'
    Technologylable2.innerText ='LAUNCH VEHICLE'
    TechnologyParagraph.innerText ='A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!'
    TechnologyImage.src ='/assets/technology/image-launch-vehicle-portrait.jpg'
}

secondBtn.onclick = function(){
    secondBtn.style.background ='white'
    secondBtn.style.color ='#0B0D17'
    firstBtn.style.background ='#0B0D17'
    ThirdBtn.style.background ='#0B0D17'
    firstBtn.style.color ='white'
    ThirdBtn.style.color ='white'

    Technologylable1.innerText ='THE TERMINOLOGY…'
    Technologylable2.innerText ='SPACEPORT'
    TechnologyParagraph.innerText ='A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. '
    TechnologyImage.src ='/assets/technology/image-spaceport-portrait.jpg'
}

ThirdBtn.onclick = function(){
    ThirdBtn.style.background ='white'
    ThirdBtn.style.color ='#0B0D17'
    firstBtn.style.background ='#0B0D17'
    secondBtn.style.background ='#0B0D17'
    firstBtn.style.color ='white'
    secondBtn.style.color ='white'

    Technologylable1.innerText ='THE TERMINOLOGY…'
    Technologylable2.innerText ='SPACE CAPSULE'
    TechnologyParagraph.innerText ='A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you wll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    TechnologyImage.src ='/assets/technology/image-space-capsule-landscape.jpg'
}




///////////////////////////Mobile Humburger Menue/////////////////////////////////////
hamburgerButton.onclick =function(){

    if(NavBarDiv.style.display==='flex'){
       NavBarDiv.style.display='none'
    }
    else{
       NavBarDiv.style.display ='flex'
       closeButton.style.display='flex'
       closeButton.style.alignSelf='end'
       closeButton.onclick =function(){
           NavBarDiv.style.display='none'
       }
    }
  

}

////////////////////////////////////////////////////////////























///////////////////////////////////////////////////////////////////////////////
// var destination =[
// {
// MoonImage:"/assets/destination/image-mars.png",
// MoonName:"Moon",
// paragraph:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
// DistanceTitle:"AVG. DISTANCE",
// Distance:"384,400 km",
// TimeTitle:"Est. travel time",
// Time:"3 days"
// },

// {
//     MoonImage:"/assets/destination/image-moon.png",
//     MoonName:"Marse",
//     paragraph:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
//     DistanceTitle:"AVG. DISTANCE",
//     Distance:"225 MIL. km",
//     TimeTitle:"Est. travel time",
//     Time:"9 months"
// },

// {
//     MoonImage:"/assets/destination/image-europa.png",
//     MoonName:"EUROPA",
//     paragraph:" The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
//     DistanceTitle:"AVG. DISTANCE",
//     Distance:"628 MIL. km",
//     TimeTitle:"Est. travel time",
//     Time:"3 years"
    
// },
// ]

