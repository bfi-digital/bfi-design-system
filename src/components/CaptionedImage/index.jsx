import React from "react"
import styled from "styled-components"
import cameraIcon from "./camera_icon.svg"

/*
A component for rendering an image with a caption.
The image will be wrapped in a <figure> with the caption in the <figcaption>.
The caption can be toggled using an icon.
This is a pure CSS implementation.
*/

const Figure = styled.figure/* less */ `
  & {
    // Remove default margin
    margin: 0;

    // Figure is a grid with 2 rows.
    // The image spans both rows and the caption sits in the second.
    display: inline-grid;
    grid-template-rows: 1fr 30px;
    grid-template-areas: '.' 'caption';

    // Take the maximum size of the contained image
    width: max-content;
    height: max-content;

    // Image spreads over 2 rows
    // and takes up as much space as possible within the container
    & > * {
      grid-area: 1 / 1 / 3 / 2;
      width: 100%;
      height: 100%;
    }

    // Caption and toggle button sits only in second, aligned right
    & > figcaption {
      grid-area: caption;
      place-self: end;
    }
  }
`

// This will be an element with tabindex=0
// When it is focused, display the caption contents.
const FigCaptionWrapper = styled.figcaption/* less */ `
  & {
    // Give a margin for legibility
    margin: 15px 10px;

    // Effectively ignore caption with when calculating container's max-width,
    // but still fill up to the space of the parent container;
    width: min-content;
    min-width: 100%;

    // Caption element is a flexbox whose children are:
    // 1. The caption content (wrapped in a div)
    // 2. The after pseudo-element, acting as the toggle button
    display: flex;
    // Align them to the right
    justify-content: flex-end;

    // Prevent too much text from stretching the whole flexbox up and obscuring the image.
    // Instead, text will overflow downwards outside the image.
    max-height: 120%;

    // Caption icon
    &::after {
      // Enable the element
      content: '';

      // Stop it getting squashed by long caption text
      flex-shrink: 0;
      // Keep it aligned to the bottom
      align-self: flex-end;

      // Make it a 30px circle
      border-radius: 100%;
      width: 30px;
      height: 30px;
      opacity: 0.8;
      background: rgba(0, 0, 0, 0)
        url('${cameraIcon}')
        repeat scroll 0% 0% / 100%;
      filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 1px 0px);
      margin-left: 4px;

      // Maybe use the hand cursor, but it's not a link so maybe not
      // cursor: pointer;
    }

    // Provide an affordance for clickability
    &:hover::after,
    &:focus::after {
      opacity: 1;
    }

    // Provide an affordance for when active
    &:focus::after {
      outline: 3px solid rgb(255, 34, 201);
    }

    // When focused, disable pointer events for the wrapper and the pseudoelement
    // so a second click removes the focus, creating a togglable element
    &:focus {
      pointer-events: none;
    }

    // Caption contents
    & > * {
      margin-top: 2px;

      // Stretch wrapper to containe its contents
      // and put it in front of any later content
      height: min-content;
      z-index: 1;

      // Re-enable pointer events on the child nodes so users can highlight text, etc
      pointer-events: auto;
    }

    // finally, when the wrapper is not focused, hide the caption contents.
    &:not(:focus) > * {
      display: none;
    }
  }
`

// Styles for the actual caption contents
const FigCaptionContents = styled.div/* less */ `
  & {
    background: rgb(243, 238, 255);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 18px 0px;
    font-size: 0.8rem;
    padding: 10px 15px;
  }
`

export function CaptionedImage({ src, alt, children, ...args }) {
    return (
        <Figure {...args}>
            <img src={src} alt={alt} />
            <FigCaptionWrapper tabIndex="0">
                <FigCaptionContents>{children}</FigCaptionContents>
            </FigCaptionWrapper>
        </Figure>
    )
}
