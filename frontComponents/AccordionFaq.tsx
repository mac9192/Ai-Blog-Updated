'use client'
import { Accordion, AccordionItem, AccordionTrigger } from "../chatbot-components/ui/accordion"
import { FC } from "react"
import ChatHeader from '../chatbot-components/ChatHeader'
import ChatInput from '../chatbot-components/ChatInput'
import { AccordionContent } from "@radix-ui/react-accordion"
import ChatMessages from '../chatbot-components/ChatMessages'
import Image from 'next/image'
import robot from '../public/assets/robot.svg'
import gerardo from '../public/assets/profile-gerardo.png'

const AccordionFaq = ({dictionary}:{dictionary:any}) =>{

    return(
        <div className="md:container md:mx-auto sm:p-4 md:mt-[50px] sm:mt-[10px] mb-[100px]">
               <div className="md:p-10 md:text-[36px] sm:text-[25px] sm:py-8  mx-auto text-center max-w-screen-2xl text-logoBlue">
    <p className="text-5xl pb-10">{dictionary.faq.firm}</p>
              </div>
        <div className="flex md:flex-row sm:flex-col gap-x-5 mx-auto">
        <div className="md:w-3/5 flex mdflex-row sm:flex-col mx-auto ">
                    <Accordion type="single"
  collapsible
  defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <p className="text-white mx-auto p-3 text-2xl"> {dictionary.faq.firm} </p>
                        </AccordionTrigger>
                        <AccordionContent>
    <p className=" mx-auto text-black border p-10 text-xl"> {dictionary.faq.firmDesc}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
    <p className="text-white mx-auto p-3 text-2xl"> {dictionary.faq.different}</p>
                        </AccordionTrigger>
                        <AccordionContent>
                        <p className=" mx-auto text-black border p-10 text-xl">{dictionary.faq.differentDesc} </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
    <p className="text-white mx-auto p-3 text-2xl">{dictionary.faq.youFirst}</p>
                        </AccordionTrigger>
                        <AccordionContent>
    <p className=" mx-auto text-black border p-10 text-xl"> {dictionary.faq.youFirstDesc}</p>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                </div>
  
        <div className="flex flex-col sm:py-5 md:py-0">
                <Image className="rounded mx-auto " src = {gerardo} alt="/" width="600" height="50" priority={true} />
                <p className="text-center text-[24px] p-3">Attorney Gerardo Briceno</p>
          </div>

        </div>
     


        </div>
    )

}

export default AccordionFaq