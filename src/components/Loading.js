import React from 'react'
import { FireworkSpinner } from 'react-spinners-kit'

function Loading() {
    return (
        <div className="text-warning" style={{height: 100, width: 100}} >
            <FireworkSpinner />
        </div>
    )
}

export default Loading
