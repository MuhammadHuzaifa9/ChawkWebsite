import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Whatsapp from '../Buttons/WhatsappBtn/Whatsapp';

const FeaturedSale = (props) => {
    const[product,getProduct]=useState([]);
    const [show, setShow] = useState(false);
    const[selection,getSelection]=useState(null);

    
    const getData=async()=>{
    try{

            const {data}=await axios.get('https://fakestoreapi.in/api/products')
            
            getProduct(data.products); 
            
    
        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getData()
    },[])
    const showModal=(something)=>{
        getSelection(something)
        
        setShow(true);
        

    }

  return (
    <div className='open-sens flex flex-wrap w-11/12 mx-auto gap-8'>
      {product.slice(props.start,props.end).map((item)=>{
        const{image,id,price,description,title,category}=item;
        return(
            <div key={id} onClick={()=>showModal(item)} className='w-64 mx-auto border-gray-100 border-2 rounded-lg'>
                <img src={image} onClick={()=>showModal(item)} alt="" className=' '  />
                <div className='p-2'>

                <p onClick={()=>showModal(item)} className='text-sm p-1 bg-gray-100'>{title.slice(0,20)}</p>
                <p className='text-sm p-1 bg-gray-100 text-gray-400 text-[12px]'>{description.slice(0,35)}...</p>
                <p className='bg-gray-100 p-1 text-2xl rounded-e-lg'>${price}.0</p>
                </div>
                

                
            </div>
        )
      })}
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="large-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header className='border-none h-0' closeButton>
          
        </Modal.Header>
        <Modal.Body >
            {selection?
          <div className='flex flex-col md:flex-row  items-center '>
            <div className='w-[100%]  md:w-[40%] border-2 border-gray-100 rounded-lg'> <img src={selection.image} className='w-72 mx-auto ' alt="" /></div>
           
            <div className='w-[100%] md:w-[60%]'>
             <h1 className='text-2xl font-semibold spacing tracking-wide p-3'> {selection.title.split(' ').slice(0,4).join(' ')}</h1>
              <p className='px-3'>
           
            {selection.description} 
            </p>
            <div className=' p-3'>

              <h3 className='text-3xl font-semibold  my-6 md:inline'>${selection.price}.00 &nbsp; &nbsp; </h3><span className='text-2xl '>
              <Whatsapp select={selection}/>  </span>
            </div>
            </div>
            
          
          </div>
          :"Description"
          
          }
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default FeaturedSale
