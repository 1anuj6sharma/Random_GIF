import React from 'react'
import {useState} from 'react' 

import Spinner from './Spinner';
import useGif from '../hooks/useGif';




const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  
//     const [gif,setGif] = useState('');
//     const [tag,setTag] = useState('car');


//     const [loading,setLoading] = useState('false');


//    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;




//     async function fetchData() {
//       setLoading(true);
//       const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//       //it also return a promise
//       const {data} = await axios.get(url);
//       const imageSource = data.data.images.downsized_large.url;
//       setGif(imageSource);
//       setLoading(false);
  
//     }

// useEffect(  ()  => {
//     fetchData();

// },[])


//     function clickHandler()
//     {
//   fetchData();
//     }

//     function changeHandler(event) {
//       setTag(event.target.value);
//     }

const [tag,setTag] = useState('car');

const {gif,loading,fetchData} = useGif(tag);








  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className="mt-[15px] text-2xl underline uppercase font-bold"> Random {tag} Gif</h1>

        {
          loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }



        <input className=' rounded-lg text-lg w-10/12 py-2 text-center  mb-[3px]'
        type="text"
        name="Tag"
     
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        />
        
        <button onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-[20px]">
        Generate</button>
    </div>
  )
}

export default Tag
