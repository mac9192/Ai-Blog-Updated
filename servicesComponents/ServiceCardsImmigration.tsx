import Image from 'next/image'
import carAccident from  '../public/assets/card-car-accident.jpeg'


const ServiceCards = ({dictionary}:{dictionary:any}) => {

    return (
        <div>
         <div className="mt-[400px] sm:mt-[20px]   md:mx-auto md:pl-[100px] md:pr-[100px]">
      <p className="md:mt-[400px]  text-5xl tracking-wide w-full border-b-4 border-dotted border-logoBlue text-logoBlue p-3 md:text-left sm:text-center">Immigration Services:</p>
</div>
 
     
<div className='grid md:grid-cols-3  md:mx-auto sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense  p-10 mt-[19px] md:pl-[100px] md:pr-[100px] '>
       
<div className='bg-family bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">{dictionary.immigration.family1}</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-removal bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">{dictionary.immigration.removal1}</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-business bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">{dictionary.immigration.business1}</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
        </div>
    )
}

export default ServiceCards