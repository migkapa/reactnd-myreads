import React, { Component } from 'react';

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { shelf: '' };

    // creating options array for populating the select box
    this.options = [
      { value: 'currentlyReading', label: 'Currently Reading' },
      { value: 'wantToRead', label: 'Want to Read' },
      { value: 'read', label: 'Read' },
      { value: 'none', label: 'None' }
    ];
  }

  updateShelf = event => {
    this.props.handleShelfChange(this.props.book, event.target.value)
  }


  render() {
    const { shelf } = this.props;
    return (
      <div className="book-shelf-changer">
        <select defaultValue={shelf} onChange={ this.updateShelf }>
          <option value="move" disabled>
            Move to...
          </option>
          {this.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
