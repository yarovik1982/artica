//  window.onload = function() {
//         var ArrImg = ['images/img1.jpg',
//          'images/img2.jpg',
//           'images/img3.jpg',
//            'images/img4.jpg',
//             'images/img5.jpg',
//              'images/img6.jpg',
//               'images/img7.jpg',
//                'images/img8.jpg'];
//         function my_click() {
//             var elem = document.createElement("img");
//             elem.setAttribute("src", ArrImg[0,7]);
//             document.getElementById("block__player").appendChild(elem);
//         };
// my_click()
//     };


//..................................................
//     window.onload = function() {
//   Arrimg = ['images/img1.jpg',
//          'images/img2.jpg',
//           'images/img3.jpg',
//            'images/img4.jpg',
//             'images/img5.jpg',
//              'images/img6.jpg',
//               'images/img7.jpg',
//                'images/img8.jpg'];
//   button = document.getElementById('action');
//   div = document.getElementById('player');

//   img = document.createElement('img');
//   player.appendChild(img);

//   button.onclick = function imgShow() {
//     img.src = Arrimg[0];
//   }
// }
//...............................................................
all_images = new Array (
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg",
"images/img5.jpg",
"images/img6.jpg",
"images/img7.jpg",
"images/img8.jpg");
let ImgNum = 0;
let ImgLength = all_images.length - 1;
let delay = 2500;
let lock = false;
let run;

function chgImg(direction) {
 if (document.images) {
  ImgNum = ImgNum + direction;
  if (ImgNum > ImgLength) { ImgNum = 0; }
  if (ImgNum < 0) { ImgNum = ImgLength; }
  document.slide_show.src = all_images[ImgNum];
 }
}

function auto() {
 if (lock == true) {
  lock = false;
  window.clearInterval(run);
 }
 else if (lock == false) {
  lock = true;
  run = setInterval("chgImg(1)", delay);
 }
}

