import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, FormHelperText } from '@material-ui/core';

class Filter extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            name:{
                range1:true,
                range2:true,
                range3:true
            }
        }
    }

    handleRadioChange = event => {
        this.setState({ value: event.target.value });
    }

    handleCheckboxChange = name => event => {
        this.setState({ ...this.state.name, [name]: event.target.checked });
      };
    render() {
        return (
            <div style={{ minWidth: '20%' }}>
                <FormControl component="fieldset" style={{ paddingLeft: '20px' }}>
                    <FormLabel component="legend">FILTER</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleRadioChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" style = {{padding:'20px',marginTop:'10px'}}>
                    <FormLabel component="legend" style ={{marginTop:'10px'}}>Price</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={this.state.range1} onChange={this.handleCheckboxChange('range1')} value="range1" />}
                            label="Rs.179 to Rs.2312"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={this.state.range2} onChange={this.handleCheckboxChange('range2')} value="range2" />}
                            label="Rs.2312 to Rs.4415"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.range3} onChange={this.handleCheckboxChange('range3')} value="range3" />
                            }
                            label="Rs.4415 to Rs.6578"
                        />
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

export default Filter;