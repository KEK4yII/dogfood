import './style.css'

export default function Search({setSearchQuery}){
    return (
        <div className='search'>
            <input type="text" onInput={(e)=>{setSearchQuery(e.target.value)}}></input>
        </div>
    )
}