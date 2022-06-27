import Layout from "../components/Layout"
import Image from "next/image"

const Contact = () => {
    return (
      <Layout title="contact">
        <div className="bg-white shadow-xl text-center w-80 rounded">
          <div className="mt-4">
          <p className="font-bold">contact info</p> 
          </div>
          <div className="flex justify-center mt-4">
            <Image
            className="rounded-full"
            src="/avater.png"
            width={60}
            height={60}
            alt="Avater"
             />
          </div>
          <div className="mt-4">
            <p className="font-bold">Address</p>
            <p className="text-xs mt-2 text-gray-600">cityA</p>
            <p className="font-bold mt-3">email</p>
            <p className="text-xs mt-2 text-gray-600">xxxxxx@example.com</p>
            <p className="font-bold mt-3">Phone</p>
            <p className="text-xs mt-2 text-gray-600">0909137482</p>
          </div>
        </div>
        </Layout>
    )
  }
  
  export default Contact