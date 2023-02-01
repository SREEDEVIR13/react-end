import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import './AdminTripManagement.css'

import {  useNavigate } from "react-router-dom";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
export default function AdminTripManagemen () {
    // const [list,setList] =useState([])
    const Navigate = useNavigate();
  
    // useEffect(() => {
    //     setList([...employees])
    //   }, []);


    const   HostedTrips = () => {
 
        Navigate("/admin-trips-hosted");
      };
      const   PreviousTrips = () => {
 
        Navigate("/admin-trips-Previous");
      };
  return (

   <>
   {/* <Sidebar> */}
    <div className='admincurrentTrips-container'>

<div className='Admin-tripHistory-buttons' >
    <button  style= {{backgroundColor:"grey"}} className='admin-history-btn'>Current Trips</button>
    <button onClick={() => {
                   
                   HostedTrips();
                 }} className='admin-history-btn'>Hosted Trips</button>
    <button onClick={() => {
                   
                  PreviousTrips();
                 }} className='admin-history-btn'>Previous Trips</button>
</div>

   <div    className='table-container'>
    
    
<Table className="trip-table" >
      <Thead className="trip-head">
        <Tr className="trip-tr">
        <Th className="trip-tr"></Th>
          <Th className="trip-th" > Name</Th>
          <Th className="trip-th">FRom Place</Th>
          <Th className="trip-th">To place</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="trip-tr">
        <Td  className="trip-th">  <img className='trips-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tablescon</Td>
          <Td   className="trip-th">9 April 2019</Td>
          <Td   className="trip-th">East Annex</Td>
        </Tr>
        <Tr className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Capstone Data</Td>
          <Td  className="trip-th">19 May 2019</Td>
          <Td  className="trip-th">205 Gorgas</Td>
        </Tr>
        <Tr  className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tuscaloosa D3</Td>
          <Td  className="trip-th">29 June 2019</Td>
          <Td  className="trip-th">Github</Td>
        </Tr>
        <Tr  className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tuscaloosa D3</Td>
          <Td  className="trip-th">29 June 2019</Td>
          <Td  className="trip-th">Github</Td>
        </Tr>
        <Tr  className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tuscaloosa D3</Td>
          <Td  className="trip-th">29 June 2019</Td>
          <Td  className="trip-th">Github</Td>
        </Tr>
        <Tr  className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tuscaloosa D3</Td>
          <Td  className="trip-th">29 June 2019</Td>
          <Td  className="trip-th">Github</Td>
        </Tr>
        <Tr  className="trip-tr">
        <Td  className="trip-th">  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td  className="trip-th">Tuscaloosa D3</Td>
          <Td  className="trip-th">29 June 2019</Td>
          <Td  className="trip-th">Github</Td>
        </Tr>
      </Tbody>
    </Table>






    </div>
    </div>

   {/* </Sidebar> */}
   </>
  )
}



