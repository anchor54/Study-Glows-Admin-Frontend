import { Box } from '@mui/material'
import React from 'react'
import './AdminCards.scss';
import LinearProgress from '@mui/material/LinearProgress';
export const AdminCards = (props) => {
  return (
    <Box className="cards" style={{ marginTop: props.margin}}>
        <h3 className="card-heading">{props.heading}</h3>
        <h2 className="card-number">{props.number}</h2>
        <LinearProgress variant="determinate" value={props.value}
        sx={{
            backgroundColor: `${props.bg}`,
            '& .MuiLinearProgress-bar': {
              backgroundColor: `${props.barColor}`
            }
          }}
        className="progress"
        />
        <p className="card-content">{props.content}</p>
    </Box>
  )
}
