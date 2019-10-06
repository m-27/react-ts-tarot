import * as React from 'react';
import '../stylesheets/Banner.css';


class Banner extends React.Component {
  public render() {
    return (
      <div id="banner">
				<h1>Ｗelcome Tarot World</h1>
        <button type="button" className="btn btn-info mt10">占卜</button>
      </div>
    );
  }
}

export default Banner;
