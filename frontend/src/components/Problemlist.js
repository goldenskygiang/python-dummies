import React, { Component } from 'react';
import '../css/Problemlist.css';

import axios from 'axios';

export default class Problemlist extends Component {
	constructor(props) {
        super(props);
        this.state = {
            Problems: []
        }
	}


    componentDidMount() {
        axios.get(`/api/problems/`)
          .then(res => {
            const Problems = res.data;
            // console.log("show problems", Problems)
            this.setState({
              Problems: Problems
              // isLoading: false
            });
          })
          .catch(error => console.log(error));
    }

    MoveToProblem(id){
        // console.log("moving to problem...", problem)
        window.location.href = '/Problemset/' + id
    }

	render() {
        const {Problems} = this.state;
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
                        
                        {
                        Problems.map(problem => 
                                <tr>
                                    <td className = "a_tag" onClick = {this.MoveToProblem.bind(this,problem.id)}>{problem.id}</td>
                                    <td className = "a_tag" onClick = {this.MoveToProblem.bind(this,problem.id)}>{problem.title}</td>
                                    <td>{problem.lesson.title}</td>
                                    <td>2/5</td>
                                </tr>    
                            )
                        }

					</table>
				</div>
			</div>
		);
	}
}
