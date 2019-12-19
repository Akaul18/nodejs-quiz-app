import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Container,
  Button
} from "@material-ui/core";
import "../App.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Options = () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleDifficultyChange = event => {
    setDifficulty(event.target.value);
  };

  return (
    <div className="App-body">
      <Container maxWidth="sm">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={handleCategoryChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"computers"}>Science: Computers</MenuItem>
            <MenuItem value={"mathematics"}>Science: Mathematics</MenuItem>
            <MenuItem value={"sports"}>Sports</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
            Difficulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={difficulty}
            onChange={handleDifficultyChange}
            labelWidth={labelWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          style={{ padding: "0.9rem", marginTop: "0.5rem", width: "120px" }}
        >
          Done
        </Button>
      </Container>
    </div>
  );
};

export default Options;
