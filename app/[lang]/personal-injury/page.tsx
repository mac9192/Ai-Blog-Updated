import {getDictionary} from '../../../lib/getDictionary'
import HomeBlog from '@frontComponents/HomeBlog'
import Header from '../../../servicesComponents/Header'
import ServiceCards from '../../../servicesComponents/ServiceCards'
import Testimonials from '../../../servicesComponents/Testimonials'


const Immigration = async ({
    params,
  }: {
    params: {
      lang: string;
      };
  }) => {

    const locale = params.lang

    const dictionary = await getDictionary(locale)
    
    return (
 

<div>
        <Header  />
        <ServiceCards  />
        <Testimonials  />
        
 </div>
    )
}

export default Immigration

