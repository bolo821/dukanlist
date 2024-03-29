import React from 'react';
import  "./select.css"

const Select = () => {
    return (
        <div>
           <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-9 col-lg-10 col-md-11">
            <div class="card rounded-0 b-0">
                <div class="card-header">
                    <div class="row d-flex justify-content-between">
                        
                    </div>
                </div>
                <div class="row d-flex justify-content-sm-end justify-content-start px-5">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="row d-flex justify-content-sm-end justify-content-start px-5">
                    <div class="count text-center">
                        <p class="mb-sm-0 pb-sm-0"><strong><span id="cnt">25</span>%</strong> <span class="yellow-text">Completed</span></p>
                    </div>
                </div>
                <div class="card-body show pt-0">
                    <h4 class="heading mb-4 pb-1">What should be done?</h4>
                    <div class="radio-group row justify-content-between px-3">
                        <div class="card-block radio selected">
                            <div class="row justify-content-end d-flex px-3">
                               
                            </div>
                            <div class="row justify-content-center d-flex">
                                
                                <h5 class="mb-4">Create Website</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Website Relaunch</h5>
                            </div>
                        </div>
                        <div class="card-block radio">
                            <div class="row justify-content-end d-flex px-3">
                                
                            </div>
                            <div class="row justify-content-center d-flex">
                               
                                <h5 class="mb-4">Don't Know</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center"> <button class="btn btn-blue next mx-2" id="next1">Next<span class="fa fa-long-arrow-right"></span></button> </div>
                </div>
                <div class="card-body pt-0">
                    <h4 class="heading mb-4 pb-1">Personal details</h4> <label class="text-danger mb-3">* Required</label>
                    <div class="form-group"> <label class="form-control-label">First Name * :</label> <input type="text" id="fname" name="fname" placeholder="" class="form-control" onblur="validate1(1)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Last Name * :</label> <input type="text" id="lname" name="lname" placeholder="" class="form-control" onblur="validate1(2)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Email ID * :</label> <input type="text" id="email" name="email" placeholder="" class="form-control" onblur="validate1(3)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Contact No. * :</label> <input type="text" id="mob" name="mob" placeholder="" class="form-control" onblur="validate1(4)"/> </div>
                    <div class="row justify-content-center"> <button class="btn btn-secondary prev mx-2"><span class="fa fa-long-arrow-left"></span>Back</button> <button class="btn btn-blue next mx-2" id="next2" onclick="validate1(0)">Next<span class="fa fa-long-arrow-right"></span></button> </div>
                </div>
                <div class="card-body pt-0">
                    <h4 class="heading mb-4 pb-1">Website details</h4> <label class="text-danger mb-3">* Required</label>
                    <div class="form-group"> <label class="form-control-label">Company Name :</label> <input type="text" id="cname" name="cname" placeholder="" class="form-control" onblur="validate2(1)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Zip Code :</label> <input type="text" id="zip" name="zip" placeholder="" class="form-control" onblur="validate2(2)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Website Title * :</label> <input type="text" id="title" name="title" placeholder="" class="form-control" onblur="validate2(3)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Website Description * :</label> <input type="text" id="desc" name="desc" placeholder="" class="form-control" onblur="validate2(4)"/> </div>
                    <div class="form-group"> <label class="form-control-label">Website Type :</label>
                        <div class="select mb-3"> <select name="type-info" class="form-control">
                                <option>E-commerce</option>
                                <option>Entertainment</option>
                                <option>Personal</option>
                                <option>Business</option>
                                <option>Portfolio</option>
                                <option>Education</option>
                            </select> </div>
                    </div>
                    <div class="row justify-content-center"> <button class="btn btn-secondary prev mx-2"><span class="fa fa-long-arrow-left"></span>Back</button> <button class="btn btn-blue next mx-2" id="next3" onclick="validate2(0)">Next<span class="fa fa-long-arrow-right"></span></button> </div>
                </div>
                <div class="card-body pt-0">
                    <h4 class="heading mb-4 pb-1">Confirmation</h4>
                    <div class="row justify-content-start px-3">
                        <p>Form has been submitted Successfully ! You will recieve estimation on your email id and contact no.</p>
                    </div>
                    <div class="row justify-content-center"> <img src="https://i.imgur.com/krsWHvd.gif" class="check"/> </div>
                </div>
            </div>
        </div>
    </div>
</div> 

        </div>
    );
}

export default Select;
