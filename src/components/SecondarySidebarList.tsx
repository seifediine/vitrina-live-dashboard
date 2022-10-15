import { List } from '@mui/material'
import { secondLinks } from '../data/data'
import SidebarItem from './SidebarItem'

const SecondList = () => {
  return (
    <List dense>
      {secondLinks.map((secondLink) => (
        <SidebarItem key={secondLink.name} {...secondLink} />
      ))}
    </List>
  )
}

export default SecondList
