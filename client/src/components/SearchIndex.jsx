import _ from 'lodash';
import React from 'react';
import { Button, Input, Label } from 'semantic-ui-react';
import List from './List.jsx';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //the state automatically updates with any user inputs
      budget: 0,
      isLoading: false,
      keywords: '',
      servings: 0
    };
  }


  onChange(e) {
    this.setState({
      //this function automatically updates the state based on if any of the input boxes are changed. It works because all the stateful properties won't be changed at the
      //same time
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    //this triggers the search function in index.jsx when enter is pressed or when the
    //search button is hit. It also resets the set immediately thereafter
    e.preventDefault();
    this.props.onSearch(
      this.state.budget,
      this.state.keywords,
      this.state.servings
    );
    this.setState({
      budget: 0,
      keywords: '',
      servings: 0
    });
  }

  render() {
    const { isLoading, value } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Input
            name="budget"
            labelPosition="right"
            type="text"
            placeholder="Amount"
            value={this.state.budget} // bind the value to the proper property in state so the onChange function could work
            onChange={this.onChange.bind(this)} // on change input function that updates
          >
            <Label basic>$</Label>
            <input />
            <Label basic>.00</Label>
          </Input>
          <Input
            name="servings"
            label={{ basic: true, content: 'servings' }}// Semantic UI syntax
            labelPosition="right"
            placeholder="Enter servings..."
            value={this.state.servings} // bind the value to the proper property in state so the onChange function could work
            onChange={this.onChange.bind(this)} // on change input function that updates the state
          />
          <Input
            name="keywords"
            placeholder="Dish (optional)"
            value={this.state.keywords} // bind the value to the proper property in state so the onChange function could work
            onChange={this.onChange.bind(this)} // on change input function that updates the state
          >
            <input />
            <Button type="submit" color="red" style={{ borderRadius: '5px' }} /* how to pass in CSS style in Semantic UI */>
              Search
            </Button>
          </Input>
        </form>
      </div>
    );
  }
}

export default SearchIndex;
