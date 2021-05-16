import Image from 'next/image'
import Card from './Card'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import Progress from './Progress'
import Uploaded from './Uploaded'
import Button from './Button'

const ImageUploader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [percentCompleted, setPercentCompleted] = useState(0)
  const [imageURL, setImageURL] = useState()

  const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        )
        setPercentCompleted(percentCompleted)
      },
    }

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/image/upload`, formData, config)
      .then((response) => {
        setImageURL(response.data.secure_url)
      })
      .catch((error) => {
        setError(error)
      })
  }

  const onDrop = async (acceptedFiles: Array<File>) => {
    setIsLoading(true)
    await uploadFile(acceptedFiles[0])
  }

  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  // image file is not selected
  if (fileRejections[0])
    return (
      <Card>
        <div className="flex flex-col items-center w-full">
          <div className="text-3xl font-light text-center">
            Please choose a image file
          </div>
          <div className="text-3xl font-light text-center mt-5">
            Please reload page
          </div>
        </div>
      </Card>
    )

  // error
  if (error)
    return (
      <div className="text-red-500 text-3xl font-light text-center pt-20 h-screen">
        failed to load
      </div>
    )

  // uploaded
  if (imageURL) {
    return <Uploaded imageURL={imageURL} />
  }

  // loading
  if (isLoading)
    return (
      <Card>
        <div className="flex flex-col items-center w-full">
          <Progress percentCompleted={percentCompleted} />
        </div>
      </Card>
    )

  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-semibold text-gray-500 mb-5">
          Upload your image
        </div>
        <div className="font-semibold text-gray-500 mb-5">
          File should be Jpeg, Png, ...
        </div>
        <div className="cursor-pointer">
          <section>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className="p-10 rounded-3xl border-4 border-dashed border-blue-100 flex flex-col items-center">
                <div>
                  <Image src="/image.svg" width={200} height={200} />
                </div>
                <div className="text-xl text-gray-500 my-5">Or</div>
                <Button title="Choose a file" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Card>
  )
}

export default ImageUploader
