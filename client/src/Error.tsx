import { Box, Typography } from '@mui/material'
import { BUTTON_TYPE, COLORS } from './constants/enum'
import Button from './components/shared/Button/Button'

const primary = ''

export default function Error() {

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
      <Typography variant="h1" style={{ color: COLORS.DARK_BLUE }}>
        500
      </Typography>
      <Typography variant="h6" style={{ color: COLORS.DARK_BLUE }}>
        OOPS...OCORREU UM ERRO NÃO ESPERADO.
      </Typography>
      <Typography variant="h6" style={{ color: COLORS.DARK_BLUE }}>
        CASO PERSISTA, ENTRE EM CONTATO COM O ADMINISTRADOR DO SISTEMA.
      </Typography>
      <br />
      
      <Button buttonType={BUTTON_TYPE.PRIMARY} onClick={() => window.location.href = '/'} text='Voltar' />
      
      
    </Box>
  )
}