import { Fragment } from 'react'
import { Typography } from '../Typography/Typography'
import { currentYear, getTotal, minYear, monthPx, totalPx } from './constants'

export interface JobProps {
  //
}

export function Job({ children }: React.PropsWithChildren<JobProps>) {
  return (
    <Fragment>
      <div className="flex-1 w-full overflow-hidden">
        <div className="bg-gray-700 rounded-lg text-gray-300 shadow-lg ring-white/5 overflow-hidden">
          <div className="relative" style={{ height: `${totalPx}px` }}>
            <div className="flex justify-around text-lg bg-gray-500 font-semibold text-gray-300">
              <Typography variant="subtitle 3">Main</Typography>
              <Typography variant="subtitle 3">Side</Typography>
            </div>
            <div className="border-gray-500 border-l-2 absolute left-2/4 right-2/4 h-full" />
            {[...Array(currentYear - minYear + 1)].map((_, i) => (
              <div
                className="border-gray-500 border-b-2 absolute w-full text-gray-300 select-none"
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
