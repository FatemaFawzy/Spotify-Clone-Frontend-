import React, { Component } from "react";
import "./EditProfile.css";
import {BASEURL} from "../../../Constants/baseURL"
import {connect} from "react-redux"

export class EditProfile extends Component {
  constructor(props){
    super(props);
    var handleChange = this.handleChange.bind(this);

    // Year dropdown idea from -> https://stackoverflow.com/questions/49679501/how-to-create-list-of-years-in-the-dropdown-using-react-js-jsx
    const year = (new Date()).getFullYear();
    this.years = Array.from(new Array(121),(val, index) => year - index);
    
    this.state = {
      email: props.passedInfo.email,
      username: props.passedInfo.userName,
      gender: props.passedInfo.gender,
      birthDate: {
        day: props.passedInfo.birthDate? props.passedInfo.birthDate.slice(8,10): "",
        month: props.passedInfo.birthDate? props.passedInfo.birthDate.slice(5,7): "",
        year: props.passedInfo.birthDate? props.passedInfo.birthDate.slice(0,4): "",
      },
      usernameErrorMessage: "",
      savedChanges: false,
    }
    
  }

  componentDidMount() {
    if(document.getElementById("saved-changes")){
    document.getElementById("saved-changes").classList.toggle("hide");

    if(this.props.passedInfo.birthDate){
      this.setState({day:this.props.passedInfo.birthDate.slice(8,10)});
      this.setState({month:this.props.passedInfo.birthDate.slice(5,7)});
      this.setState({year:this.props.passedInfo.birthDate.slice(0,4)});
    }
    if (this.savedChanges) {
      document.getElementById("saved-changes").classList.remove("hide");
    }
    else document.getElementById("saved-changes").classList.add("hide");
  }
  }
  handleChange =e => {
    
    const {id, value}= e.target;
    let birthDate= { ...this.state.birthDate };  

    switch (id) {
      case "userName":
        this.setState({username: value}, () => {console.log(this.state)});

        if ( value.length === 0 ) {
          this.setState({usernameErrorMessage: "You must specify your username" }) ;
          if (document.getElementById(id)) {
          document.getElementById(id).style.borderColor= "#bd3200";}
        }
        else {
          this.setState({usernameErrorMessage: ""});
          if (document.getElementById(id)) {
          document.getElementById(id).style.borderColor= "#ced4da";}
        }
        break;
      case "gender":
        this.setState({gender: value}, () => {console.log(this.state)});
        break;
      case "day":
        birthDate.day=value;
        break;
      case "month":
        birthDate.month=value;
        break;
      case "year":
        birthDate.year=value;
        break;                
    }
    this.setState({birthDate}, () => console.log(this.state) );

  }
  
  handleSubmit = e => {
    e.preventDefault();
    // if (this.state.usernameErrorMessage === "") {
    //document.getElementById("edit-profile-form").submit();
      // this.setState({savedChanges: true}, () => console.log(this.state) );

    const requestOptions = {
        method:"PATCH",
        headers: { 'Content-Type': 'application/json','x-auth' : this.props.userToken},
        body: JSON.stringify({ 
          userName: this.state.username,
          gender: this.state.gender,
          day: this.state.birthDate.day,
          month: this.state.birthDate.month,
          year: this.state.birthDate.year
          // userName: "Fatema",
          // gender: "F",
          // day: "20",
          // month: "09",
          // year: "1998"
        })
    }
    const url = BASEURL + "users/me/editprofile"; 
    fetch(url,requestOptions)
      .then((response) => {
        console.log(response); 
        return response.text()})
      .then((data) => {
        console.log(data);  
        if (data=="Updated"){
          document.getElementById("saved-changes").classList.remove("hide");
        }
        window.location.reload(true);
        
      })
      .catch((error)=>{
        console.log(error);
      })
    //  }
  }
  
  render(){
    return(
      <div className="edit-profile-body">

        <div className="container">
          
          <h1 id="saved-changes" className="hide"> Your changes have been saved </h1>

          <h1 id="edit-profile-h1"> Edit Profile </h1>

          <div className="edit-profile-box col-12">
            <form id="edit-profile-form" noValidate>

              <div className="form-group">
                <label htmlFor="email" className="subtitle">Email</label>
                <p id="email"> {this.state.email} </p>
              </div>

              <div className="form-group">
                <label htmlFor="userName" className="subtitle">Username</label>
                <input type="text" className="form-control" id="userName" aria-describedby="emailHelp"
                defaultValue={this.state.username} onChange={this.handleChange}/>
                <p id="userNameError" className="empty-input p-2"> {this.state.usernameErrorMessage}</p>
              </div>

              <div className="form-group">

                <label htmlFor="gender" className="subtitle"> Gender </label>
                    <select id="gender" className="form-control" defaultValue= {this.state.gender} onChange={this.handleChange}> 
                      <option value="M"> Male </option>
                      <option value="F"> Female </option>
                    </select>

              </div>

              <div className="form-group ">
                <label htmlFor="edit-birth-date" className="subtitle"> Date of birth </label>
                <div className="row" id="edit-birth-date">

                  <div className="col-3 ">
                    <select id="day" className="form-control" defaultValue= {this.state.birthDate.day} onChange={this.handleChange}> 
                      <option value="01"> 01 </option>
                      <option value="02"> 02 </option>
                      <option value="03"> 03 </option>
                      <option value="04"> 04 </option>
                      <option value="05"> 05 </option>
                      <option value="06"> 06 </option>
                      <option value="07"> 07 </option>
                      <option value="08"> 08 </option>
                      <option value="09"> 09 </option>
                      <option value="10"> 10 </option>
                      <option value="11"> 11 </option>
                      <option value="12"> 12 </option>
                      <option value="13"> 13 </option>
                      <option value="14"> 14 </option>
                      <option value="15"> 15 </option>
                      <option value="16"> 16 </option>
                      <option value="17"> 17 </option>
                      <option value="18"> 18 </option>
                      <option value="19"> 19 </option>
                      <option value="20"> 20 </option>
                      <option value="21"> 21 </option>
                      <option value="22"> 22 </option>
                      <option value="23"> 23 </option>
                      <option value="24"> 24 </option>
                      <option value="25"> 25 </option>
                      <option value="26"> 26 </option>
                      <option value="27"> 27 </option>
                      <option value="28"> 28 </option>
                      <option value="29"> 29 </option>
                      <option value="30"> 30 </option>
                      <option value="31"> 31 </option>
                    </select>

                  </div>

                  <div className="col-6">
                    <select id="month" className="form-control" defaultValue= {this.state.birthDate.month} onChange={this.handleChange}> 
                      <option value="01"> January </option>
                      <option value="02"> February </option>
                      <option value="03"> March </option>
                      <option value="04"> April </option>
                      <option value="05"> May </option>
                      <option value="06"> June </option>
                      <option value="07"> July </option>
                      <option value="08"> August </option>
                      <option value="09"> September </option>
                      <option value="10"> October </option>
                      <option value="11"> November </option>
                      <option value="12"> December </option>
                    </select>
                  </div>

                  <div className="col-3 ">
                    <select id="year" className="form-control" defaultValue= {this.state.birthDate.year} onChange={this.handleChange}>
                      {
                        this.years.map((year, index) => {
                          return <option key={`year${index}`} value={year}>{year}</option>
                        })
                      }
                    </select>
                  </div>

                </div>
              </div>

              <div className="mt-5"> 
                <button id="save-profile" className="btn btn-success rounded-pill text-center d-flex justify-content-center"
                onClick={this.handleSubmit} >
                        SAVE PROFILE 
                </button>
                <a id="cancel" className="btn btn-sm btn-link " href="#"> CANCEL </a>
              </div>

            </form>
          </div>

        </div>

      </div>

    );
  }
}

const mapStateToProps = state => {

  return {
    userToken:state.userToken
  };

};

export default connect(mapStateToProps)(EditProfile);
