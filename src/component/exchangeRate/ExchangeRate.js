import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 400,
        color: "#fff",
        border: "1px solid rgba(0,0,0,.12)",
        padding: "5px 15px",
        borderRadius: 5,

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    MuiInputLabel: {
        background: "#111",
        borderRadius: 10
    },
}));
const ExchangeRate = ({ dataSelect, inputLabel, handleChange, value }) => {
    const classes = useStyles();
    // const [age, setAge] = React.useState('');
    // const handleChange = event => {
    //     setAge(event.target.value);
    // };

    return (
        <Wrap>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    {inputLabel}
                </InputLabel>
                <Select
                    autoWidth
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                >
                    {
                        dataSelect.map((index, i) =>
                            <MenuItem key={i} value={index.value}>{index.name}</MenuItem>
                        )
                    }

                </Select>
            </FormControl>
        </Wrap>
    )
}

export default ExchangeRate
const Wrap = styled.div`
    
    .MuiInput-underline{
        :before,:hover{
            border-bottom:0 !important;
        }
        
    }
    .MuiInput-formControl{
        margin-top:0;
        
    }
    .MuiInputLabel-formControl{
        top:-8px;
        left:15px;
        background:#fff;
        padding:0 4px;
    }
    .MuiListItem-gutters{
        padding:15px 30px;
    }
`