const productCarousel = tns({
  container: '.product-carousel .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  // autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  gutter: 1,
  // items: 1,
  // slideBy: 'page',
})

const userGallery = tns({
  container: '.user-gallery .slider-list',
  navContainer: '.user-gallery .thumbnail-list',
  controls: false,
  controlsContainer: '.user-gallery-controls',
  gutter: 4,
  preventScrollOnTouch: true,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
  responsive: {
    768: {
      gutter: 6,
      controls: true,
      edgePadding: 75,
    },
  },
})
