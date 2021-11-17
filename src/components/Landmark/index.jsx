import styled from "styled-components"
import theme from "../_theme"
import PropTypes from "prop-types"

export const Landmark = styled.main`
    padding-inline: max(0px, calc(50vw - (${theme.xl} + 125px) / 2));
    
    & > * {
        padding-inline: ${theme.horizontalPadding};

        @media screen and (min-width: ${theme.l}){
            padding-inline: calc(50vw - ${theme.l} / 2 + ${theme.horizontalPadding});
        }

        @media screen and (min-width: ${theme.xl}){
            padding-inline: calc(min(62.5px, calc(50vw - ${theme.xl} / 2)) + ${theme.horizontalPadding} + 50px);
        }
    }

`

Landmark.propTypes = {
    /** 
    * The element name to use for this landmark. Defaults to "main".
    **/
    as: PropTypes.string
}
