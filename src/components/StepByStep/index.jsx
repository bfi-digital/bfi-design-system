import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"
import parse from "html-react-parser"

const Outer = styled.section``

const Headline = styled.h3`
    font-weight: 700;
    margin-bottom: 25px;
`

const Steps = styled.ol`
    counter-reset: steps;
    list-style: none;
    padding-left: 0px;
    margin-left: 23px;
`

const Step = styled.li`
    counter-increment: steps;
    position: relative;
    padding-left: 15px;
    margin-bottom: 30px;
    &:before{
        content: "";
        position: absolute;
        top: 15px;
        left: -14px;
        display: block;
        bottom: -40px;
        border-left: 2px solid ${theme.grey};
    }
    &:after{
        content: counter(steps);
        position: absolute;
        top: 0px;
        left: -25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid ${theme.grey};
        background: ${theme.white};
        width: 20px;
        height: 20px;
        border-radius: 100%;
        font-size: 0.9rem;
    }
    &:last-of-type{
        &:before{
            display: none;
        }
    }
`

const StepTitle = styled.strong`
    display: block;
    font-weight: 700;
    margin-bottom: 7px;
`

const ShowButton = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    background: none;
    border: none;
    background: none;
    font-size: 1rem;
    padding: 0;
    &:hover{
        p{
            text-decoration: none;
        }
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &:focus{
        outline: none;
        p{
            background: ${theme.lightest}
        }
    }
`

const ShowButtonText = styled.p`
    color: ${theme.dark};
    display: inline;
    text-decoration: underline;
    font-weight: 400;
`

const Description = styled.p`
    color: ${theme.black};
    a{
        color: ${theme.dark};
        &:hover{
            text-decoration: none;
        }
        &::-moz-focus-inner {
            border: 0;
        }
        &:focus{
            outline: none;
            background: ${theme.lightest}
        }
    }
`


export const StepByStep = ({
    title,
    steps
}) => {

    const [openSteps, setOpenSteps] = useState(false)

    return(
        <Outer>
            <Headline>{title}</Headline>
            <Steps>
                {console.log(steps)}
                {steps.map((step, i) =>
                    <Step key={i}>
                        <ShowButton
                            aria-expanded={openSteps === i ? "true" : "false"}
                            onClick={() => {
                                openSteps === i ? setOpenSteps(false) : setOpenSteps(i)
                            }}
                        >
                            <StepTitle>{step.title}</StepTitle>
                            <ShowButtonText>{openSteps === i ? "Hide" : "Show"}</ShowButtonText>
                        </ShowButton>
                        {openSteps === i &&
                            <Description>{parse(step.description)}</Description>
                        }
                    </Step>
                )}
            </Steps>
        </Outer>
    )
}

StepByStep.propTypes = {
    /** 
	 * Title of the whole step by step slice.
	 **/
    title: PropTypes.string,
    /** 
	 * An array containing the steps, each has a `title` and a `description`, with the description being able to parse HTML so it can contain links and paragraphs.
	 **/
    steps: PropTypes.array
}