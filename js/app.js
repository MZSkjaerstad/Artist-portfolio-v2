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

function insertGallery() {
   const galleryContentContainer = document.querySelector(".gallery__content-container");
   const GalleryScrollLength = document.querySelector(".scroll-length__content");

   imageGallery.forEach(work => {

      /* create */
      const artwork = document.createElement("div");
      const figure = document.createElement("figure");
      const information = document.createElement("div");
      const scrollLength = document.createElement("div");

      /* figure */
      function insertFigureElements() {

         /* create */
         const img = document.createElement("img");
         const figCaption = document.createElement("figcaption");

         /* name */
         img.classname = "artwork__img";
         figCaption.className = "artwork__figcaption";

         /* value */
         img.src = work.figure.url;
         img.alt = work.figure.alt;
         figCaption.innerText = work.figure.figCaption;

         /* append */
         figure.appendChild(img);
         figure.appendChild(figCaption);
      }

      insertFigureElements()

      /* information */
      function insertInformationElements() {

         /* create */
         const title = document.createElement("div");
         const details = document.createElement("div");

         function insertDetailsElements() {

            /* create */
            const date = document.createElement("div");
            const description = document.createElement("div");

            /* name */
            date.className = "artwork__date";
            description.className = "artwork__description";

            /* value */
            date.innerText = work.date;
            description.innerText = work.description;

            /* append */
            details.appendChild(date);
            details.appendChild(description);
         }

         insertDetailsElements()

         /* name */
         title.className = "artwork__title";
         details.className = "artwork__details";

         /* value */
         title.innerText = work.title;

         /* append */
         information.appendChild(title);
         information.appendChild(details);
      }

      insertInformationElements()

      /* name */
      artwork.className = "artwork";
      figure.className = "artwork__figure";
      information.className = "artwork__information";
      scrollLength.className = "scroll-length__block";

      /* append */
      artwork.appendChild(figure);
      artwork.appendChild(information);
      galleryContentContainer.appendChild(artwork);
      GalleryScrollLength.appendChild(scrollLength);
   })

   /* create */
   const finalScroll = document.createElement("div");

   /* name */
   finalScroll.className = "gallery__final-scroll";

   /* append*/
   galleryContentContainer.appendChild(finalScroll);
}

insertGallery()





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

