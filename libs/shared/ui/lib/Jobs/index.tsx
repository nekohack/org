import { Fragment } from 'react'
import { Typography } from '../Typography/Typography'

interface Job {
  name: string
  start: string
  end: string | '-'
  position?: string
  level?: number
  comment: string
}

export interface JobsProps {
  data: { main: Job[]; side: Job[] }
}

export function Jobs({ data: _data }: JobsProps) {
  const data = Object.entries(_data)
    .map(([type, value]) => {
      return value.map((v) => ({
        type,
        ...v,
      }))
    })
    .flat()

  const length = 800
  const topMargin = 80
  const minYear = 2007
  const currentYear = new Date().getFullYear()
  const monthPx = (length - topMargin) / ((currentYear - minYear) * 12)

  function getLength(start: string, end: string | '-') {
    const [year, month] = start.split('-').map((v) => Number(v))
    if (year < minYear || year > currentYear || month < 0 || month > 12) {
      throw new Error(`Invalid number: ${year}, ${month}`)
    }
    const totalMonths = getTotal(year, month)
    const buttom = totalMonths * monthPx
    let height
    if (end !== '-') {
      const [year, month] = end.split('-').map((v) => Number(v))
      const t = getTotal(year, month)
      height = (t - totalMonths) * monthPx
    } else {
      height = length - topMargin - buttom
    }
    return {
      buttom,
      height,
    }
  }

  function getTotal(year: number, month: number) {
    return (year - (minYear + 1)) * 12 + month
  }

  return (
    <Fragment>
      <div className="flex-1 w-full overflow-hidden">
        <div className="bg-slate-800 rounded-lg text-gray-300 shadow-lg ring-white/5 overflow-hidden">
          <div className="relative" style={{ height: `${length}px` }}>
            <div className="flex justify-around text-lg bg-slate-700 z-30 font-semibold text-gray-300">
              <Typography variant="subtitle 3">Main</Typography>
              <Typography variant="subtitle 3">Side</Typography>
            </div>
            <div className="border-slate-700 border-l-2 absolute left-2/4 right-2/4 h-full z-10"></div>
            {[...Array(currentYear - minYear + 1)].map((_, i) => (
              <div
                className="border-slate-700 border-b-2 absolute w-full text-gray-300 select-none"
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
            {data.map(({ name, type, start, end, level = 0, comment, position = '' }, i) => (
              <div
                className={`absolute h-full w-1/2 ${type === 'main' ? '' : 'translate-x-full'}`}
                style={{
                  pointerEvents: 'none',
                  zIndex: 20 - level,
                }}
                key={i}
              >
                <div
                  className={`absolute h-28 border-2 bg-opacity-60 w-4 ${
                    type === 'main' ? 'right-2  border-r-0' : 'border-l-0'
                  } ${
                    end === '-'
                      ? 'border-t-0 border-red-700 text-gray-50 font-semibold'
                      : 'border-cyan-700 text-gray-300'
                  }`}
                  style={{
                    bottom: `${getLength(start, end).buttom}px`,
                    height: `${getLength(start, end).height}px`,
                    left: `${type === 'main' ? 'inherit' : `${level * 16}px`}`,
                  }}
                >
                  &nbsp;
                  <div
                    className={`group absolute -top-2 min-w-max cursor-pointer ${
                      type === 'main' ? '-translate-x-full pr-4' : `left-4 pl-2`
                    }`}
                    style={{
                      pointerEvents: 'all',
                    }}
                  >
                    <div className="relative">
                      <span>{name}</span>
                      <div className="rounded px-2 py-1 absolute -top-12 -translate-x-1/2 left-1/2 bg-gray-800 opacity-0 group-hover:opacity-100 transition pointer-events-none min-w-max text-center text-gray-300 z-20">
                        <Typography variant="body 3">
                          {`${start} ~ ${end === '-' ? '' : end}`.trim()}
                        </Typography>
                        <Typography variant="body 3">
                          {position}: {comment}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
