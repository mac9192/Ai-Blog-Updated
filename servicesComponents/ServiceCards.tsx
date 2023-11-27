import Image from 'next/image'
import carAccident from  '../public/assets/card-car-accident.jpeg'


const ServiceCards = () => {

    return (
        <div>
         <div className="mt-[400px] sm:mt-[20px]   md:mx-auto md:pl-[40px] md:pr-[40px]">
      <p className="md:mt-[400px]  text-5xl tracking-wide w-full border-b-4 border-dotted border-logoBlue text-logoBlue p-3 md:text-left sm:text-center ">Personal Injury Services:</p>
</div>
 
<div className='grid   md:mx-auto md:grid-cols-3 sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense pt-10   md:pl-[40px] md:pr-[40px]  '>
   
      <div className='bg-logoBlue sm:hidden md:block shadow-xl  row-span-1 md:col-span-2 ' > 
        <div className="flex flex-row w-full ">
            <div className=" ">
            <Image className=" min-h-[405px] " width={500} height={500} src={carAccident} alt=""/>
            </div>
            <div className="flex flex-col w-2/3">
                <p className="text-3xl text-white  text-center p-3 pt-10">MOTOR VEHICLE ACCIDENTS</p>
                <span className="border-dotted border-b-4 border-white   w-full text-center mx-auto pl-10 pt-5" />
                <p className="text-2xl text-white    pt-10 mx-auto    text-left p-3 tracking-wide   ">We provide our clients with compassionate, yet aggressive representation  vehicle accidents.</p>
                <p className="text-xl text-white  text-left pt-12    pl-4 tracking-wide text-left  p  ">Learn More</p>
            </div>

        </div>
        
      </div>

      <div className='md:hidden bg-carAccident bg-cover shadow-xl min-h-[320px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">MOTOR VEHICLE ACCIDENTS</p>
                </div>
            </div>
        </div>
      </div>
   

      <div className='bg-truck bg-cover shadow-xl min-h-[350px]' >
         <div className="relative    pt-[405px]  ...">
            <div className="absolute inset-x-0 bottom-0 h-20 mt-3 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">TRUCK ACCIDENTS</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
     
<div className='grid md:grid-cols-3   md:mx-auto sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense  mt-[19px]  md:pl-[40px] md:pr-[40px] '>
       
<div className='bg-slip bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">SLIP AND FALLS</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-death bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WRONGFUL DEATH</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-worker bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WORKERS COMPENSATION</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
        </div>
    )
}

export default ServiceCards


/*


     <div className="flex flex-row   sm:w-full  ">
            <Image className="h-full" width={780} height={400} src={carAccident} alt=""/>
            </div>
            <div className="flex flex-col  w-full p-5  "> 
                <p className="md:text-2xl sm:text-2xl text-white  pt-7 p-2 border-dotted border-b-4 border-white w-full text-left">MOTOR VEHICLE ACCIDENTS</p>
            
                <p className="w-full text-xl pt-12 text-white">We provide our clients with compassionate, yet aggressive representatio  vehicle accidents.</p>
                <p className="w-full text-xl  text-white pt-12 sm:mb-5">Learn More </p>
            </div>

*/