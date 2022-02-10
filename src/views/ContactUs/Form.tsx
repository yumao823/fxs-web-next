import React, { FC } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { MOCK_COUNTRIES, MOCK_FINX, MOCK_INDUSTRIES, MOCK_REASONS, MOCK_ROLES, MOCK_SERVICES } from './constant'

const Form: FC = () => {
  const { register, handleSubmit } = useForm()
  let console: Console
  const onSubmit = (data) => console.log('Data: ', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 6 }}>
          To help us serve you better, please complete the form below. We'll respond as soon as possible, usually within
          a few business days.
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Reasons for contacting FINX:
        </Typography>
        <Select
          displayEmpty
          fullWidth
          {...register('contactReason', { required: true })}
          defaultValue={MOCK_REASONS[0].value}
        >
          {MOCK_REASONS.map((item) => (
            <MenuItem key={`rs-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" sx={{ mb: 6 }}>
          About You
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Name:
        </Typography>
        <TextField fullWidth {...register('person[name]', { required: true })} sx={{ mb: 3 }} />
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Email:
        </Typography>
        <TextField fullWidth {...register('person[email]', { required: true })} sx={{ mb: 3 }} />
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Country/Region:
        </Typography>
        <Select
          displayEmpty
          fullWidth
          {...register('person[country]', { required: true })}
          defaultValue={MOCK_COUNTRIES[0].value}
        >
          {MOCK_COUNTRIES.map((item) => (
            <MenuItem key={`ct-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" sx={{ mb: 6 }}>
          About your Business
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Company Name:
        </Typography>
        <TextField fullWidth {...register('business[companyName]', { required: true })} sx={{ mb: 3 }} />
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Title/Role:
        </Typography>
        <Select
          displayEmpty
          fullWidth
          {...register('business[role]', { required: true })}
          defaultValue={MOCK_ROLES[0].value}
          sx={{ mb: 3 }}
        >
          {MOCK_ROLES.map((item) => (
            <MenuItem key={`rl-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Related Industry:
        </Typography>
        <Select
          displayEmpty
          fullWidth
          {...register('business[industry]', { required: true })}
          defaultValue={MOCK_INDUSTRIES[0].value}
          sx={{ mb: 3 }}
        >
          {MOCK_INDUSTRIES.map((item) => (
            <MenuItem key={`id-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Service of Interest:
        </Typography>
        <Select
          displayEmpty
          fullWidth
          {...register('business[service]', { required: true })}
          defaultValue={MOCK_SERVICES[0].value}
          sx={{ mb: 3 }}
        >
          {MOCK_SERVICES.map((item) => (
            <MenuItem key={`sc-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          How you know FINX:
        </Typography>
        <Select displayEmpty fullWidth {...register('business[finx]')} defaultValue={MOCK_FINX[0].value}>
          {MOCK_FINX.map((item) => (
            <MenuItem key={`ct-${item.id}`} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>

        <Divider sx={{ my: 6 }} />

        <Typography variant="h4" sx={{ mb: 3 }}>
          Your Message
        </Typography>
        <Typography variant="h6" sx={{ color: 'grey.400' }}>
          * Message:
        </Typography>
        <TextareaAutosize
          minRows={10}
          {...register('message', { required: true })}
          placeholder="Describe your reasons for contacting FINX"
          style={{
            width: '100%',
            maxWidth: '100%',
            backgroundColor: 'grey.100',
            borderColor: 'grey.400',
            padding: 20,
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        />
        <FormControl size="small" variant="outlined" sx={{ color: (theme) => theme.palette.grey[600], pl: 1 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="* I have read the Privacy Policy and agree to its terms."
            {...register('privacy', { required: true })}
          />
        </FormControl>

        <Button
          variant="outlined"
          color="success"
          type="submit"
          size="large"
          sx={{ borderRadius: 30, color: 'success.light', borderColor: 'success.light', my: 6 }}
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default Form
