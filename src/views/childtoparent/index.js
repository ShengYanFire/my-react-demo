/*
 * @Descripttion: 父子之间传值示例
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-20 14:16:30
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-20 14:27:24
 */


import { Component } from 'react'

import Child from "./child"

export default class childtoparent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "小明" }
    }

    // 定义的常规函数，函数内部的this指向的是自身，默认是undefined
    // sonChange(name) {
    //     this.setState({ name: name })
    // }
    // 定义的箭头函数，默认不会使用自身的this，他的this与外层保持一致
    sonChange = name => {
        this.setState({ name: name })
    }

    render() {
        return (
            <Child name={this.state.name} parent={this} />
        )
    }
}