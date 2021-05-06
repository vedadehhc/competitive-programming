import React from 'react';
import fb, { pageId } from './fb';

class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <div
        className="fb-customerchat"
        attribution="page_inbox"
        page_id={pageId}
        theme_color="#3264c8"
        // logged_in_greeting="..."
        // logged_out_greeting="..."
        // greeting_dialog_display="..."
        // greeting_dialog_delay="..."
        // minimized="false"
        // ref="..."
      />
    );
  }
}

export default CustomerChat;