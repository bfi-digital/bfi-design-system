import React, { Fragment } from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.dl`
    font-size: 1.2rem;
    color: ${theme.black};
    margin-top: 0px;
    line-height: 150%;
    margin-bottom: ${theme.standardSpace};
`

const Label = styled.dt`
    font-size: ${theme.fontSize_s};

`

const Value = styled.dd`
    margin-left: 0px;
    margin-bottom: 20px;
    font-weight: ${props => props.labelled ? "bold" : "normal" };
`

export const QuickFacts = ({
    facts
}) =>
    <Outer>
        {facts.map((fact, i) =>
            <Fragment key={i}>
                {fact.label && <Label>{fact.label}</Label>}
                <Value labelled={fact.label}>{fact.value || fact}</Value>
            </Fragment >
        )}
    </Outer>