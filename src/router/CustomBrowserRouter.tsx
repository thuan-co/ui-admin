import { BrowserHistory, createBrowserHistory } from "history"
import { useLayoutEffect, useRef, useState } from "react"
import { Router } from "react-router-dom"

//TODO: using REdux to manage navigation state outside of React Components
// link ref: https://codesandbox.io/s/ukio0?file=/src/CustomBrowserRouter.jsx
export const customHistory = createBrowserHistory()

// type Props = {
//     basename: string,
//     children: React.ReactNode
// }

export default function CustomBrowserRouter({ basename, children }:any) {

    const historyRef = useRef<BrowserHistory>()
    if (historyRef.current == null) {
        historyRef.current = customHistory
    }
    const history = historyRef.current
    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    })

    useLayoutEffect(() => history.listen(setState), [history])

    return (
        <Router 
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    )
}