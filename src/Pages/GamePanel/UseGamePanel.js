import { useState } from 'react'
import { animals } from '../../Constants/constants'


const UseGamePanel = () => {

  const [preview, setPreview] = useState(false)

  const onPreview = () => {
    setPreview(!preview)
    console.log(preview)
   /*  setTimeout(()=>setPreview(false), 3000) */
  }
    

  return {
      animals,
      preview, 
      setPreview,
      onPreview
    }
}


export default UseGamePanel;
