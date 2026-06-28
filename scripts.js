const photos = [
  'images/20260616_211011.jpg', 'images/20260616_212011.png','images/20260628_015419.png'];
let current = 0;
 
function switchphoto(){
  current = (current + 1) % photos.length;
  document.getElementById('profilePhoto').src = photos[current];
}
