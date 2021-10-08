import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"
import { Checkbox } from "../Checkbox"

const Outer = styled.div`
    width: 100%;
    margin-bottom: 25px;
`
export const FormField = ({ children}) => 
    <Outer>
        {children}
    </Outer>