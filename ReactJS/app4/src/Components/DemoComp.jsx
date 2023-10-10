import React, { memo } from 'react'

const DemoComp = () => {
    console.log("DemoComp component Rendered !!")
  return (
    <div>
      <h2>Welcome to Memo Component</h2>
    </div>
  )
}

export default memo(DemoComp)
// export default DemoComp
