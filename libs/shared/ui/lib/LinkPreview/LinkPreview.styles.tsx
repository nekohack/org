import { css } from '@emotion/react'

export const linkPreview = css`
  display: table;
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  & > a {
    display: table-cell;
    flex: 1;
    flex-direction: column;
    width: 75%;
    padding: 16px;
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-flex: 1;
  }
`

export const linkPreviewTitle = css`
  margin-bottom: 8px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const linkPreviewDescription = css`
  max-height: 3em;
  margin-bottom: 4px;
  overflow: hidden;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const linkPreviewUrl = css`
  display: block;
  margin-bottom: 0;
  min-width: 320px;
  max-width: 320px;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;
  @media all and (max-width: 720px) {
    min-width: 80px;
    max-width: 80px;
  }
`

export const linkPreviewImage = css`
  flex: 0;
  width: 25%;
  width: 225px;
  min-width: 220px;
  height: 150px;
  padding: 0;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  border-left: 1px solid #f2f2f2;
  border-radius: 0 3px 3px 0;
  -webkit-box-flex: 0;
`
