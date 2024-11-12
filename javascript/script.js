const image = document.getElementById('advert')

const imageList = [
   "images/agent-orange.png",
   "images/red-room-resorts.png",
   "images/samedi-solutions.png",
]

let imageIndex = 0

function nextImage() {
   imageIndex++

   const tmpImage = new Image();

   if (imageIndex >= imageList.length) {
      imageIndex = 0
   }
   // set the src of the image to the url of the current image in imageList
   tmpImage.src = imageList[imageIndex]

   tmpImage.addEventListener('load', () => {
      image.src = tmpImage.src
   })

   console.log(tmpImage);
}

window.setInterval(nextImage, 8000)