import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography, dividerClasses } from '@mui/material';

export const SliderComponent = ({ defaultValue, min, max, amount, label, unit }) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
          <Typography variant='subtitle2'>{label}</Typography>
          <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>
    <Slider
      min={min}
      max={max}
      defaultValue={defaultValue}
      aria-label="Default"
      valueLabelDisplay="auto"
    />
    </Stack>
  )
}
