import React from 'react'


const FormField = ({ LabelName, type, name, placeholder, value, handlechange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlfor={name}
          className="block text-sm font-medium text-gray-900
        ">
          {LabelName }
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'  
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlechange}
        required
        className='bg-grey-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-[#6469ff] focus:broder-[#6469ff] block w-full shadow-sm sm:text-sm broder outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField