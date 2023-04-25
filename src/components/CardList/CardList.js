
import './style.css'
import Card from '../Card/Card'

export default function CardList(props){
    

    return (
        <div className='container'>
            <div className='card-list'>
                {props.cards.map((data)=>(
                    <Card key={data._id} name={data.name} price={data.price} discount={data.discount} wight={data.wight} pictures={data.pictures} product={data} productLike={props.onProductLike} user={props.user} like={data.isLiked} />
                ))}
            </div>
        </div>
    )
}