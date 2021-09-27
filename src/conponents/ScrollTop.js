import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollTop = () => {
    const{ pathmane } = useLocation()
    useEffect(() => {
      window.scroll({
          top: 0,
          left: 0
      })
    }, [pathmane])

    return null
}

export default ScrollTop
