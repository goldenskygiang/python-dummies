import React, { Component } from 'react';
import '../css/Problemlist.css';


export default class Problemlist extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="Problemlist">
				<div className="ProblemHeader">
					<span>Problems</span>
				</div>
				<div className="ProblemlistTable">
					<table>
						<tr className="Problemlist--head">
							<th>#</th>
							<th>Name</th>
							<th>Category</th>
							<th>Solved</th>
						</tr>

                        <tr>
                            <td><a href = "#">P001</a></td>
                            <td><a href = "#">Problem Practice 1</a></td>
                            <td>While loop</td>
                            <td>2/5</td>
                        </tr>

                        <tr>
                            <td><a href = "#">P001</a></td>
                            <td><a href = "#">Problem Practice 1</a></td>
                            <td>While loop</td>
                            <td>2/5</td>
                        </tr>

                        <tr>
                            <td><a href = "#">P001</a></td>
                            <td><a href = "#">Problem Practice 1</a></td>
                            <td>While loop</td>
                            <td>2/5</td>
                        </tr>

                        <tr>
                            <td><a href = "#">P001</a></td>
                            <td><a href = "#">Problem Practice 1</a></td>
                            <td>While loop</td>
                            <td>2/5</td>
                        </tr>

                        <tr>
                            <td><a href = "#">P001</a></td>
                            <td><a href = "#">Problem Practice 1</a></td>
                            <td>While loop</td>
                            <td>2/5</td>
                        </tr>

					</table>
				</div>
			</div>
		);
	}
}
