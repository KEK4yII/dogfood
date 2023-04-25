import React, { useEffect, useState } from 'react';
import CardList from '../CardList/CardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import data from '../../assets/data.json';
import {api} from '../../api.js';
import {useDebounce} from '../hooks'

export default function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cards, setCards] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    function handeleProductLike(product) {
        const isLiked = product.likes.some(id => id===userInfo._id)
        api.changeLikeProductStatus(product._id, !isLiked).then((newCard)=>{
            const newCards = cards.map(c=>{
                return c._id === newCard._id ? newCard : c;
            })
            setCardsWithLike(newCards)
        })
    }

    function setCardsWithLike(cards) {
        const newCards = cards.map(card=>{
            const isLiked = card.likes.some(id => id===userInfo._id)
            card.isLiked = isLiked
            return card
        })
        setCards(newCards)
    }
    

    useEffect(()=>{
        api.getUserInfo().then(user=>{
            setUserInfo(user)
        })
    }, [])

    useEffect(()=>{
        api.getProducts().then(products=>{setCardsWithLike(products.products)})
    }, [userInfo])

    let search = useDebounce(searchQuery)

    useEffect(()=>{
        api.searchProducts(searchQuery)
        .then((newCards)=>{setCardsWithLike(newCards)});
    }, [search])

    return (
        <>
            <Header setSearchQuery={setSearchQuery} user={userInfo}/>
            <CardList cards={cards} onProductLike={handeleProductLike} user={userInfo} />
            <Footer />
        </>
    );
}