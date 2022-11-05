import React from 'react'

const InfoCard = ({icon, data, label,bgColor}) => {
    return (
    <>
    <div className={`col-span-3 ${bgColor} py-3 px-2`}>
        {icon}
        <div className='flex w-full justify-center items-center gap-x-[10px]'>
        <p>{label}</p>
        <p>{data}</p>
        </div>
        
    </div>
    </>
  )
}

export default InfoCard;