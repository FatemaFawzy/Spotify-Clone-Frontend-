import React from "react";
import "./EditProfile.css";

const EditProfile=()=>(

<div className="EditProfileBody">
<div className="container">
        <h1 id="EditProfileH1"> Edit Profile </h1>

        <div className="EditProfileBox col-12">

        <form>
                <div className="form-group">

                <label for="email" className="subtitle">Email</label>
                {/* <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                 */}
                <p id="email"> fatema123@gmail.com </p>
                </div>
                <div className="form-group">

                <label for="userName" className="subtitle">Username</label>
                <input type="email" className="form-control" id="userName" aria-describedby="emailHelp"/>
                </div>

                <div className="form-group">
                        <label for="genderOptions" className="subtitle"> Gender </label>
                        <div id="genderOptions">
                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="Male" value="Male"/>
                                        <label className="form-check-label" for="Male">Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="Female" value="Female"/>
                                        <label className="form-check-label" for="Female">Female</label>
                                </div>
                        </div>
                </div>

                <div className="form-group ">
                <label for="editbirthDate" className="subtitle"> Date of birth </label>
                        <div className="row" id="editbirthDate">

                                <div className="col-3 ">
                                        <input id="day" className=" form-control" type="number" placeholder="Day" max="31" min="1" maxlength="2" required/>
                                </div>

                                <div className="col-6">
                                        <select id="month" className="form-control" required> 
                                                <option> Month </option>
                                                <option> January </option>
                                                <option> February </option>
                                                <option> March </option>
                                                <option> April </option>
                                                <option> May </option>
                                                <option> June </option>
                                                <option> July </option>
                                                <option> August </option>
                                                <option> September </option>
                                                <option> October </option>
                                                <option> November </option>
                                                <option> December </option>
                                        </select>
                                </div>

                                <div className="col-3 ">
                                        <input id="year" className="form-control" type="number" placeholder="Year" max="1999" min="1900" maxlength="4" required/>
                                </div>

                        </div>
                 </div>

                <div className="mt-5"> 
                        <button id="saveProfile" className="btn btn-success rounded-pill text-center d-flex justify-content-center ">
                                SAVE PROFILE 
                        </button>
                        <a id="cancel" className="btn btn-sm btn-link " href="#"> CANCEL </a>
                </div>

        </form>
        </div>
</div>
</div>

);

export default EditProfile
