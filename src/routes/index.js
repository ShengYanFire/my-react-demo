/*
 * @Descripttion: 
 * @version: 
 * @Author: lsy
 * @Date: 2022-01-20 14:41:24
 * @LastEditors: lsy
 * @LastEditTime: 2022-01-21 11:40:17
 */
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@/views/home"
import Childtoparent from "@/views/childtoparent"

export default class routes extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/childtoparent" element={<Childtoparent />} />
            </Routes>
        )
    }
}
