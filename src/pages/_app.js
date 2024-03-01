import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import layout from '@/component/layout';
export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component{...pageProps}/>);
  }
  return(
    <>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script> */}
   <layout>
   <Component {...pageProps} />
   </layout>
   </>
  );
}


