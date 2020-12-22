import React, { Component } from 'react';
import '../css/InsideProfileDetail.css';
// import firebase from '../firebase.js';
// import Loading from './Loading.js';
// import Ava from '../img/stitch.jpg';
// import 'font-awesome/css/font-awesome.min.css';
// import {useParams} from 'react-router-dom';
// import ProfileDeleteConfirm from './ProfileDeleteConfirm';

export default class InsideProfileDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			User: {},
			isLoading: false,
			isChangingAva:false,
			ConfirmSelected: false,
			ConfirmBtn:false,
			Avatar:{}
		};
	}

	// showLoading() {
	// 	this.setState({
	// 		isLoading: true
	// 	});
	// }

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

	// componentDidMount() {
	// 	this.showLoading();
	// 	this.GetDB1();
	// 	// this.GetDB();
	// }

	// GetDB1() {
	// 	const db = firebase.firestore();
	// 	const ref = db.collection('Users').doc('45GCoMKDwQWciXc8193A');
	// 	// const { id } = useParams();

	// 	ref.get().then(data => {
	// 		let Users = data.data().Users;

	// 		let idx = Users.findIndex(user => user.Id === this.props.match.params.id)
	// 		let CurUser = Users.filter(
	// 			user => user.Id === this.props.match.params.id
	// 		);

	// 		// console.log('after sorting ', CurUser);
	// 		if(CurUser.length === 0){
	// 			window.location.href = '/studentmanagement'
	// 		}
	// 		else{
	// 			let gs = firebase.storage();

	// 			let storageRef = (CurUser[0].Avatar !== "" &&  CurUser[0].Avatar !== undefined) 
	// 											?gs.ref('UsersAvatar/'+CurUser[0].Id + '/' + CurUser[0].Avatar)
	// 											:gs.ref('UsersAvatar/standard/avatar.png');

	// 			let imageFolder = [];
	// 			const arrImageUrl = [];
				
	// 			arrImageUrl.push(storageRef.getDownloadURL());

	// 			// console.log(arrImageUrl)

	// 			Promise.all(arrImageUrl).then((result) => {
	// 				imageFolder = result;
	// 				this.setState(function(state){
	// 					return {
	// 						User: CurUser[0],
	// 						isLoading: false,
	// 						studentIdx:idx,
	// 						Avatar:imageFolder
	// 					}
	// 				})
	// 			}, (error) => {

	// 			})
	// 		}
	// 	});
	// }

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

	// Change(){
	// 	let file = this.state.File;
	// 	console.log('debug', file);

	// 	let gs = firebase.storage();
    // // let db = firebase.firestore();

	// 	let storageRef;
	// 	storageRef = gs.ref('UsersAvatar/'+this.state.User.Id + '/' + file.name);

	// 	if(file !== undefined) {
    //   // console.log('hello');
    //   storageRef.put(file)
    //       .then( () =>{
	// 					const db = firebase.firestore();
	// 					const ref = db.collection('Users').doc('45GCoMKDwQWciXc8193A');

	// 					ref.get().then((data)=>{
	// 						let Users = data.data().Users;

	// 						console.log('debug2 ',Users[this.state.studentIdx])
	// 						Users[this.state.studentIdx].Avatar = file.name;

	// 						ref.set({Users:Users}).then(()=>window.location.href = `/Profile/${this.state.User.Id}`);
	// 					})
    //       })
    //       .catch( d =>{})
    // }






	// }



	render() {
		const { User, isLoading, isChangingAva, ConfirmSelected , ConfirmBtn , Avatar} = this.state;
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
                                    Change Avatar
                                </div>

                            </div>
                        </div>

                        {!isChangingAva &&
                        <div className="Right">
                            <ul>
                                <li>Name: {User.Name}</li>
                                <li>Email: {User.Email}</li>
                                <li>Course: {User.Course}</li>
                                <li>Total Score: {User.TotalScore}</li>
                                {(localStorage.getItem('class') === 'admin' ||
                                    localStorage.getItem('userId') === User.Id) && (
                                    <li>
                                        <span
                                            className="DeleteCss"
                                            onClick={this.DeleteConfirmActivate.bind(this)}
                                        >
                                            Delete
                                        </span>
                                    </li>
                                )}
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
