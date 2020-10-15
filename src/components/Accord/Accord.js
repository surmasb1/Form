import React, {useState, useRef} from 'react'
import Arrow  from '../Arrow/Arrow'
import './Accord.css'

function Accords (props) {

    const [Active, setActive] = useState('')
    const [Height, setHeight] = useState('0px')
    const content = useRef(null);

    function toggleactive () {
        setActive(Active === '' ? 'active' : '');
        setHeight(Height === 'active' ? '0px': `${content.current.scrollHeight}px`);
        console.log(content.current.scrollHeight)
    }
    return (
        <div className="accordion_main">
            <span className={`accordion_btn ${Active} `} onClick={toggleactive}>
                <p className="accordion_title">{props.title}</p>
                <Arrow/>
            </span>
            <div className="accordion_content" ref={content} style={{maxHeight: `${setHeight}`}} >
                {props.text}
            </div>

        </div>
    )
}

export default Accords
