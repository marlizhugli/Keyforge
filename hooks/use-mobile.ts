import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Initial check without direct setState during render setup can be done
    // by evaluating it inside an animation frame or simply assigning cautiously.
    // However, typical Next.js apps just do:
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    checkIsMobile() // Set initially after hydration
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Some older browsers might need addListener instead of addEventListener
    if (mql.addEventListener) {
      mql.addEventListener("change", checkIsMobile)
    } else {
      mql.addListener(checkIsMobile)
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", checkIsMobile)
      } else {
        mql.removeListener(checkIsMobile)
      }
    }
  }, [])

  return !!isMobile
}
