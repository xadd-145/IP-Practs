//PROMISE
//SCRIPT.JS
let button = document.getElementById("submit")
let setup = document.getElementsByClassName("setup")[0]
let delivery = document.getElementsByClassName("delivery")[0]
let s = 0

const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'

button.addEventListener("click", joke)



function joke(){
  let promise = new Promise(function(res, rej){
    fetch(url).then(response=> 
      s=response.status)
    if(s==200){
      res()
    }
    else{
      rej()
    }
  })

  promise.then(function(){
    setup.innerHTML = data.setup
    delivery.innerHTML = data.delivery
  }).catch(function(){
    setup.innerHTML = "ERROR"
    delivery.innerHTML = "ERROR"
  })
  
      
}

//INDEX.HTML
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
<!--   <input type="submit" value="Submit" id="submit"> -->
  <button id="submit">Submit</button>
  
  <p class="setup">Setup</p>
  <p class="delivery">Delivery</p>
</body>
  <script src="script.js"></script>

</html>
