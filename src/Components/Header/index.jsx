import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className='container'>
                    <h1>Luxe</h1>
                    <nav>
                        <a href="">Shop</a>
                        <a href="">Categories</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                    </nav>
                   <div className='header'>
                     <Autocomplete
                     className='auto'
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search input"
                                slotProps={{
                                    input: {
                                        ...params.InputProps,
                                        type: 'search',
                                    },
                                }}
                            />
                         )}
                    />
                   </div>
                </div>
            </header>
        </>
    )
}

export default Header