import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useState } from 'react';



const Header = () => {
  const [user, setUser] = useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <>
      <section className="header d-flex">
        <h1 className='text-white text-lg'> <span>Spoty</span>Weather App</h1> 
        <div className="user">
          <div className="user__notifications">
            <CircleNotificationsIcon /> 
          </div>
          <div className="user__info">
            <span className="user__info__img">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/adam_proPic.jpg" alt="Profile Picture" class="img-responsive" />
            </span>
            <span className="user__info__name">
              <span className="first">Adam</span>
              <span className="last">Lowenthal</span>
            </span>
          </div>
          <div className="user__actions">
            <Box sx={{ minWidth: 20 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"><ManageAccountsIcon /></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={user}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Déconnexion</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;