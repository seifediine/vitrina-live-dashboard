import { useState } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Box,
  MenuItem,
  FormControl,
} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { ChevronDown } from '../assets/icons'

const SelectShop = () => {
  const [shop, setShop] = useState('Fenoh Store')

  const handleChange = (event: SelectChangeEvent) => {
    setShop(event.target.value as string)
  }

  return (
    <List>
      <ListItem>
        <ListItemText
          primary='Select your shop'
          primaryTypographyProps={{ color: '#546679' }}
        />
      </ListItem>
      <ListItem>
        <Box sx={{ minWidth: 200 }}>
          <FormControl>
            <Select
              variant='outlined'
              id='demo-simple-select'
              value={shop}
              onChange={handleChange}
              IconComponent={() => <ChevronDown color='#103b66' />}
            >
              <MenuItem value={'Fenoh Store'}>Fenoh Store</MenuItem>
              <MenuItem value={'Filip Store'}>Filip Store</MenuItem>
              <MenuItem value={'Pinazza Store'}>Pinazza Store</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </ListItem>
    </List>
  )
}

export default SelectShop
