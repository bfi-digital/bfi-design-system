import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import theme from "../_theme"
// import { Checkbox } from "../Checkbox"
import { Legend } from "../Legend"
import { Fieldset } from "../Fieldset"
import { FormCard } from "../FormCard"

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -13px;
    padding: 0;
`;

const Item = styled.li`
    flex-basis: 100%;
    padding-right: 13px;
    padding-left: 13px;
    margin-bottom: 25px;

    @media screen and (min-width: ${theme.m}){
        flex-basis: 50%;
    }
`;

export const FormGroup = ({
    title,
    items
}) => 
    <Fieldset>
        <Legend title={title}></Legend>
        <List>
            {items.map((item) =>
                <Item>
                    <FormCard id={ item.preferenceSettingId } frequency={ item.frequency } heading={ item.preferenceSettingName } description={ item.description }></FormCard>
                </Item>
            )}
        </List>
    </Fieldset>

FormGroup.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

FormGroup.defaultProps = {
    title: "",
    items: []
}