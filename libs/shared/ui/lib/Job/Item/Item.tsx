import { Typography } from '../../Typography/Typography'
import { currentYear, getTotal, minYear, monthPx, topMarginPx, totalPx } from '../constants'

interface Job {
  name: string
  start: string
  end: string
  position: string
  comment: string
  level?: number
}

type _Job = Omit<Job, 'position' | 'comment'>

export interface ItemProps extends _Job {
  type: string
  description: string
}

export function Item(props: ItemProps) {
  const { name, type, start, end, level = 0, description } = props

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
      height = totalPx - topMarginPx - buttom
    }
    return {
      buttom,
      height,
    }
  }

  return (
    <div
      className={`absolute h-full w-1/2 ${type === 'main' ? '' : 'translate-x-full'}`}
      style={{
        pointerEvents: 'none',
        zIndex: 20 - level,
      }}
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
            <div className="rounded px-2 py-1 absolute -top-12 -translate-x-1/2 left-1/2 bg-gray-800 opacity-0 group-hover:opacity-100 transition pointer-events-none min-w-max text-center text-gray-300">
              <Typography variant="body 3">
                {`${start} ~ ${end === '-' ? '' : end}`.trim()}
              </Typography>
              <Typography variant="body 3">{description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
