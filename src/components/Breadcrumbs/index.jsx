import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import { LinkSwitch as Link } from "../LinkSwitch"
import PropTypes from "prop-types"

const Outer = styled.ol`
    list-style: none;
    color: ${theme.black};
    font-size: ${theme.small_fontSize_m};
    padding-left: 0px;
    line-height: ${theme.lineHeight_s};
    margin-top: 0;
    display: none;

    @media screen and (min-width: ${theme.m}){
        display: block;
    }
    @media screen and (min-width: ${theme.l}){
        font-size: ${theme.fontSize_s};
        max-width: calc( 0.7 * ${theme.l});
    }
    @media screen and (min-width: ${theme.xl}){
        max-width: calc( 0.7 * ${theme.xl});
    }
`
const MobileOuter = styled.div`
    display: block;
    font-size: ${theme.small_fontSize_m};

    @media screen and (min-width: ${theme.m}){
        display: none;
    }
`

const Crumb = styled.li`
    display: inline;
    &:after{
        margin: 0px 5px;
        content: "/";
        font-weight: normal;
    }
    &:last-of-type:after{
        display: none;
    }
`

const BreadcrumbLink = styled(Link)`
    color: ${theme.black};
    text-decoration: none;
    font-weight: ${theme.fontWeight_semiBold};
    position: relative;
    background-image: linear-gradient(120deg, ${theme.primary} 0%, ${theme.primary} 100%);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: 0 100%;
    transition: all 0.15s ease-in-out;

    &:hover{
        color: ${theme.white};
        background-size: 100% 100%;
    }
    &:focus{
        background-size: 100% 100%;
        color: ${theme.white};
        outline: none;
        background-image: linear-gradient(120deg, ${theme.focus} 0%, ${theme.focus} 100%);
    }
    &:active{
        outline: none;
        text-decoration: underline;
    }
`

export const Breadcrumbs = ({
    breadcrumbs
}) =>
    breadcrumbs && breadcrumbs.length > 0 &&
        <>
            <Outer>
                {breadcrumbs.map((crumb) =>
                    <Crumb key={crumb.url ? crumb.url : crumb.title}>
                        {crumb.url ? <BreadcrumbLink to={crumb.url}>{crumb.title}</BreadcrumbLink> : crumb.title}
                    </Crumb>
                )}
            </Outer>
            {breadcrumbs.length > 1 &&
                <MobileOuter>
                    <Crumb key={breadcrumbs[breadcrumbs.length - 2].url ? breadcrumbs[breadcrumbs.length - 2].url : breadcrumbs[breadcrumbs.length - 2].title}>
                        <BreadcrumbLink to={breadcrumbs[breadcrumbs.length - 2].url}>&#60;&nbsp;Go back to {breadcrumbs[breadcrumbs.length - 2].title}</BreadcrumbLink>
                    </Crumb>
                </MobileOuter>
            }
        </>


Breadcrumbs.propTypes = {
    /** 
	 * An array of the breadcrumbs for this page/post. Each element of the array contains a `title` and a `url` field.
	 **/
    breadcrumbs: PropTypes.array
}