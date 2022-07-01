import { useState, useEffect } from "react"

export default function useMobile(minWidth = "768px", boolean = true) {
    const [mobile, setMobile] = useState(boolean)

    useEffect(() => {
        if (typeof window.matchMedia === "function") {
            const media = window.matchMedia(`(min-width: ${minWidth})`)
            setMobile(!media.matches)
            const handler = (e) => setMobile(!e.matches)
            media.addEventListener("change", handler)
            return () => {
                media.removeEventListener("change", handler)
            }
        }
    }, [minWidth])

    return mobile
}
