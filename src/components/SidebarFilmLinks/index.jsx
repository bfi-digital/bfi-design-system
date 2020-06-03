import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../_theme"
import { SidebarFilmCard } from "./SidebarFilmCard"
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

export const SidebarFilmLinks = ({
    films,
    blockTitle
}) =>
    <Outer>
        {
            blockTitle &&
                <Headline level={7} text={blockTitle} />
        }
        {films &&
            <List>
                {films.map((film, i) =>
                    <SidebarFilmCard key={i} {...film} />    
                )}
            </List>
        }
    </Outer>


SidebarFilmLinks.propTypes = {
    /** 
	 * An array of manually selected pages for this group of page links. Each element of the array contains a `title`, `url`, `description` and `callToAction` text which are generated from the meta data of the page that is being linked to.
	 **/
    films: PropTypes.array,
    /** 
	 * An optional title which can be used to provide context as to what this group of links relates to, or how they are grouped together.
	 **/
    blockTitle: PropTypes.string
}
