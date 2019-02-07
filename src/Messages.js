import React from 'react';

export default class Messages extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h3>Write a Message:</h3>
          <div>
            <input type="textfield" name="message" placeholder="Message" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
}
