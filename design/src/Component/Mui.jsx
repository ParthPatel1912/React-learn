import React, { Component } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Link from '@mui/material/Link';

import * as css from '../assets/css/main.css';

const preventDefault = (event) => event.preventDefault();

export class Mui extends Component {
    state = { value: '', hover: '', volume: 20 };
    handleChange = (event, newValue) => {
        this.setState({
            volume: newValue
        })
    };
    render() {
        // One time slot every 30 minutes.
        const timeSlots = Array.from(new Array(24 * 2)).map(
            (_, index) =>
                `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
                }`,
        );
        const labels = {
            0.5: 'Useless',
            1: 'Useless+',
            1.5: 'Poor',
            2: 'Poor+',
            2.5: 'Ok',
            3: 'Ok+',
            3.5: 'Good',
            4: 'Good+',
            4.5: 'Excellent',
            5: 'Excellent+',
        };
        function getLabelText(value) {
            return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
        }
        return (
            <div className='first'>
                <div>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </div>
                <div className='first'>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="outlined" color="error">Error</Button>
                </div>
                <Stack className='first' direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                    <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                </Stack>
                <div className='first'>
                    <Autocomplete
                        id="disabled-options-demo"
                        options={timeSlots}
                        getOptionDisabled={(option) =>
                            option === timeSlots[0] || option === timeSlots[2]
                        }
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Disabled options" />}
                    />
                </div>
                <FormGroup>
                    <FormControlLabel color='secondary' control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel required control={<Checkbox />} label="Required" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    <Checkbox defaultChecked sx={{
                        label: 'opop',
                        color: yellow[800],
                        '&.Mui-checked': {
                            color: yellow[600],
                        },
                    }} />
                </FormGroup>
                <FormControl>
                    <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top" >
                        <FormControlLabel
                            value="top"
                            control={<Radio />}
                            label="Top"
                            labelPlacement="top" />
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start" />
                        <FormControlLabel
                            value="bottom"
                            control={<Radio />}
                            label="Bottom"
                            labelPlacement="bottom" />
                        <FormControlLabel value="end" control={<Radio />} label="End" />
                    </RadioGroup>
                </FormControl>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Rating
                        name="hover-feedback"
                        value={this.state.value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            this.setState({
                                value: newValue
                            });
                        }}
                        onChangeActive={(event, newHover) => {
                            this.setState({
                                hover: newHover
                            });
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {this.state.value !== null && (
                        <Box sx={{ ml: 2 }}>{labels[this.state.hover !== -1 ? this.state.hover : this.state.value]}</Box>
                    )}
                </Box>
                <Box sx={{ width: 200 }}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown />
                        <Slider aria-label="Volume" value={this.state.volume} onChange={this.handleChange} />
                        <VolumeUp />
                    </Stack>
                    <Slider disabled defaultValue={20} aria-label="Disabled slider" />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        typography: 'body1',
                        '& > :not(style) + :not(style)': {
                            ml: 2,
                        },
                    }}
                    onClick={preventDefault}
                >
                    <Link href="#" underline="none">
                        {'underline="none"'}
                    </Link>
                    <Link href="#" underline="hover">
                        {'underline="hover"'}
                    </Link>
                    <Link href="#" underline="always">
                        {'underline="always"'}
                    </Link>
                </Box>
            </div>
        )
    }
}

export default Mui