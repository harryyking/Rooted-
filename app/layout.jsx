import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Poppins} from "next/font/google"
import ToastProvider from '@components/ToastProvider';
import QueryProvider from '@components/QueryProvider';

// const poppins = Poppins({subsets : ['latin'], weight: [ '100','200','300','400','500','600','700']});

export const metadata = {
    title: "Rooted",
    description: "Quiet Time Streak. Get Consistent with reading and studying the word of God"
}

const RootLayout = ({children}) => {


  return (
    <html lang="en">
        <Provider>
        <QueryProvider>
        <body >
        
            <main className='dark'>
             
            <ToastProvider>
                <Nav />
                {children}
                </ToastProvider>
                
            </main>
           
        </body>
        </QueryProvider>
        </Provider>
    </html>
  )
}

export default RootLayout