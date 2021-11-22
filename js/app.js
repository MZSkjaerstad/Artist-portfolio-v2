/*************************** 1. MODELL - ARRAY *****************************/

const imageGallery = [
   {
      title: 'aligator',
      figure: {
         url: 'assets/images/gallery/aligator.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'animal floor',
      figure: {
         url: 'assets/images/gallery/animal-floors.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'dragon',
      figure: {
         url: 'assets/images/gallery/beardedDragon.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'bears',
      figure: {
         url: 'assets/images/gallery/bears.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'bunny',
      figure: {
         url: 'assets/images/gallery/bunny.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'animal wall',
      figure: {
         url: 'assets/images/gallery/animalWall.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'elephants',
      figure: {
         url: 'assets/images/gallery/elephants.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   },
   {
      title: 'hedgehog',
      figure: {
         url: 'assets/images/gallery/hedgehog.jpeg',
         alt: 'alt-text',
         figCaption: 'fig-text'
      },
      date: '09.11.95',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus non assumenda accusamus dolorum commodi eum, enim minima asperiores.'
   }
]

/*************************** 2. MODELL -> VIEW *******************************/






/*************************** 3. SCROLL FUNCTION *****************************/

function galleryContainerScroll() {
   const galleryContainerScroll = document.querySelector('.gallery__content-container');
   const scrollValue = Number(lastKnownPosition);

   galleryContainerScroll.scrollLeft = scrollValue;
   console.log(galleryContainerScroll.scrollLeft);
}





/************************* 4. GLOBAL EVENT-LISTENERS *****************************/

let lastKnownPosition = 0;
let ticking = false;

document.addEventListener('scroll', function(event) {
   lastKnownPosition = window.scrollY;
   if (!ticking) {
      window.requestAnimationFrame(function () {
         galleryContainerScroll(lastKnownPosition);
         ticking = false;
      })
      ticking = true;
   }
})

