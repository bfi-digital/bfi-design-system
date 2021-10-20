import React, { Fragment } from "react"
import styled from "styled-components"
import theme from "../_theme"

const Outer = styled.dl`
    font-size: 1.2rem;
    color: ${theme.black};
    margin-top: 0px;
    line-height: 150%;
    margin-bottom: ${theme.standardSpace*2}px;
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(
            calc(
                (
                    (${theme.xl} - 100px - ${theme.horizontalPadding} * 2)
                    * 0.34
                    - 50px
                )
                / 2
                + 1px
            ),
            max-content
        )
    );
`
// Above calculation:
// We want the grid to have 2 columns if it's not in the sidebar,
// so we set the auto-fit size to 1px greater than half the maximum sidebar size,
// which is calc(34% - 50px) according to PageContainer,
// whose parent size is ${theme.xl} - 100px according to PageContainer's wrapper,
// and we take the padding off each side.

const Label = styled.dt`
    font-size: ${theme.fontSize_s};
    grid-column: 1;
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
        {facts.map((fact) =>
            <Fragment key={fact.label}>
                {fact.label && <Label>{fact.label}</Label>}
                <Value labelled={fact.label}>{fact.value || fact}</Value>
            </Fragment >
        )}
    </Outer>