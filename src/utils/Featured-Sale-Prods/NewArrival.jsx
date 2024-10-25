import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import Whatsapp from '../Buttons/WhatsappBtn/Whatsapp';

const NewArrival = (props) => {
    const[product,getProduct]=useState([]);
    const [show, setShow] = useState(false);
    const[selection,getSelection]=useState(null);

    const getData=async()=>{
    try{

            const {data}=await axios.get('https://api.escuelajs.co/api/v1/products')
            
            getProduct(data); 
            
    
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
        const{images,id,price,description,title,category}=item;
        return(
            <div key={id} onClick={()=>showModal(item)} className='w-64  border-gray-100 border-2 mx-auto rounded-lg'>
                <img src={images[0]} alt="" onClick={()=>showModal(item)} className='rounded-t-lg h-72 w-100 ' />
                <div className='p-2 bg-gray-100'>

                <p className='text-sm p-1 bg-gray-100'>{title.slice(0,20)}</p>
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
            <div className='w-[100%]  md:w-[40%] border-2 border-gray-100 rounded-lg'> <img src={selection.images[0]} className='w-72 mx-auto ' alt="" /></div>
           
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

export default NewArrival
