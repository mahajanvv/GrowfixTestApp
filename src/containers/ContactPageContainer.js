import { Grid } from '@material-ui/core';
import './ContactPageContainer.css';
import React from 'react';
import { makeStyles, withStyles, withTheme } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 20,
    borderWidth: 3,
    color: "white",
    borderColor: "white"
  },
}));

function ContactPageContainer() {

  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };


  return (
    <Grid container >
      <Grid xs={6}>
      </Grid>
      <Grid xs={6} className="paper">
          <div style={{paddingLeft: "12%", paddingTop: "5%"}}>
            <h1 className="title_font">
              Let's talk.
            </h1>
            <span>
              Share your excitement with us.
            </span>
            <h2>
              Let's talk about
            </h2>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                  <FormControlLabel value="yourgreatproject" control={<Radio />} label="Your Great Project" />
                  <FormControlLabel value="meetingforacoffee" control={<Radio />} label="Meeting for a coffee" />
                  <FormControlLabel value="birdsandbees" control={<Radio />} label="Birds and bees" />
                  <FormControlLabel value="planavideocall" control={<Radio />} label="Plan a video call" />
                </RadioGroup>
                <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                  Next
                </Button>
              </FormControl>
            </form>
          </div>
      </Grid>
    </Grid>
  );
}

export default ContactPageContainer;