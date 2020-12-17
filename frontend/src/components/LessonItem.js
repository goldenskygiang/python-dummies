import React, { Component } from 'react';
import '../css/LessonItem.css';

export default class LessonItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
        const {name} = this.props
		return (
			<div className="LessonItem">
                <span>{name}</span>
			</div>
		);
	}
}
