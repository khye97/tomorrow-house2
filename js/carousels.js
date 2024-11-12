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

const userGalleryMobile = tns({
  container: '.user-gallery.is-mobile .slider-list',
  navContainer: '.user-gallery.is-mobile .thumbnail-list',
  controls: false,
  gutter: 4,
  preventScrollOnTouch: true,
  edgePadding: 16,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
})

const userGalleryDesktop = tns({
  container: '.user-gallery.is-desktop .slider-list',
  navContainer: '.user-gallery.is-desktop .thumbnail-list',
  controls: true,
  controlsContainer: '.user-gallery.is-desktop .user-gallery-controls',
  gutter: 6,
  preventScrollOnTouch: true,
  edgePadding: 75,
  loop: false,
  arrowKeys: true,
  mouseDrag: true,
})
