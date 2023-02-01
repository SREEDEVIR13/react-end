import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import './AdminTripManagement.css'
import Checkbox from './Checkbox'
import {  useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function AdminTripManagemen () {
    // const [list,setList] =useState([])
    const Navigate = useNavigate();
  
    // useEffect(() => {
    //     setList([...employees])
    //   }, []);
    const   PreviousTrips = () => {
 
        Navigate("/admin-trips-Previous");
      };

      const   CurrentTrips = () => {
 
        Navigate("/admin-trips");
      };
      const   HostedTrips = () => {
 
        Navigate("/admin-trips-hosted");
      };
  return (

   <>
   {/* <Sidebar> */}
    <div className='admincurrentTrips-container'>

<div className='Admin-tripHistory-buttons' >
    <button  onClick={() => {
                   
                   CurrentTrips();
                  }} className='admin-history-btn'>Current Trips</button>
    <button onClick={() => {
                   
                   HostedTrips();
                 }} className='admin-history-btn'>Hosted Trips</button>
    <button style= {{backgroundColor:"grey"}} className='admin-history-btn'>Previous Trips</button>
</div>

   <div className='table-container'>
  

   <Table>
      <Thead>
        <Tr>
        <Th></Th>
          <Th>Name</Th>
          <Th>FRom Place</Th>
          <Th>To place</Th>
          <Th>Date</Th>
          <Th>Time</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tablescon</Td>
          <Td>9 April 2019</Td>
          <Td>East Annex</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Capstone Data</Td>
          <Td>19 May 2019</Td>
          <Td>205 Gorgas</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
        <Tr>
        <Td>  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYihAWXxS1QToEvH1rDhk5oOJlgR8IAelpQ&usqp=CAU"alt="" /> </Td>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
          <Td>09/09/2023</Td>
          <Td>7.00</Td>
        </Tr>
      </Tbody>
    </Table>

  

    </div>
    </div>

   {/* </Sidebar> */}
   </>
  )
}
