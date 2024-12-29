import { Job } from '.'
import { jobs as _jobs } from '../../../data/lib/legacy/constants'
import React from 'react'

export default {
  component: Job,
  title: 'Job',
}

export const Default = (args) => {
  const jobs = Object.entries(_jobs)
    .map(([type, value]) => {
      return value.map((v) => ({
        type,
        ...v,
      }))
    })
    .flat()

  return (
    <Job>
      {jobs.map((j, index) => (
        <Job.Item key={index} {...j} description={`${j.position}: ${j.comment}`} />
      ))}
    </Job>
  )
}
