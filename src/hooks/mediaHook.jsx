import { useState, useEffect } from "react"

export default function useMobile(minWidth = "768px", boolean = true) {
    const [mobile, setMobile] = useState(boolean)

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${minWidth})`)
        setMobile(!media.matches)
        const handler = (e) => setMobile(!e.matches)
        media.addListener(handler)
        return () => {
            media.removeListener(handler)
        }
    }, [minWidth])

    return mobile
}