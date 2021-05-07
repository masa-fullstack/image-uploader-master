import React from 'react'
import Image from 'next/image'
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
        <div className="text-3xl font-semibold text-gray-500 my-8">
          Uploaded Successfully!
        </div>
        <div className="">
          <Image
            src={props.imageURL}
            className="rounded-3xl"
            quality={30}
            width={400}
            height={400}
          />
        </div>
      </div>
    </Card>
  )
}

export default Uploaded
