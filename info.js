// function initCarousels() {
//     const carousels = document.querySelectorAll('.carousel');

//     carousels.forEach(carousel => {
//         const images = carousel.querySelectorAll('.carousel-image');
//         console.log('Carousel', index + 1, 'has', images.length, 'images');
//         const prevButton = carousel.querySelector('.prev');
//         const nextButton = carousel.querySelector('.next');
//         let currentIndex = 0;

//         function showImage(index) {
//             images.forEach((img, i) => {
//                 img.classList.toggle('active', i === index);
//             });
//         }

//         function nextImage() {
//             currentIndex = (currentIndex + 1) % images.length;
//             showImage(currentIndex);
//         }

//         function prevImage() {
//             currentIndex = (currentIndex - 1 + images.length) % images.length;
//             showImage(currentIndex);
//         }

//         nextButton.addEventListener('click', nextImage);
//         prevButton.addEventListener('click', prevImage);

//         showImage(currentIndex);

//         setInterval(nextImage, 5000);
//     });
// }

// document.addEventListener('DOMContentLoaded', initCarousels);



//   otro


function initCarousels() {
    const carousels = document.querySelectorAll('.image-carousel');

    carousels.forEach((carousel, index) => {
        const images = carousel.querySelectorAll('.carousel-image');
        console.log('Carousel', index + 1, 'has', images.length, 'images');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        showImage(currentIndex);

        setInterval(nextImage, 5000);
    });
}

document.addEventListener('DOMContentLoaded', initCarousels);