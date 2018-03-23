//Projects
var projects =
    [
      {
        projLink: "https://infinite-temple-83999.herokuapp.com/",
        imgUrl: "http://1000logos.net/wp-content/uploads/2017/05/Color-Reddit-Logo.jpg",
        title: "Reddit Image Api",
        notes:"This app gets the json data of pictures on reddit using the Reddit API and changes app div to that image."
      },{
        projLink: "https://codepen.io/Jdhansen41/full/rdNGoL/",
        imgUrl: "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb",
        title: "Destination Chooser",
        notes: "Don't know where to travel to next? Let us choose for you! We wont just choose from the usual Rome, London, Paris etc, instead we'll calculate a set of random coordinates and pick a city close to them using the Geonames API. Other info including population, location, wiki link, and flight searcher link will be displayed as well."
      },
      {
        projLink: "https://stormy-citadel-71019.herokuapp.com/",
        imgUrl: "http://www.travellerspit.com/wp-content/uploads/2017/06/Nature_Wallpapers_Landscape_Wallpapers-31.jpg",
        title: "Yelp Camp",
        notes:"This is a basic REST website using node.js / express / mongoDB. Users can create accounts and make campground posts, comments. Hosted on Heroku server. Created using cloud9."
      },
      {
        projLink: "https://codepen.io/Jdhansen41/pen/MQQyEL",
        imgUrl: "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1730645.MQQyEL.f6485c82-50d5-41f8-9ea5-b7410f63bfd1.png",
        title: "Pomodoro Clock",
        notes:"CodePen Pomodoro Clock. Lets user set intervals for work/rest, alerts user when time to switch."
      },
      {
        projLink: "https://codepen.io/Jdhansen41/pen/wymaJe",
        imgUrl: "https://cdn.dribbble.com/users/380540/screenshots/1778330/simon.jpg",
        title: "Simon Says",
        notes: "This is a Simon Says game created using jQuery on CodePen. Randomly produces moves the user must match to win."
      }
    ]

//Constructor function for projects, automatically adds it to projects array
function Project(pageLink, url, title, message){
  this.projLink = pageLink;
  this.imgUrl = url;
  this.title = title;
  this.notes = message;
  //add object to projects array
  projects.push(this);
}

var twitch = new Project("https://codepen.io/Jdhansen41/pen/JpWWaL","http://cdn.sysprobs.com/wp-content/uploads/2016/05/TwitchTV-for-Kodi-2016_thumb.jpg", "Twitch Users API", "This app utilizes the Twitter API to see if users online. If so, show what game they're playing.");

var toDo = new Project("https://codepen.io/Jdhansen41/pen/VQRjWz","https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg","To-do List", "This app is a simple to-do list that lets users create and modify a list of things to do");

var wiki = new Project("https://codepen.io/Jdhansen41/pen/QQEByW", "https://cdn4.iconfinder.com/data/icons/miu-hexagon-shadow-social/60/wikipedia-hexagon-shadow-social-media-512.png","Wiki API", "This app utilizes the Wikipedia API to search for articles and display results. Also let's the user click to get a random article.");

var boxedBreath = new Project("https://codepen.io/Jdhansen41/full/EQOaKr/", "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1730645.EQOaKr.small.69f4cce5-bc11-4715-9cbe-b6400b2033f8.png", "Boxed Breathing", "This is a simple app I built for the boxed breathing technique, a useful tool for meditation/relaxation. ")

var calc = new Project("https://codepen.io/Jdhansen41/pen/WMZXZG","https://www.thyroid.org/wp-content/uploads/2016/10/calculator-icon-blue-2.png", "Calculator", "Simple jQuery calculator for addition, subtraction, division, multiplication.");



$(document).ready(function(){
  
  
  $("a").click(function(){
    $("#toggleMenu").prop("checked", false);
  });
  
  //load projects
  for(var i=0; i<projects.length; i++){    
    $("#projectArea").append("<div class='col-sm-6 col-md-4 col-lg-4'> <div class='card mb-3'><a href="+projects[i].projLink+" target='_blank'><img class='card-img-top' src="+projects[i].imgUrl+"></a><div class='card-body'><h5 class='card-title'>"+projects[i].title+"</h5><hr><p class='card-text'>"+projects[i].notes+"</p><p class='card-text'><small class='text-muted'>Last updated Feb 23, 2018</small></p></div></div></div>");
  } 
});