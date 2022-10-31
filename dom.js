//DOM
//HTML FILE
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  Hello world
  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->


  <div class="c1">
    <p>
      A smartphone is a portable computer device that combines mobile telephone and computing functions into one unit.
      They are distinguished from feature phones by their stronger hardware capabilities and extensive mobile operating
      systems, which facilitate wider software, internet (including web browsing over mobile broadband), and multimedia
      functionality (including music, video, cameras, and gaming), alongside core phone functions such as voice calls
      and
      text messaging.
    </p>
  </div>
  <div class="c2">
    <p id="p_id">
      Smartphones typically contain a number of metal–oxide–semiconductor (MOS) integrated circuit (IC) chips, include
      various sensors that can be leveraged by pre-included and third-party software (such as a magnetometer, proximity
      sensors, barometer, gyroscope, accelerometer and more), and support wireless communications protocols (such as
      Bluetooth, Wi-Fi, or satellite navigation).
    </p>
  </div>

  <div class="c3">
    <p>
      Early smartphones were marketed primarily towards the enterprise market, attempting to bridge the functionality of
      standalone personal digital assistant (PDA) devices with support for cellular telephony, but were limited by their
      bulky form, short battery life, slow analog cellular networks, and the immaturity of wireless data services
    </p>
  </div>
  <ul>
    <li>item1</li>
    <li>item1</li>
    <li>item1</li>
  </ul>

  <ul>
    <li class="l1">Obj1</li>
    <li class="l1">Obj2</li>
    <li class="l1">Obj3</li>
  </ul>
  <script src="script.js"></script>
  <!--   <script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script> -->
</body>

</html>

//JS FILE
let para1= document.getElementsByClassName("c1")[0];
para1.style.backgroundColor = "blue";

let para2 = document.getElementById("p_id");
para2.style.fontSize = 10;

let para3 = document.getElementsByTagName("div")[2];
para3.style.fontWeight = "bold";

let ul1 = document.querySelector("ul")
ul1.style.listStyleType = "square"
ul1.style.fontStyle = "italic"

for(let i=0;i<3;i++){
  let li = document.querySelectorAll(".l1")[i]
  li.style.color = "green"
}
