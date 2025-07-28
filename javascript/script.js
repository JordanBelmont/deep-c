const image = document.getElementById('advert')

const imageList = [
   "images/agent-orange.png",
   "images/red-room-resorts.png",
   "images/samedi-solutions.png",
]

let imageIndex = 0

function nextImage() {
   // Automatically move to next image
   imageIndex++
   const tmpImage = new Image();
   // Cycle through images
   if (imageIndex >= imageList.length) {
      imageIndex = 0
   }
   // Load next image before it shows
   tmpImage.src = imageList[imageIndex]
   tmpImage.addEventListener('load', () => {
      image.src = tmpImage.src
   })
}

// 8-second interval before image changes
window.setInterval(nextImage, 8000)

// Sidebar menu
document.addEventListener('DOMContentLoaded', () => {
   let category = document.querySelectorAll('.category-item a');

   category.forEach(categoryItem => {
      categoryItem.addEventListener('click', () => {
         const subCategoryList = categoryItem.nextElementSibling;
         subCategoryList.classList.toggle('active');
      });
   });
});