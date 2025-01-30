// `pages` directory
import React from 'react'
import MainPage from './mainpage'

import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps = (async (context: any) => {
  const cv = (await import('../../content/cv.json')).default
  return { props: { cv } }
})

export default function Page({
  cv,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("HER")
  return MainPage({ cv })
}


