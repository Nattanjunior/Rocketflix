import Imgseta from '../assets/android-chrome-192x192.png'
import imgArrow from '../assets/favicon-32x32.png'
import './index.scss'
import { useState, useEffect} from 'react'
export function Index(){
    const [ApiData, setApiData] = useState([])
    const handleApi = async (e)=>{
        e.preventDefault()

        try{
            const response = await fetch('https://rocketflix-roan.vercel.app/');
            const data = await response.json()
                const randomMovie = data.data.results[
                    Math.floor(Math.random() * data.data.results.length)
                ]
                console.log(randomMovie)
            setApiData(randomMovie)
        }catch(err){
            console.error(err)
        }
        
    }
    useEffect(()=>{
        console.log('ApiData atualizada', ApiData)
      },[])
      console.log(ApiData)
    return(
        
        <>
        <main className='container-fluid'>
            <div className='Title'>
                <img src={Imgseta} alt="" />
                <h1>Não sabe oque assistir?</h1>
            </div>
            {ApiData.title && (
                <section id='visivel' key={ApiData.title}>
                <h1>{ApiData.title}</h1>
                <span className='date'>{ApiData.release_date}</span>
                <p className='over'>{ApiData.overview}</p>
                <span className='popularity'>Popularidade: {ApiData.popularity}</span>
                <span className='avaliation'>Avaliação: {ApiData.vote_average}</span>
                <img src={`https://image.tmdb.org/t/p/original${ApiData.backdrop_path}?api_key=6da2f5960d036177d9d4d6720c21301e`} alt="" />
            </section>
            )}
            
            <button className='btn btn-light' onClick={handleApi}><img src={imgArrow} alt="" /> Encontrar filme</button>
            <p className='frase'>Clique em "Encontrar filme" que traremos informações
            de algum filme para você assistir hoje.</p>
        </main>

        
        </>
    )
}