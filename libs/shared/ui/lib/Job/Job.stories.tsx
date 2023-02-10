import { Story, Meta } from '@storybook/react'
import { Job, JobProps } from '.'
import data from '../../../data/lib/json/jobs.json'
import React from 'react'

export default {
  component: Job,
  title: 'Job',
} as Meta

export const Default: Story<JobProps> = (args) => {
  const jobs = Object.entries(data)
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
