import React from 'react'

const InfoCard = ({icon, data, label,bgColor}) => {
    return (
    <>
    <div className={`col-span-3 ${bgColor} p-[5px]`}>
        <div className='flex w-full justify-center items-center gap-x-[10px]'>
        {icon}
        <p>{label}</p>
        </div>
        <p>{data}</p>
        
    </div>
    </>
  )
}

export default InfoCard;