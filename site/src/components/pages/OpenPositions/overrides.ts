import { BlockOverrides } from 'baseui/block'
import { StyleObject } from 'styletron-react'

const headingCommonStyles: StyleObject = {
  fontSize: '64px',
  lineHeight: '1',
  fontWeight: '400',
  letterSpacing: '-1.28px',
}

export const getCommonHeadingOverrides = (): BlockOverrides => ({
  Block: {
    style: headingCommonStyles,
  },
})

export const getPageTitleOverrides = (): BlockOverrides => ({
  Block: {
    style: {
      marginBottom: '32px',
      ...headingCommonStyles,
    },
  },
})
