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
    grid-gap: 0 ${theme.standardSpace}px;
    grid-template-columns: auto repeat(calc(min(var(--quick-facts-columns), 2) - 1), 1fr);
    --quick-facts-columns: ${props=>props.columns};

    &[columns=2] {
        --quick-facts-columns: 2;
    }
`

const Label = styled.dt`
    font-size: ${theme.fontSize_s};
    grid-column: 1;
`

const Value = styled.dd`
    margin-left: 0px;
    margin-bottom: 20px;
    font-weight: ${props => props.labelled ? "bold" : "normal" };

    &:first-child,
    & + & {
        grid-column: 1/-1;
    }
`

export const QuickFacts = ({
    facts,
    ...props
}) =>
    <Outer {...props}>
        {facts.map((fact) =>
            <Fragment key={fact.label || ""}>
                {fact.label && <Label>{fact.label}</Label>}
                <Value labelled={fact.label}>{fact.value || fact}</Value>
            </Fragment >
        )}
    </Outer>

import PropTypes from "prop-types"

QuickFacts.propTypes = {
    facts: PropTypes.arrayOf({
        label: PropTypes.string,
        value: PropTypes.string.isRequired
    }).isRequired,
    columns: PropTypes.oneOf([1, 2, "inherit"])
}

QuickFacts.defaultProps = {
    columns: "inherit"
}