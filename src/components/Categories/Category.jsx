import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import Whatsapp from '../../utils/Buttons/WhatsappBtn/Whatsapp';

const Category = () => {
    const[product,getProduct]=useState([])
    const [show, setShow] = useState(false);
    const[selection,getSelection]=useState(null);

    const {category}=useParams();
    const getData=async()=>{
        const {data}=await axios.get('https://api.escuelajs.co/api/v1/products');
        getProduct(data);
    } 
    useEffect(()=>{
        getData()
    },[])
    const matchedCategory=product.filter((item)=>(item.category.name.toLowerCase()==category.toLowerCase()))
    const showModal=(something)=>{
        getSelection(something)
        
        setShow(true);
        

    }
    return (
        <div className='open-sans'>
            
            <h1 className='text-3xl w-11/12 mx-auto my-3 font-normal'><span className='font-semibold'>Category:</span> {category}</h1>
            <div className='flex flex-wrap justify-center items-center gap-4'>
                {matchedCategory.map((item)=>{
                    const{images,id,price,description,title,category}=item;
                    return(
                        
                
                    <div key={id} className='w-64 mx-auto border-gray-100 border-2 rounded-lg'>
                        <img src={title=='New Product'? category.image:images} onClick={()=>showModal(item)} alt="" className='rounded-t-lg '  />
                        <div className='p-2'>
    
                        <p onClick={()=>showModal(item)} className='text-sm p-1 bg-gray-100'>{title.slice(0,20)}</p>
                        <p className='text-sm p-1 bg-gray-100 text-gray-400 text-[12px]'>{description.slice(0,35)}...</p>
                        <p className='bg-gray-100 p-1 text-2xl rounded-e-lg'>${price}.0</p>
                        </div>
                        
    
                        
                    </div>
                    )
                
                        
                })}
            </div>
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

export default Category
