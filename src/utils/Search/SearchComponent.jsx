import React, { useContext, useState } from 'react'
import FeaturedSale from '../Featured-Sale-Prods/FeaturedSale'
import NewArrival from '../Featured-Sale-Prods/NewArrival'
import { ProductContext } from '../ContextApi/AuthContext'
import Whatsapp from '../Buttons/WhatsappBtn/Whatsapp'
import { Modal } from 'react-bootstrap'

const SearchComponent = () => {
  const [show, setShow] = useState(false);
    const[selection,getSelection]=useState(null);

  const[checks,setCheck]=useState({
    under10:false,
    under50:false,
    under100:false,
    under1000:false
  })
  const handleChange=(e)=>{
    const {name,checked}=e.target;
    setCheck(()=>({
      [name]:checked,
    }))

  }
  
  const {products}=useContext(ProductContext)

  const fileredData=products.filter((item)=>{
    const {price}=item;
    return(
      (checks.under1000 && price<=1000)||
      (checks.under100 && price<=100)||
      (checks.under50 && price<=50)||
      (checks.under10 && price<=10)
    );
  });
  console.log(fileredData)
  const showModal=(something)=>{
    getSelection(something)
    
    setShow(true);
    

}

  return (
    <div className='flex w-11/12 mx-auto open-sans'>
        <div className='md:w-[25%] h-screen sticky  top-0 z-30'>
            <div className='text-2xl font-semibold my-8 tracking-wider'>Search</div>
            <div className='text-xl font-medium my-4 border-b tracking-wider border-gray-200'>Filters</div>
            <div className='font-medium tracking-wider'>Price</div>
            <div>
              <div><input type="checkbox" name="under10" id="" checked={checks.under10} onChange={handleChange} />Under $10</div>
              <div><input type="checkbox" name="under50" id="" checked={checks.under50} onChange={handleChange} />Under $50</div>
              <div><input type="checkbox" name="under100" id="" checked={checks.under100} onChange={handleChange} />Under $100</div>
              <div><input type="checkbox" name="under1000" id="" checked={checks.under1000} onChange={handleChange} />Under $1000</div>

            </div>
        </div>
        <div className='open-sans w-[75%] mx-auto my-4 text-3xl font-semibold text-black flex flex-wrap'>
            {/* <h1 className='my-8'>Featured Products</h1>
            <FeaturedSale start='0' end='8'/>
            <h1 className='mt-16 mb-4'>Flash Sale</h1>
            <FeaturedSale start='8' end='16'/>
            <img src="/banner4.png" alt="" className='w-100 mx-auto my-8' />
            <h1 className='mt-16 mb-4'>New Arrivals</h1>
            <NewArrival start='0' end='8'/> */}
            {checks.under10 || checks.under100 || checks.under1000 || checks.under50 ? null: "Please Select a Price Filter!"}
            {fileredData.sort((a,b)=>b.price-a.price).map((item)=>{
              const{images,id,price,description,title,category}=item;
              return(
                <div key={id} className='w-64 mx-auto border-gray-100 border-2 rounded-lg'>
                <img src={(title=='New Product'? category.image:images)} onClick={()=>showModal(item)} alt="" className=' '  />
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
            <div className='w-[100%]  md:w-[40%] border-2 border-gray-100 rounded-lg'> <img src={selection.title=='New Product'? selection.category.image:selection.images} className='w-72 mx-auto ' alt="" /></div>
           
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
    </div>
  )
}

export default SearchComponent
