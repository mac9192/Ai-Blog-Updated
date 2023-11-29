import Image from 'next/image'
import laweyer3 from '../public/assets/lawyer3.jpg' 
import lawfam from '../public/assets/lawfam.png'
import fam from '../public/assets/hispanic-fam.jpg'

const Testimonials = ({dictionary}:{dictionary:any}) => {
    return (

        <div>

<div className="md:bg-white sm:bg-logoBlue md:p-0 md:p-10 lg:mt-[25px] sm:mt-[0px] text-center   md:mx-auto sm:text-white md:text-black sm:p-3  md:mb-[-40px] pt-[200px]  ">
    <div className="flex sm:flex-col md:flex-row   md:mx-auto gap-x-3   text-center mx-auto pt-16  mb-16">
            
            <div className="md:w-/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[800px] md:text-right">
                <Image className="  md:w-1/10  border-r-4 border-logoBlue" width={550} height={10} src={fam} alt=""/>
            </div>
            <div className="  sm:text-center sm:mx-auto sm:w-full md:text-[25px]  md:max-w-[450px] md:text-left">
    <p className="pt-3 sm:text-white md:text-black   ">{dictionary.personalinjury.card1}</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>
            
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[20px] md:max-w-[450px] md:text-left sm:hidden  ">
            <p className="pt-3 sm:text-white md:text-black  border-l-4 border-logoBlue p-6">{dictionary.personalinjury.card1}</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>

    </div>
  </div>
    
  <div className="sm:hidden md:block">
          <div className="flex items-center justify-center h-96 bg-fixed bg-piSmall bg-cover space-x-10  ">
            <div className="flex sm:flex-col md:flex-r w-1/2">
                   <p className="text-4xl tracking-wide text-white w-3/4  ">
                   {dictionary.personalinjury.ctaCard}
                   </p>
                   <p className="text-[18px] text-white pt-4 ">
                   {dictionary.personalinjury.subctaCard}
                   </p>
                   <div className="pt-3">
                         <button className="w-1/6 flex text-left text-logoBlue bg-white  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-2xl">Book</button>
                   </div>

                 
            </div>
     
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[450px] md:text-right">
                <Image className="    " width={2200} height={10} src={laweyer3} alt=""/>
            </div>
     
   </div>

   </div>
        </div>
    )
}

export default Testimonials