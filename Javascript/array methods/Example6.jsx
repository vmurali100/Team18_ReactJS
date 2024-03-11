import React from 'react'

export const Example6 = () => {
    const numbers = [1,2,3,4,5]
    numbers.filter((number)=>{
return(
    console.log(number<=4)
)
   })
  return (
    <div>Ex</div>
  )
}
