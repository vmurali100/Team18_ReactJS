import React, { memo } from 'react'

const Button = ({handleClick,children}) => {
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

// export default React.memo(Button)
export default memo(Button)
