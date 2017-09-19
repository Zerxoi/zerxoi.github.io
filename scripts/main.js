// document.querySelector('img').onclick = function() {
	// var myImg = document.querySelector("img");
	// var myHeading = document.querySelector('h1');
	// if (myImg.getAttribute('src') === 'images/firefox-icon.png'){
		// myImg.setAttribute('src', 'images/dogezilla.png');
		// myImg.setAttribute('width', 256);
		// myHeading.innerHTML = 'Hello Dogezilla!';
	// }else{
		// myImg.setAttribute('src', 'images/firefox-icon.png');
		// myHeading.innerHTML = 'Hello Mozilla!';
	// }
// }

function imgChange()
{
	var myImg = document.querySelector("img");
	var myHeading = document.querySelector('h1');
	if (myImg.getAttribute('src') === 'images/firefox-icon.png')
	{
		myImg.setAttribute('src', 'images/dogezilla.png');
		myImg.setAttribute('width', 256);
		myHeading.innerHTML = 'Hello Dogezilla!';
	}
	else
	{
		myImg.setAttribute('src', 'images/firefox-icon.png');
		myHeading.innerHTML = 'Hello Mozilla!';
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function()
{
	setUserName();
}

document.querySelector('img').onclick = function(){
	imgChange();
}

if(!localStorage.getItem('name'))
{
  setUserName();
}
else
{
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Is it something wrong with Mozilla? ' + storedName;
}
