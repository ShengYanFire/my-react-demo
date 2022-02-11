/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-19 17:16:06
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-21 11:22:59
 */

import { Component } from 'react';
import './index.css';
import homeimg from '@/assets/images/homeimg.jpeg';

export default class Home extends Component {

    render() {
        return (
            <div className="home_div" style={{ backgroundImage: `url(${homeimg})` }}></div >
        )
    }
}
