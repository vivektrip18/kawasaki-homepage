import { useState } from "react"

export const BikeTile = ({ src, name,link }) => {

    const [isHovered, setIsHovered] = useState(false);
    

    const imageStyle = {
        width: '250px',
        height: '200px',
        transition: 'transform 0.3s  ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
    }
    const nameStyle = {
        textDecoration: isHovered ? 'underline' : 'none',
        textDecorationColor: isHovered ? '#4CAF50': 'none',
        transition: 'text-decoration 0.3s ease'
    }

    return (
        <a href={link} style={{ display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            <img src={src}
                className="p-5  flex ml-auto mr-auto"
                alt={name}
                style={imageStyle}
            />
            <div className="font-mono font-bold text-2xl text-center  md:mr-10 "
            style={nameStyle}>
                {name}
            </div>
        </a>
    )
}

