import React from 'react'

export const Heading = ({title}: {title: string}) => {
  return (
    <>
    <h3 className='my-5 mb-10 text-center text-primary font-bold md:text-4xl text-2xl'>{title}</h3>
    </>
  )
}
