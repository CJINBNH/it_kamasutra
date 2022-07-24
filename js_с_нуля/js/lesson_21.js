// find elements
var showPrefBtn = document.getElementById('show-prev');
var showNextBtn = document.getElementById('show-next');
var slideImage = document.getElementById('slide-img');
// subscribes to events
showPrefBtn.addEventListener('click', onShowPrefBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);
// create images array
var imagesUrls = [];
imagesUrls.push('https://www.gran-turismo.com/gtsport/livery/8584494213381522433_23.jpg');
imagesUrls.push('https://hips.hearstapps.com/toc.h-cdn.co/assets/16/14/3200x1600/landscape-1459816624-1954-mercedes-300sl-gullwing-a.jpg?resize=480:*');
imagesUrls.push('https://di-uploads-pod16.dealerinspire.com/kendalldodgechryslerjeepram1/uploads/2018/07/1969-Dodge-Charger-Kendall.jpg');
imagesUrls.push('https://wallpaperaccess.com/full/86586.jpg');

var currentImigeIndex = 0;
slideImage.src =imagesUrls[currentImigeIndex];






// functions definitions
function onShowPrefBtnClick() {
    currentImigeIndex--;
    slideImage.src =imagesUrls[currentImigeIndex];
}
function onShowNextBtnClick() {
    currentImigeIndex++;
    slideImage.src =imagesUrls[currentImigeIndex];
}