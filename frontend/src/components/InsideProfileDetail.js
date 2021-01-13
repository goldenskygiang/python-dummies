import React, { Component } from 'react';
import '../css/InsideProfileDetail.css';

export default class InsideProfileDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isChangingAva:false,
			ConfirmSelected: false,
			ConfirmBtn:false,
			Avatar:{}
		};
	}


	DeleteConfirmActivate() {
		this.setState({
			ConfirmSelected: true
		});
	}

	CloseConfirmSelected() {
		this.setState({
			ConfirmSelected: false
		});
	}



	ChangingAva(){
		this.setState({
			isChangingAva:true
		})
	}

	CloseChangeAva(){
		this.setState({
			isChangingAva:false
		})
	}


	onChange(e){
		this.setState({
			ConfirmBtn:true,
			File:e.target.files[0]
		})
	}


	render() {
		const { isChangingAva, ConfirmSelected , ConfirmBtn , Avatar} = this.state;
		return (
			<div className="InsideProfileDetail">
				{/* {isLoading && <Loading />} */}
				<div className="InsideProfileHeader">
					<span>Profile</span>
				</div>

				<div className="InsideProfileDetailMain">
                    <div className = "InsideProfileDetailMainUp">
                        <div className="Left">
                            <div className="StudentAvatar">
                                {/* <img className="Picture" src={Avatar}></img> */}
                                <img className="Picture"></img>
                                {/* {localStorage.getItem('userId') === User.Id && (
                                    <div className="StudentProfileLayer" onClick = {this.ChangingAva.bind(this)}>
                                        Change Avatar
                                    </div>
                                )} */}

                                <div className="StudentProfileLayer" onClick = {this.ChangingAva.bind(this)}>
                                    <div className="StudentProfileLayerText">
										Change Avatar
									</div>
                                </div>

                            </div>
                        </div>

                        {!isChangingAva &&
                        <div className="Right">
                            <ul>
                                <li>Username: {localStorage.username}</li>
                                <li>Email: {localStorage.email}</li>
                                <li>Course: Year 2020</li>
                                <li>Total Score: {localStorage.TotalScore}</li>
                            </ul>

                            {/* {ConfirmSelected && (
                                <ProfileDeleteConfirm
                                    CloseConfirmSelected={this.CloseConfirmSelected.bind(this)}
                                    // Id={User.Id}
                                    // showLoading={this.showLoading.bind(this)}
                                ></ProfileDeleteConfirm>
                            )} */}
                        </div>	
                        }

                        {isChangingAva &&
                        <div className="AvatarRight">
                            <span className = "AvatarRightSpan">Change Avatar</span>
                            <div className="upload-btn-wrapper">
                                <button className="Avabtn">+ Upload a file</button>
                                <input type="file" 
                                            id = 'avaInput' 
                                            name="myfile"
                                            onChange = {(e)=>this.onChange(e)} />
                            </div>

                            <div class="footer-icons backBtn">
                                    <span onClick={this.CloseChangeAva.bind(this)}>
                                        <i className="fa fa-arrow-left"></i>
                                        back
                                    </span>
                            </div>

                            {ConfirmBtn && 
                            <span
                            className="ChangeCss"
                            onClick={this.Change.bind(this)}
                            >
                                Change
                            </span>
                            }
                        </div>
                        }
                    </div>

					<div className="ProfileFooter">
                        <span>Edit Profile</span>
                    </div>
				</div>

				{/* {localStorage.getItem('userId') === User.Id && (
					<div className="ProfileFooter">
						<span>Edit Profile</span>
					</div>
				)} */}


				{/* {localStorage.getItem('userId') !== User.Id && (
					<div className="ProfileFooter Inactive"></div>
				)} */}
			</div>
		);
	}
}
