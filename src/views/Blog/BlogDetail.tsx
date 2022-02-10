import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LinkIcon from '@mui/icons-material/Link'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Blogs from './Blogs'
import Team from './Team'
import { MOCK_POST } from './constant'

const BlogDetail: FC = () => {
  const router = useRouter()

  return (
    <>
      <Box sx={{ bgcolor: 'white', pt: 6 }}>
        <IconButton
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            width: { xs: 56, md: 56 },
            height: { xs: 56, md: 180 },
            bgcolor: 'success.light',
            color: 'white',
            borderRadius: 0,
            mt: { xs: 0, md: 6 },
            mb: 3,
          }}
          onClick={() => router.back()}
        >
          <ArrowBackIcon />
        </IconButton>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
            }}
          >
            <Typography variant="h6" sx={{ color: 'success.light', mr: 3, mb: 2 }}>
              FEATURED | UX CASE STUDY
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2 }}>
              08 MIN READ
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ mb: 4 }}>
            {MOCK_POST.title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'grey.600' }}>
            {MOCK_POST.overview}
          </Typography>
        </Container>
      </Box>

      <Block reveal sx={{ bgcolor: 'white' }}>
        <Box sx={{ maxWidth: 'sm', m: 'auto', p: 3 }}>
          <img src="/blog/fintech.png" alt="fintech" width="100%" />
          <Typography variant="h6">{MOCK_POST.content}</Typography>
        </Box>
      </Block>

      <Block reveal>
        <Box sx={{ maxWidth: 'sm', px: 3, mx: 'auto' }}>
          <Stack direction="row" spacing={2} sx={{ color: 'success.light', py: 3 }}>
            <TwitterIcon sx={{ marginLeft: 'auto' }} />
            <FacebookIcon />
            <LinkedInIcon />
            <LinkIcon />
          </Stack>
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', sm: 'row' }, p: 3 }}>
            <Box
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'black',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                p: 3,
                mr: { xs: 0, sm: 6 },
                my: 3,
              }}
            >
              <img src="/blog/finx.png" alt="FINX" width="100%" />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                Written by
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 3 }}>
                  FINX Studio
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2" sx={{ ml: 3 }}>
                  JUN 14, 2021
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'grey.600', mb: 1 }}>
                Making Innovation a predictable driver of growth.
              </Typography>
              <Typography variant="body2" sx={{ color: 'grey.400', mb: 1 }}>
                hello@finx.studio
              </Typography>
            </Box>
          </Box>
        </Box>
      </Block>

      <Block reveal sx={{ bgcolor: 'white' }}>
        <Container>
          <Typography variant="h4">Related Articles</Typography>
          <Blogs />
        </Container>
      </Block>

      <Block reveal sx={{ bgcolor: 'white' }}>
        <Team color="success" />
      </Block>
    </>
  )
}

export default BlogDetail
