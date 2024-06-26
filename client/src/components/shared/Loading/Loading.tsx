
import LinearProgress from '@mui/material/LinearProgress'
import { Container } from './Loading.styles'
import Box from '@mui/material/Box'

// const useStyles = makeStyles((theme: { spacing: (arg0: number) => any }) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   }
// }))

const Loading = () => {
  //const classes = useStyles

  return (
    <Container>
      {/* <img src="./img/loading-genyx.gif" alt="" /> */}
      <Box sx={{ width: '100%' }}>
        <LinearProgress sx={{background: 'linear-gradient(270deg, #001A7A 0%, #2BA1CF 19.21%, #67FF67 48.38%, #2BA1CF 79.63%, #001A7A 100%);'}}/>
      </Box>
    </Container>

  )
}

export default Loading