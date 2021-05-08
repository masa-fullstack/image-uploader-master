import React from 'react'
import Image from 'next/image'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Card from './Card'

type Props = {
  imageURL: string
}

const Uploaded: React.FC<Props> = (props) => {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="material-icons text-5xl text-green-600">
          check_circle
        </div>
        <div className="md:text-3xl text-lg font-semibold text-gray-500 md:my-8 my-2">
          Uploaded Successfully!
        </div>
        <div className="my-5">
          <Image
            src={props.imageURL}
            className="rounded-3xl"
            quality={30}
            width={400}
            height={400}
          />
        </div>
        <div>
          <input
            type="text"
            value={props.imageURL}
            readOnly={true}
            className="bg-gray-100 border-2 rounded-xl outline-none p-3 md:w-80 w-32"
          />

          <CopyToClipboard text={props.imageURL}>
            <button
              type="button"
              className="bg-blue-500 text-white py-3 px-5 rounded-xl"
            >
              Copy Link
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </Card>
  )
}

export default Uploaded
