import React from "react"

function ArrowRight({colourFill}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                    fill={colourFill}
                    d="M3.456 10.788l-6.23-5.867a.695.695 0 010-1.025l.726-.684A.804.804 0 01-.96 3.211L4 7.861l4.961-4.65a.804.804 0 011.087.001l.727.684c.3.283.3.742 0 1.025l-6.23 5.867a.804.804 0 01-1.09 0z"
                    transform="matrix(0 1 1 0 -3 3)"
                ></path>
            </g>
        </svg>
    )
}

export default ArrowRight
