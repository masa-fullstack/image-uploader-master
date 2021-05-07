import React from 'react'

type Props = {
  percentCompleted: number
}

const Progress: React.FC<Props> = (props) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-10 items-center justify-between">
        <div>
          <span className="text-2xl font-bold inline-block">Uploading...</span>
        </div>
        <div className="text-right">
          <span className="md:w-96 w-40 text-lg font-semibold inline-block">
            {props.percentCompleted} %
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div
          style={{ width: `${props.percentCompleted}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        ></div>
      </div>
    </div>
  )
}

export default Progress
