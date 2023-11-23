'use client'
const ContactInfoTopForm = () => {


    return (
        <div>
             <div className="relative mb-4 flex flex-row gap-2 ">
        <input placeholder="First Name" type="firstName" id="firstName" maxLength={500} required  name="senderFirstName"  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input placeholder="Last Name" type="lastName" id="lastName" maxLength={500} required  name="senderLastName"className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input placeholder="Email"  type="email" id="email" maxLength={500} required  name="senderEmail" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="flex flex-row w-full gap-3">
            <input placeholder="Phone Number"  type="phoneNumber" id="phoneNumber" maxLength={500} required  name="senderPhoneNumber" className="w-1/3 bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <textarea placeholder="Tell Us About Your Case" id="message" maxLength={500} required  name="senderMessage" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        
      </div>
        </div>
    )
}

export default ContactInfoTopForm