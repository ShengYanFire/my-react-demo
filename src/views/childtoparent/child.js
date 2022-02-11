/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-20 14:18:06
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-21 11:09:37
 */

import { Component } from "react";
import { Cascader } from 'antd';

export default class child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            children: [
                                {
                                    value: 'xihu',
                                    label: 'West Lake',
                                },
                            ],
                        },
                    ],
                },
                {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                        {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                                {
                                    value: 'zhonghuamen',
                                    label: 'Zhong Hua Men',
                                },
                            ],
                        },
                    ],
                },
            ]
        }
    }

    onChange = value => {
        this.props.parent.sonChange(value)
    }

    render() {
        return (
            <div style={{ margin: 100 }}>
                <h2>hello,{this.props.name}</h2>
                <Cascader options={this.state.options} onChange={this.onChange} placeholder="Please select" />
            </div>
        )
    }
}