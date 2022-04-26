import { useState } from 'react'

const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) => activeIndex === index ? className : "";

    return (
        <div className="tabs">
            <button
                className={`tab ${checkActive(1, 'active')}`} 
                onClick={() => handleClick(1)}>Home</button>
            <button
                className={`tab ${checkActive(2, 'active')}`} 
                onClick={() => handleClick(2)}>Archive</button>
            <button
                className={`tab ${checkActive(3, 'active')}`} 
                onClick={() => handleClick(3)}>Posts</button>
            <div className="tabs-content">
                <div className={`panel ${checkActive(1, "active")}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat ligula, feugiat at felis vitae, porttitor lacinia quam.</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;