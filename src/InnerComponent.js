import React, {Component, PropTypes} from "react";
import InnerComponent from "./InnerComponent";

var {number, string} = PropTypes;
export default class ContainerComponent extends Component {
    static displayName = "ContainerComponent";
    static propTypes = {
        width: number
    }
    render () {
        return (<InnerComponent>test</InnerComponent>);
    }
}
