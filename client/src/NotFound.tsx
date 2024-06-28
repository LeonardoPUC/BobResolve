import { Box, Typography } from '@mui/material'
import { BUTTON_TYPE, COLORS } from './constants/enum'
import Button from './components/shared/Button/Button'

const primary = ''

export default function NotFound() {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: COLORS.BRAND_GREY }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: COLORS.BRAND_GREY }}>
        A página que você está procurando não existe.
      </Typography>
      <br />
      
      <Button buttonType={BUTTON_TYPE.PRIMARY} onClick={() => window.location.href = '/'} text='Voltar' />
      
      
    </Box>
  )
}