'use client'
const ContactInfoForm = () => {

    return (
        <div>
 <div className="relative mb-6" data-te-input-wrapper-init>
              <input  placeholder="First Name" type="firstName" id="firstName" maxLength={500} required  name="senderFirstName" className="text-[18px] p-2 w-full bg-white rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Last Name" type="lastName" id="lastName" maxLength={500} required  name="senderLastName" className="w-full bg-white  p-2 rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Phone Number"  type="phoneNumber" id="phoneNumber" maxLength={500} required  name="senderPhoneNumber"className="w-full bg-white  p-2 rounded border border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Email"  type="email" id="email" maxLength={500} required  name="senderEmail" className="w-full bg-white rounded border  p-2 border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea placeholder="Tell Us About Your Case"   id="message" maxLength={500} required  name="senderMessage" className="w-full bg-white rounded border  p-2 border-gray-300 focus:border-logoBlue focus:ring-2 focus:ring-logoBlue text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                
              </div>
              <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
             
               
              </div>
        </div>
    )
}

export default ContactInfoForm