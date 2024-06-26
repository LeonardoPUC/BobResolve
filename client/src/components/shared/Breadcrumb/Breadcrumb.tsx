import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Container } from './Breadcrumb.styles'
import { IBreadcrumb } from './Breadcrumb.interfaces'

const Breadcrumb = (breadcrumbProps: IBreadcrumb) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbProps.links.map((link, index) => (
          <Link 
            key={`breadcrumb-${index}`} 
            underline="hover" 
            color="inherit" 
            href={link.title == 'Detalhes' ? link.href+breadcrumbProps.powerStationId : link.href}
            onClick={() => link.title == 'Detalhes' ? window.location.href = link.href+breadcrumbProps.powerStationId : window.location.href = link.href}
          >
            {link.title}
          </Link>
        ))}
        <Typography color="text.primary">
          {breadcrumbProps.current}
        </Typography>
      </Breadcrumbs>
    </Container>
  )
}

export default Breadcrumb