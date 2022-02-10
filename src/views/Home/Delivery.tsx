import React, { FC, useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import { useKeenSlider } from 'keen-slider/react'

const MOCK_DELIVERIES = [
  { id: 0, image: '/home/charts.png' },
  { id: 1, image: '/home/new-feed.png' },
  { id: 2, image: '/home/pay-store.png' },
  { id: 3, image: '/home/new-feed.png' },
]

const Slider: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [width, setWidth] = useState<number>(undefined)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: width ? Math.floor(width / 400) || 1 : 3,
    },
    slideChanged(slider) {
      setCurrent(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        {MOCK_DELIVERIES.map((item) => (
          <Box
            key={`bt-${item.id}`}
            sx={{ width: 12, height: 12, borderRadius: '50%', m: 1 }}
            bgcolor={current === item.id ? 'success.dark' : 'success.light'}
            onClick={() => instanceRef.current?.moveToIdx(item.id)}
          />
        ))}
      </Box>
      <Box ref={sliderRef} className="keen-slider">
        {MOCK_DELIVERIES.map((item) => (
          <Box key={`pc-${item.id}`} className="keen-slider__slide" sx={{ display: 'flex', p: 3 }}>
            <img src={item.image} alt="news" width="100%" />
          </Box>
        ))}
      </Box>
    </>
  )
}

const Delivery: FC = () => (
  <Block reveal>
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        “FINX delivers stunning work with a quick turnaround. Their blend of tech and creativity make innovation feel
        frictionless.”
      </Typography>
      <Typography variant="h4" sx={{ color: 'grey.600', mb: 6 }}>
        Romain Perrier, Product Lead, Google
      </Typography>
      <Slider />
    </Container>
  </Block>
)

export default Delivery
