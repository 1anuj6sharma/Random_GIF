import React from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';






const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
//     const [gif,setGif] = useState('');
//     const [loading,setLoading] = useState('false');

    
      

//    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;




//     async function fetchData() {

//       setLoading(true);
//       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

     
//       //it also return a promise
//       const {data}=await axios.get(url);
//       const imageSource = data.data.images.downsized_large.url;
//       setGif(imageSource);
//       setLoading(false);

     
//     }

// useEffect(  ()  => {
//   fetchData();

// },[])


//     function clickHandler()
//     {
//   fetchData();
//     }



const {gif,loading,fetchData} = useGif();



  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }

        
        <button onClick={() => fetchData()}
        className="w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px]">
        Generate</button>
    </div>
  )
}

export default Random
