import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import $ from 'jquery';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
//import ScreenShareOutlined from '@material-ui/icons/ScreenShareOutlined';
//import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
//import CheckBoxIcon from '@material-ui/icons/CheckBox';
//import {Toolbar,Typography,IconButton,Tooltip,Paper,Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //borderLeft:"1px solid black",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const shareHandleClick = (el) =>{
      //$(el).children('option:first-child').hide();
      console.log(1);
  }
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={1.2}>
            <FormControl className={classes.formControl} error>
                <NativeSelect
                value="fds"
                name="name"
                onClick={shareHandleClick(this)}
                inputProps={{
                    id: 'name-native-error',
                }}
                >
                {/*<option value="hai"> Share<ScreenShareOutlined/></option>
                <optgroup label="Contributors">
                    <option value="olivier">Olivier</option>
                    <option value="kevin">Kevin</option>
                </optgroup>*/
                }
                <option >Share</option>
                <option >Print</option>
                <option >Export to PDF</option>
                <option >Export to Excel</option>

                </NativeSelect>
            </FormControl>
        </Grid>

        <Grid item xs={1.2} >
            <FormControl className={classes.formControl}>
              <NativeSelect
              onChange={shareHandleClick(this)}
              inputProps={{
                  name: 'age',
                  id: 'age-native-label-placeholder',
              }}
              >
              <option >Add</option>
              <option >All</option>
              <option >My</option>
              <option >My Dep</option>
              <option >My Pos</option>
              <option >My Regular</option>
              </NativeSelect>
            </FormControl>
        </Grid>

        <Grid item xs={1.2}>
            <FormControlLabel
            control={<Checkbox  name="checkedA" />}
            label="Open"
            />
        </Grid>

        <Grid item xs={1.2}>
            <FormControlLabel
            control={<Checkbox   />}
            label="+Regular"
            />
        </Grid>

        <Grid item xs={1.2}>
            <FormControlLabel
            control={<Checkbox   />}
            label="OOD"
            />
        </Grid>

        <Grid item xs={1.2}>
            <FormControlLabel
            control={<Checkbox  />}
            label="Has Note"
            />
        </Grid>

        <Grid item xs={1.2}>
            <FormControlLabel
            control={<Checkbox  />}
            label="All Company"
            />
        </Grid>

      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
