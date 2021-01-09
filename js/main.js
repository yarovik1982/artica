const xIcon = document.querySelector(".x-icon");
const arrowDown = document.querySelector("#arrow-down");
const blockPhotoStaff_1 = document.getElementById("staff-1");
const blockPhotoStaff_2 = document.getElementById("staff-2");
const blockPhotoStaff_3 = document.getElementById("staff-3");
const blockPhotoStaff_4 = document.getElementById("staff-4");
const myStoryTitle = document.querySelector("#my-story-title");
const myStoryText = document.querySelector("#my-story-text");
const myStoryIcons = document.querySelector("#my-story-icons");

xIcon.addEventListener("click", ()=>{
myStoryTitle.style.display = 'none';
myStoryText.style.display = 'none';
myStoryIcons.style.display = 'none';

let markerCordinate = document.querySelector("#marker");
switch(markerCordinate.style.left){ 
	case "11.5%":
		blockPhotoStaff_1.style.display = 'none';
		break;
	case "36.5%":
		blockPhotoStaff_2.style.display = "none";
		break;
	case "61.5%":
		blockPhotoStaff_3.style.display = "none";
		break;
	case "86.5%":
		blockPhotoStaff_4.style.display = "none";
		break;
	}
});

arrowDown.addEventListener("click", ()=>{
	document.getElementById('staff-1').style.display = 'block';
	document.getElementById('my-story-title').style.display = 'block';
document.getElementById('my-story-text').style.display = 'block';
document.getElementById('my-story-icons').style.display = 'block';

});

blockPhotoStaff_1.addEventListener("mousemove", ()=>{
	document.getElementById("marker").style.left = "11.5%";
});

blockPhotoStaff_2.addEventListener("mousemove", ()=>{
	document.getElementById("marker").style.left = "36.5%";
});

blockPhotoStaff_3.addEventListener("mousemove", ()=>{
	document.getElementById("marker").style.left = "61.5%";
});

blockPhotoStaff_4.addEventListener("mousemove", ()=>{
	document.getElementById("marker").style.left = "86.5%";
});