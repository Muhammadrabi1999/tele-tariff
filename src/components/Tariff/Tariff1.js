import React from 'react'
import Tariff2 from './Tariff2';

export default function Tariff1() {
    const tariffs = [
        {
            id: 1, 
            tariffName: 'Везде онлайн', 
            price: 500, 
            imgUrl:'https://msk.tele2.ru/api/media/asset?mediaId=m1310027',  
            signMoney: '₽', 
            month: '/месяц',  
            internet: 40, 
            memory: 'ГБ', 
            text:'+безлимитные',
            socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 500, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 50, 
            sms_direction: 'SMS'
        },
        {
            id: 2, 
            tariffName: 'Мой онлайн', 
            price: 400, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 15, 
            memory: 'ГБ', 
            text:'+безлимитные',
            socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 500, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'
        },
        
        {
            id: 3, 
            tariffName: 'Мой онлайн+', 
            price: 700, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 30, 
            memory: 'ГБ',
            text:'+безлимитные', 
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 800, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'
        },
        {
            id: 4, 
            tariffName: 'Везде разговор', 
            price: 200, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 2, 
            memory: 'ГБ',
            text:'', 
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 200, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'
        },
        {
            id: 5, 
            tariffName: 'Мой Tele 2', 
            price: 7, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/день', 
            internet: 5, 
            memory: 'ГБ',
            text:'', 
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 0, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'},
        {
            id: 6, 
            tariffName: 'Безлимит', 
            price: 650, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: "безлимитный интернет", 
            memory: '',
            text:'', 
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 500, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 50, 
            sms_direction: 'SMS'
        },
        {
            id: 7, tariffName: 
            'Премиум', 
            price: 1500, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 50, 
            memory: 'ГБ',
            text:'',
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 2000, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 500, 
            sms_direction: 'SMS'
        },
        {
            id: 8, 
            tariffName:'Классический', 
            fee: 'Без абонентской платы',
            description:'Без абонентской платы', 
            price: 0, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 0, 
            memory: 'ГБ', 
            text:'',
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 0, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'
        },
        {
            id: 9, 
            tariffName: 'Интернет для устройтва',
            fee: 'Без абонентской платы', 
            description:'Без абонентской платы', 
            price: 0, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 0, 
            memory: 'ГБ', 
            text:'',
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 0, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 0, 
            sms_direction: 'SMS'
        },
        {
            id: 10, 
            tariffName: 'Интернет для вещей', 
            price: 100, 
            imgUrl: '', 
            signMoney: '₽', 
            month: '/месяц', 
            internet: 300, 
            memory: 'MБ', 
            text:'',
             socialIkons: [
                'https://msk.tele2.ru/api/media/asset?mediaId=m220005',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220001',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220003',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220006',
                'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',
            ],
            minuts: 30, 
            minuts_direction: 'мин.', 
            tariff_description: '+ безлимит на Tele2 России', 
            sms: 100, 
            sms_direction: 'SMS'
        },
        
    ];

    
    const maptariffs = tariffs.map(t => ({
        // id: t.id,
        // tariffName: t.tariffName,
        // price: t.price,
        // imgUrl: t.imgUrl,
        // signMoney: t.signMoney,
        // month: t.month,
        // internet: t.internet,
        // memory: t.memory,
        //text:'+безлимитные',
        // minuts: t.minuts,
        // minuts_direction: t.minuts_direction,
        // tariff_description: t.tariff_description,
        // sms: t.sms,
        // sms_direction: t.sms_direction,
        //socialIkons: t.socialIkons
        ...t, // заменяет все вышестоящие строчки
    }
));

    return (
        <div>
        {maptariffs.map(o => <Tariff2 post={o} />)}
    </div>
    )
}
