import './ScrollTop.css'
import {AiOutlineArrowUp} from 'react-icons/ai'
import { useEffect, useState } from 'react'

const ScrollTop = () => {
    const [showBtn, setShowBtn] = useState(false);
useEffect(()=>{
    const handleScrollBtnVisiblity = () =>{
        window.pageYOffset > 300 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleScrollBtnVisiblity)
    return()=>{
        window.removeEventListener("scroll", handleScrollBtnVisiblity)
    }
}, [])
const handleScrollToTop = () =>{
    window.scrollTo({top:0, behavior: 'smooth'})
}
  return (
    <>
    {showBtn &&
        <div className="scrollBtnContainer" onClick={handleScrollToTop}>
        <AiOutlineArrowUp className='scrollTop' />
        </div>
    }
    </>
  )
}

export default ScrollTop