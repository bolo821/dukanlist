import React from 'react'
import { useSelector } from 'react-redux'

import './Feeds.css'

export default function Feeds() {
    const { leadInfo: { lead } } = useSelector(state => state)
    const windowWidth = window.innerWidth
    console.log(windowWidth)
    return (
        <div>
            <p>{lead && lead.phone}</p>
        </div>
    )
}
