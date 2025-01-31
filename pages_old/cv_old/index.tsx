// `pages` directory
import React from 'react'
import MainPage from './page'

import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps = (async (context: any) => {
  const cv = (await import('../../content/cv.json')).default
  return { props: { cv } }
})

export default function Page({
  cv,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return MainPage()
}


