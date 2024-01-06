import { Fragment } from 'react'
import { Typography } from '../Typography/Typography'
import { currentYear, getTotal, minYear, monthPx, totalPx } from './constants'

export interface JobProps {
  backgroundColor?: 'gray-700' | 'transparent'
  headerColor?: 'gray-500' | 'transparent'
  color?: 'gray-300' | 'transparent'
  borderColor?: 'gray-500' | 'transparent'
}

export function Job({
  backgroundColor = 'transparent',
  headerColor = 'transparent',
  color = 'transparent',
  borderColor = 'transparent',
  children,
}: React.PropsWithChildren<JobProps>) {
  return (
    <Fragment>
      <div className="flex-1 w-full overflow-hidden">
        <div
          className={`bg-${backgroundColor} rounded-lg text-${color} border border-${borderColor} ring-white/5 overflow-hidden`}
        >
          <div className="relative" style={{ height: `${totalPx}px` }}>
            <div
              className={`flex justify-around text-lg bg-${headerColor} font-semibold text-${color}`}
            >
              <Typography variant="subtitle 3">Main</Typography>
              <Typography variant="subtitle 3">Side</Typography>
            </div>
            <div
              className={`border-${borderColor} border-l-2 absolute left-2/4 right-2/4 h-full`}
            />
            {[...Array(currentYear - minYear + 1)].map((_, i) => (
              <div
                className={`border-${borderColor} border-b-2 absolute w-full text-${color} select-none`}
                style={{
                  bottom: `${getTotal(minYear + i + 1, 1) * monthPx}px`,
                }}
                key={i}
              >
                <span className="hidden md:block">
                  <Typography variant="body 3">{minYear + i + 1}</Typography>
                </span>
              </div>
            ))}
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
