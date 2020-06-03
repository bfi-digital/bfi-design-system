import React from "react"
import PropTypes from "prop-types"
import theme from "../_theme"
import styled from "styled-components"
import { PageLink } from "./Link"
import { Headline } from "../Headline"

const Outer = styled.section`
    margin-bottom: ${theme.standardSpace};
    h4 {
        margin: 0;
    }
`

const List = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 15px;
    margin-top: 15px;
`

export const SidebarPageLinks = ({
    links,
    blockTitle
}) =>
    <Outer>
        { blockTitle &&
            <Headline level={7} text={blockTitle} />
        }
        {links &&
            <List>
                {links.map((link, i) =>
                    <PageLink key={i} {...link} />    
                )}
            </List>
        }
    </Outer>


SidebarPageLinks.propTypes = {
    /** 
	 * An array of manually selected pages for this group of page links. Each element of the array contains a `title`, `url`, `description` and `callToAction` text which are generated from the meta data of the page that is being linked to.
	 **/
    links: PropTypes.array,
    /** 
	 * An optional title which can be used to provide context as to what this group of links relates to, or how they are grouped together.
	 **/
    blockTitle: PropTypes.string
}
