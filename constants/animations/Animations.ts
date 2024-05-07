const slideInRightVariants = {
    hidden: { x: '100%' }, // Element starts off-screen to the right
    visible: { x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Slides to its normal position
  };

const fadeOutLeftVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } }, // Fades out and slides left
};

const slideInUpVariants = {
    hidden: { y: '100%' }, // Element starts off-screen below
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Slides up to its normal position
  };

  const fadeOutDownVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '100%', transition: { duration: 0.5, ease: 'easeInOut' } }, // Fades out and slides down
  };

  const zoomInVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // Zooms in to normal size
  };

  const zoomOutVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Zooms out to smaller size
  };

  const flipInVariants = {
    hidden: { rotateY: 180 },
    visible: { rotateY: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Flips in from 180 degrees
  };

  const flipOutVariants = {
    visible: { rotateY: 0 },
    hidden: { rotateY: 180, transition: { duration: 0.5, ease: 'easeInOut' } }, // Flips out to 180 degrees
  };

  const rotateInVariants = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Rotates in from -180 degrees
  };

  const rotateOutVariants = {
    visible: { rotate: 0 },
    hidden: { rotate: 180, transition: { duration: 0.5, ease: 'easeInOut' } }, // Rotates out to 180 degrees
  };

  const scaleInVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // Scales in from 0.5
  };

  const scaleOutVariants = {
    visible: { scale: 1 },
    hidden: { scale: 0.5, transition: { duration: 0.5, ease: 'easeInOut' } }, // Scales out to 0.5
  };

  const slideOutRightVariants = {
    visible: { x: 0 },
    hidden: { x: '100%', transition: { duration: 0.5, ease: 'easeInOut' } }, // Slides off to the right
  };

  const slideOutLeftVariants = {
    visible: { x: 0 },
    hidden: { x: '-100%', transition: { duration: 0.5, ease: 'easeInOut' } }, // Slides off to the left
  };

  const slideInDownVariants = {
    hidden: { y: '-100%' },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Slides down to its normal position
  };

  const bounceInVariants = {
    hidden: { y: '-100%' },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 10 },
    }, // Bounces in from off-screen above
  };

  const bounceOutVariants = {
    visible: { y: 0 },
    hidden: {
      y: '-100%',
      transition: { type: 'spring', stiffness: 50, damping: 10 },
    }, // Bounces out to off-screen above
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // Fades in to normal opacity
  };

  const fadeOutVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }, // Fades out to opacity of 0
  };

  const wiggleVariants = {
    hidden: { x: 0 },
    visible: {
      x: [0, 10, -10, 10, -10, 10, -10, 0],
      transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  export default {
    slideInDownVariants,
    slideInRightVariants,
    scaleOutVariants,
    scaleInVariants,
    slideInUpVariants,
    slideOutLeftVariants,
    slideOutRightVariants,
    fadeInVariants,
    fadeOutDownVariants,
    fadeOutLeftVariants,
    fadeOutVariants,
    flipInVariants,
    flipOutVariants,
    rotateInVariants,
    rotateOutVariants,
    bounceInVariants,
    bounceOutVariants,
    wiggleVariants,
    zoomInVariants,
    zoomOutVariants
  }
  