import React, { Component } from 'react';
import styles from './NewsContentList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class NewsContentList extends Component {
  render(){
    return (
      <div className={cx('list')}>
        <div className={cx('listImg')}>
          <img src={`/assets/${this.props.img}`} alt="img"/>
        </div>
        <div className={cx('listText')}>
          <dl>
            <dt><span className={cx('listTitle')}>{this.props.title}</span><span>{this.props.date}</span></dt>
            <dd>{this.props.text}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default NewsContentList;
