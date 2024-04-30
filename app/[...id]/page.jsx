
import { CheckCircle, X } from 'lucide-react'

const CommonPage=()=> {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-0">
      <div className="my-4">

      <>
      <div className="rounded-md border-l-4 border-green-500 bg-green-100 p-4 mb-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-xl font-medium text-green-600">
            Dont worry you landed on correct page.. This is the common page for every link there
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-green-600" />
          </div>
        </div>
      </div>
    </>

        
        <h1 className="text-3xl font-bold">Our Team</h1>
      
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
        <div className="flex flex-col items-center text-start">
          <div
            className="relative flex h-[342px] w-full flex-col justify-end rounded-[10px] bg-red-300"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src="/a.png"
              alt=""
              className="z-0 h-full w-full object-cover rounded-[10px] "
            />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-xl font-semibold text-white">Abhay Kumar Gupta</h1>
              <h6 className="text-base text-white">Frontend Developer</h6>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CommonPage;