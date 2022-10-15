import { List } from '@mui/material'
import SidebarItem from './SidebarItem'
import { mainLinks } from '../data/data'
import { SidebarItemProps } from '../data/types'

const MainSidebarList = (): JSX.Element => {
  return (
    <List dense>
      {mainLinks.map((mainLink) => (
        <SidebarItem key={mainLink.name} {...mainLink} />
      ))}
    </List>
  )
}

export default MainSidebarList
