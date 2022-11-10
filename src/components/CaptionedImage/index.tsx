import React, { FC, ReactElement } from 'react'
import styled, { css } from 'styled-components'
import theme from '../_theme'

const cameraIcon = require('./camera_icon.svg') as string

type ImageModel = {
	src: string
	alt?: string
	children?: ReactElement
}

type CaptionModel = {
  __TYPE?: 'CaptionBelow' | 'CaptionToggle'
  caption?: string
  children?: ReactElement
}

const figcaptionStyles = css`
  color: ${theme.black};
  font-size: ${theme.small_fontSize_m};
`

const Styled = {
  CaptionedImage: styled.figure`
    margin: 0;
    position: relative;
    width: fit-content;

    img {
      display: block;
      width: 100%;
    }
  `,
  CaptionBelow: styled.figcaption`
    ${figcaptionStyles}
    margin-top: 5px;
    text-align: center;
  `,
  CaptionToggle: styled.figcaption`
    --distance-from-edge: 15px;
    ${figcaptionStyles}
    position: absolute;
    bottom: var(--distance-from-edge);
    right: var(--distance-from-edge);
    padding: 10px 15px;
    clip-path: inset(-15px -40px -15px calc(100% + 1px));
    cursor: default;
    box-shadow: rgba(0,0,0,0.4) 0 0 0 0;
    background-color: ${theme.lightest};
    margin-right: 35px;
    max-width: calc((100% - 35px) - (2 * var(--distance-from-edge)));

    ::after {
      content: '';
      width: 24px;
      height: 24px;
      background: transparent url('${cameraIcon}') 0 0 / 100% no-repeat;
      position: absolute;
      right: -35px;
      bottom: 4px;
      cursor: pointer;
      border-radius: 15px;
      border: 3px solid transparent;
      filter: drop-shadow(0 0 3px rgba(0,0,0,0.4));
    }

    :focus {
      clip-path: inset(-15px -40px -15px -15px);
      box-shadow: rgba(0, 0, 0, 0.4) 0 0 15px 0;

      ::after {
        border-color: ${theme.focus};
      }
    }
  `
}

const Caption: FC<CaptionModel> = ({ __TYPE, caption, children }) => {
  if (!__TYPE) return null
  const CaptionType = Styled[__TYPE] as keyof JSX.IntrinsicElements
  const attr = {}
  if (caption) attr['dangerouslySetInnerHTML'] = { __html: caption }
  return <CaptionType tabIndex={0} {...attr}>{children}</CaptionType>
}

const CaptionBelow: FC<CaptionModel> = (props) => <Caption __TYPE='CaptionBelow' {...props} />

const CaptionToggle: FC<CaptionModel> = (props) => <Caption __TYPE='CaptionToggle' {...props} />

const CaptionedImage: FC<ImageModel> = ({ src, alt = '', children, ...props }) => (
  <Styled.CaptionedImage {...props}>
    <img src={src} alt={alt} loading="lazy" />
    {children}
  </Styled.CaptionedImage>
)

export {
  CaptionedImage,
  CaptionBelow,
  CaptionToggle
}
