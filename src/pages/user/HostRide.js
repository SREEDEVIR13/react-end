import React, { useState, useEffect } from "react";
import "./HostRide.css"
import axios from "axios";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa"
import Layout from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom"
import Select from "react-select";


const initialfieldValues = {
    StartLocation: '',
    EndLocation: '',
    StartDate: '',
    StartTime: '',
    VehicleId: '',
    MemberId: 'SYT865',
    NumberOfSeats: 0,
    InvitedMembers: ['']
}



const Id = "SYT865";
export default function HostRide() {

    //const [invitedUserObj, setUserList] = useState([]);

    var InvitedUsers;

    const [VehicleList, setVehicleList] = useState([]);

    // console.log(SampleList[1]);
    const [invitedUserObj, setInvitedUsers] = useState();
    const [invitedUserList, setInvitedUserList] = useState();

    const DdlHandle = (e) => {
        setInvitedUsers(Array.isArray(e) ? e.map(x => x.value) : [])
        callHandle();

    }
    const callHandle = () => {
        values.InvitedMembers = invitedUserObj;
    }



    const [values, setValues] = useState(initialfieldValues);
    const [errors, setErrors] = useState({});
    const [vehicles, setVehicles] = useState()
    const [userList, setUserList] = useState()
    const [isSubmit, setIsSubmit] = useState(false);
    const Navigate = useNavigate();

    const [isCheck, setIsCheck] = useState(false);

    useEffect(() => {
        GetWheels();
        GetUsers();
    }, [])

    useEffect(() => {
        refreshVehicleList();
    }, []);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        console.log("vehicleList:", vehicles);

    }
    const validate = (values) => {
        const err = {};
        if (!values.startLocation) {
            err.startLocation = "Start Location is Required";
        }

        if (!values.endLocation) {
            err.endLocation = "End Location is Required";
        }
        return err;

    }
    const resetForm = () => {
        setValues(initialfieldValues)
        setErrors({})
    }

    const handleSubmit = e => {
        console.log('submit hit')
        //console.log(values.MemberId)
        console.log(values)
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true);
        feedData();
        //navigate("/home-page")


    }

    const GetWheels = () => {
        axios
            .get(`https://localhost:7149/api/Vehicle/getVehicle/SYT454`)
            .then((Response) => {
                setVehicles(Response.data);
                console.log("vehicle-get", Response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    const GetUsers = () => {
        axios
            .get('https://localhost:7149/api/Registration/getallusers')
            .then((Response) => {
                setUserList(Response.data);

                // console.log("User-List:",userList);

                InvitedUsers = userList;
                setInvitedUserList(InvitedUsers);
                // console.log(Response.data);
                console.log("invited:", invitedUserList)


            })
    }

    const UserAPI = (url = 'https://localhost:7149/api/HostRide/hostyourride') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        UserAPI().create(formData)
            .then(res => {
                onSuccess();
            })
            .catch(err => console.log(err))
    }

    const feedData = () => {
        const formData = new FormData()
        console.log(values.NumberOfSeats)
        formData.append('StartLocation', values.StartLocation)
        formData.append('EndLocation', values.EndLocation)
        formData.append('StartDate', values.StartDate)
        formData.append('StartTime', values.StartTime)
        formData.append('VehicleId', values.VehicleId)
        formData.append('NumberOfSeats', values.NumberOfSeats)
        formData.append('MemberId', values.MemberId)
        formData.append('InvitedMembers', values.InvitedMembers)
        const test = {
            'StartLocation': values.StartLocation,
            'EndLocation': values.EndLocation,
            'StartDate': values.StartDate,
            'StartTime': values.StartTime,
            'VehicleId': values.VehicleId,
            'NumberOfSeats': values.NumberOfSeats,
            'MemberId': values.MemberId,
            'InvitedMembers': values.InvitedMembers
        }
        console.log(test)
        addOrEdit(test, resetForm)
    }

    function refreshVehicleList() {
        axios
            .get(`https://localhost:7149/api/Vehicle/getVehicle/` + Id)
            .then((Response) => {


                setVehicleList(Response.data);
                console.log("vehicle-get", Response.data);

            })
            .catch((error) => {
                console.log(error);
            });

    }


    const statusCheck = (vehicleId) => {
        setIsCheck(true);
        // Navigate(`/check-ride/${vehicleId}`);
        console.log(vehicleId);
    };




    return (
        <>
            <Layout>
                <div className="hr-title">
                    <h2>Host a Pool</h2>
                </div>
                <div className="body-content">
                    <form autoComplete="off" className="hostaride" onSubmit={handleSubmit}>


                        <div className="input-box">
                            <label>Start Location</label>
                            <input className={"form-control"} type="text" placeholder="Hey,Where do you start?" name="StartLocation"
                                value={values.StartLocation}
                                onChange={handleInputChange} />
                            <p className="error-text">{errors.StartLocation}</p>
                        </div>


                        <div className="column">
                            <div className="input-box">
                                <label>Date</label>
                                <input className={"form-control"} type="date" placeholder="Which Date?" name="StartDate"
                                    value={values.StartDate}
                                    onChange={handleInputChange} required />
                                <p className="error-text">{errors.StartDate}</p>
                            </div>
                            <div className="input-box">
                                <label>Time</label>
                                <input className={"form-control"} type="time" placeholder="And What Time?" name="StartTime"
                                    value={values.StartTime}
                                    onChange={handleInputChange} required />
                                <p className="error-text">{errors.StartTime}</p>
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Destination</label>
                            <input className={"form-control"} type="text" placeholder="Enter your destination" name="EndLocation"
                                value={values.EndLocation}
                                onChange={handleInputChange} required />
                            <p className="error-text">{errors.EndLocation}</p>
                        </div>
                        <div className="vehicle-add-div">
                            <div className="vehicle-input-box">
                                <label>Add/Select Wheels </label>
                                <Link className='add-w' to="/add-wheels"><Icons.FaPlusCircle></Icons.FaPlusCircle><i class="fa fa-plus-circle" aria-hidden="true"></i></Link>
                            </div>
                            <div className="vehicle-image-display">
                                {VehicleList.map((data) => {
                                    return (
                                        // <div key={data.vehicleId} className="v-list">
                                        <div className="v-image">
                                            {/* <li key={data.vehicleId}></li> */}
                                            <input type="checkbox" />
                                            <img onClick={() => {
                                                statusCheck(data.vehicleId);
                                                values.VehicleId = data.vehicleId;
                                            }}
                                                src={data.imageSrc}
                                                className="card-img-top rounded-circle vehicle-image"
                                            />

                                        </div>
                                        // </div>
                                    );
                                })}
                            </div>

                        </div>


                        <div className="column">
                            <div className="input-box">
                                <label>Fare</label>
                                <input type="number" className={"form-control"} placeholder="Fare" name="fare" />
                            </div>
                            <div className="input-box">
                                <label>Number of Seats</label>
                                <div className="select-box">

                                    <select type="number" className={"form-control"} placeholder="Number" name="NumberOfSeats" value={values.NumberOfSeats}
                                        onChange={handleInputChange} required>

                                        <option hidden>Seats</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="input-box">
                            <label>Invite Others</label>
                            <div className="user-search">
                                <Select isMulti options={userList} onChange={DdlHandle} ></Select>
                                {/* <div>
                                <b>The selected country: </b><h3>{invitedUserObj}</h3>
                            </div> */}
                            </div>

                        </div>
                        {console.log("selected users:", invitedUserObj)}
                        {console.log("invitation sent by", values.InvitedMembers)}
                        <div className='submit'>
                            <button>Host Pool</button>
                        </div>

                    </form>
                </div>
                <Footer></Footer>

            </Layout>

        </>
    )
}