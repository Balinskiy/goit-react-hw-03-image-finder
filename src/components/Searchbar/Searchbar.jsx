import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  onHandleChange = evt => {
    this.setState({ search: evt.target.value });
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
