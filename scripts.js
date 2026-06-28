const photos = [
  'images/IMG-20251203-WA0076.jpg', 'images/IMG-20260301-WA0008.jpg','images/IMG-20260510-WA0077.jpg'];
let current = 0;
 
function switchphoto(){
  current = (current + 1) % photos.length;
  document.getElementById('profilePhoto').src = photos[current];
}