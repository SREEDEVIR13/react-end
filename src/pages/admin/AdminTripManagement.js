import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import './AdminTripManagement.css'
import Checkbox from './Checkbox'

export default function AdminTripManagemen () {
    // const [list,setList] =useState([])

  
    // useEffect(() => {
    //     setList([...employees])
    //   }, []);
  return (

   <>
   {/* <Sidebar> */}
    <div className='admincurrentTrips-container'>

<div className='Admin-tripHistory-buttons' >
    <button  className='admin-history-btn'>Current Trips</button>
    <button className='admin-history-btn'>Hosted Trips</button>
    <button className='admin-history-btn'>Previous Trips</button>
</div>

   <div className='table-container'>
    {/* <div className='table-data'>
    <table>
        <thead>
        <tr>
        <th><Checkbox/></th>
            <th>Employees</th>
            <th>From place</th>
            <th>To place</th>
            {/* <th>profil pic</th> */}
{/* 
        </tr>
        </thead>
        <tbody>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
            <tr>
                <td> <Checkbox/></td>
                <td>
                <div>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" />
               <div> <span> sreedevi R</span></div>
                </div>
                </td>
                <td> kakkanad</td>
                <td> lulu 1</td>
              
            </tr>
        </tbody>
    </table> */}
   {/* </div>  */}

   <table>
        <tr id="header">
            <th></th>
            <th> Name</th>
            <th>From</th>
            <th>To place</th>
         
        </tr>
        <tr>

            <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>
        

        </tr>
        <tr>
        <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>

        </tr>
        <tr>
        <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>

        </tr>
        <tr>
        <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>

        </tr>
        <tr>
        <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>

        </tr>
        <tr>
        <td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </td>
            <td>Doe </td>
            <td>kakkana </td>
            <td>info park </td>

        </tr>

    </table>
  

    </div>
    </div>

   {/* </Sidebar> */}
   </>
  )
}



