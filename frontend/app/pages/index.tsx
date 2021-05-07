import Layout from '../components/Layout'
import ImageUploader from '../components/ImageUploader'

export const Home = (): JSX.Element => {
  return (
    <Layout title="Image Uploader">
      <ImageUploader />
    </Layout>
  )
}

export default Home
