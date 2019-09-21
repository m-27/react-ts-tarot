import * as React from 'react';
import '../stylesheets/Tarot.css';


class Tarot extends React.Component {
  public render() {
    return (
      <div className="tarot-container">
        <div className="form-group mode">
          <label htmlFor="exampleFormControlSelect1">牌陣</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>無牌陣</option>
            <option>聖三角</option>
            <option>時間之流</option>
            <option>選擇牌陣</option>
            <option>關係排陣</option>
            <option>問題排陣</option>
          </select>
        </div>

      </div>
    );
  }
}

export default Tarot;
