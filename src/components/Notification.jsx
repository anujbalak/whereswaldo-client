import { ToastContainer } from 'react-toastify'
import { Slide } from 'react-toastify'

export default function Notification() {
    return (
        <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
        />
    )
}