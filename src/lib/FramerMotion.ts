// For page transitions
export const PAGE_MOTIONS = {
  fade: {
    initial: 'pageInitial',
    animate: 'pageAnimate',
    exit: 'pageExit',
    variants: {
      pageInitial: { opacity: 0 },
      pageAnimate: { opacity: 1 },
      pageExit: { opacity: 0 },
    },
  },
  spring: {
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      when: 'afterChildren',
    },
    initial: { x: 300, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  },
}
