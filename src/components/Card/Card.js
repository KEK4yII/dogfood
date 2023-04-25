import Button from '../Button/Button'
import './style.css'
import {ReactComponent as Like} from './like.svg'

export default function Card(props){
    return (
        <div className="card">
            <div className='stickers'>
                <div className='left-side'>
                    <div className='discount' style = {{display: props.discount?'block':'none'}}>{props.discount+'%'}</div>
                </div>
                <div className='right-side'>
                    <Like className='like' style={{fill: props.like ? 'red' : 'black'}} onClick={()=>{props.productLike(props.product)}} />
                </div>
            </div>
            <img src={props.pictures} alt="card-picture"/>
            <div className='card-info'>
                <strike>{props.discount?props.price:''}</strike>
                <div className='price' style={{color: props.discount?'#F44336':'black'}}>{props.discount?props.price-props.price*props.discount/100:props.price}</div>
                <div className='wight'>{props.wight}</div>
                <div className='name'>{props.name}</div>
            </div>
            <Button text="В корзину" />
        </div>
    )
}