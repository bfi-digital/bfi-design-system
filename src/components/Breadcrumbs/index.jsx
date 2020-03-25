import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import PropTypes from "prop-types"

const Outer = styled.ol`
    list-style: none;
    color: ${theme.black};
    font-size: 0.9rem;
    padding-left: 0px;
    line-height: 1.5;
    margin-top: 0;
    @media screen and (min-width: ${theme.l}){
        font-size: 1rem;
        max-width: calc( 0.7 * ${theme.l});
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc( 0.7 * ${theme.xl});
    }
`

const Crumb = styled.li`
    display: inline;
    &:after{
        margin: 0px 5px;
        content: "/";
        font-weight: bold;
    }
    &:last-of-type:after{
        display: none;
    }
`

const BreadcrumbLink = styled(Link)`
    color: ${theme.primary};
    font-weight: bold;
    &:hover{
        text-decoration: none;
        color: ${theme.dark};
    }
    &:focus{
        background: ${theme.lightest};
        outline: none;
    }
`

export const Breadcrumbs = ({
    breadcrumbs
}) =>
    <Outer>
        {breadcrumbs.map((crumb, i) =>
            <Crumb key={i}>
                {crumb.url ? <BreadcrumbLink to={crumb.url}>{crumb.title}</BreadcrumbLink> : crumb.title}
            </Crumb>
        )}
    </Outer>


Breadcrumbs.propTypes = {
    /** 
	 * An array of the breadcrumbs for this page/post. Each element of the array contains a `title` and a `url` field.
	 **/
    breadcrumbs: PropTypes.array
}