import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header/Header';
import { Modal } from 'react-bootstrap';
import Category from '../components/Categories/Category';

const CategoryProducts = () => {
   
  return (
    <>
    <Header/>
    <Category/>
    </>
  )
}

export default CategoryProducts
