import React, { FC } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import TimelineIcon from '@mui/icons-material/Timeline'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'

const MOCK_PARTNERS = [
  {
    id: 0,
    icon: <SearchIcon />,
    content:
      'We focus greatly on understanding your business, its processes and the stakeholders involved before embarking on UX transformation',
  },
  {
    id: 1,
    icon: <LanguageIcon />,
    content:
      'We’ve got experience working with the leaders in fintech, taking their financial service usability and revenue to the very top',
  },
  {
    id: 2,
    icon: <TimelineIcon />,
    content: 'We perform extensive research and empower you to take data-driven UX decisions with in-depth reporting',
  },
  {
    id: 3,
    icon: <EmojiObjectsIcon />,
    content:
      'With over 4 years of experience, we understand user problems, needs, financial cognition and behaviour on a deeper leel to architect services that clients seek',
  },
]

const Partner: FC = () => (
  <Block reveal>
    <Box sx={{ bgcolor: 'black', color: 'white', py: 10 }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              YOUR PARTNER IN FINTECH
            </Typography>
            <Typography variant="h3">Why choose us?</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            {MOCK_PARTNERS.map((item) => (
              <Box key={`pt=${item.id}`} sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                <Box
                  sx={{
                    width: 78,
                    minWidth: 78,
                    height: 78,
                    bgcolor: 'primary.dark',
                    color: 'success.light',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 30,
                    mr: 3,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="h6">{item.content}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Container sx={{ textAlign: 'center', py: 10 }}>
      <Typography variant="h3" sx={{ mb: 6 }}>
        The idea that the greatest tech companies aren't really tech says a lot about the importance of design and
        technology.
      </Typography>
      <Button variant="outlined" color="success" size="large" sx={{ borderRadius: 30 }}>
        Let's Work Together
      </Button>
    </Container>
  </Block>
)

export default Partner
