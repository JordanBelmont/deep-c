// Adverts

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

// Sidebar menu sub-headers
document.addEventListener('DOMContentLoaded', () => {
   let category = document.querySelectorAll('.category-item a');

   category.forEach(categoryItem => {
      categoryItem.addEventListener('click', () => {
         const subCategoryList = categoryItem.nextElementSibling;
         subCategoryList.classList.toggle('active');
      });
   });
});

// Page metadata with last modified dates
const pages = [
   { name: 'hinterkaifeck.html', lastModified: '2025-01-01T12:00:00Z' },
   { name: 'ai-box-experiment.html', lastModified: '2025-02-01T12:00:00Z' },
   { name: 'dyatlov-pass.html', lastModified: '2025-03-01T12:00:00Z' },
   { name: 'elisa-lam.html', lastModified: '2025-04-01T12:00:00Z' },
   { name: 'inunaki-village.html', lastModified: '2025-05-01T12:00:00Z' },
   { name: 'island-of-dolls.html', lastModified: '2025-06-01T12:00:00Z' },
   { name: 'ourang-medan.html', lastModified: '2025-07-01T12:00:00Z' },
   { name: 'robert-the-doll.html', lastModified: '2025-07-15T12:00:00Z' },
   { name: 'rokos-basilisk.html', lastModified: '2025-07-20T12:00:00Z' },
   { name: 'smiley-face-murders.html', lastModified: '2025-07-25T12:00:00Z' },
   { name: 'the-watcher.html', lastModified: '2025-07-28T12:00:00Z' }
];

// RANDOM BUTTON
const randomButton = document.querySelector('.random');
randomButton.addEventListener('click', () => {
   const randomIndex = Math.floor(Math.random() * pages.length);
   window.location.href = pages[randomIndex].name;
});

// TOP BUTTON
const topButton = document.querySelector('.top');
// Track visits to the current page
const currentPage = window.location.pathname;
if (pages.some(page => page.name === currentPage)) {
   let visitCounts = JSON.parse(localStorage.getItem('visitCounts') || '{}');
   visitCounts[currentPage] = (visitCounts[currentPage] || 0) + 1;
   localStorage.setItem('visitCounts', JSON.stringify(visitCounts));
}

topButton.addEventListener('click', () => {
   let visitCounts = JSON.parse(localStorage.getItem('visitCounts') || '{}');
   let maxVisits = 0;
   let topPage = pages[0].name; // Default to first page if no visits recorded

   // Find page with highest visit count
   pages.forEach(page => {
      const visits = visitCounts[page.name] || 0;
      if (visits > maxVisits) {
         maxVisits = visits;
         topPage = page.name;
      }
   });

   // Redirect to top visited page
   window.location.href = topPage;
});

// LATEST BUTTON
const latestButton = document.querySelector('.latest');

latestButton.addEventListener('click', () => {
   const latestPage = pages.reduce((latest, page) => {
      return !latest || new Date(page.lastModified) > new Date(latest.lastModified) ? page : latest;
   }, null);
   window.location.href = latestPage.name;
});

