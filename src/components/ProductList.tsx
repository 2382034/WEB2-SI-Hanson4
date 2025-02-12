import React from 'react'
import Product from './Product'

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performnce laptop for work and play',
            price: '$1999',
            imageUrl: 'https://cdn1-production-images-kly.akamaized.net/WLdkjDl_vBCRGDiGuRNeX0xTffg=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3018975/original/022373600_1578727570-asus-tuf-laptops01.jpg'
        },
        {
            name: 'Handphone',
            description: 'High-performnce Handphone for playing game mobile',
            price: '$899',
            imageUrl: 'https://asset.kompas.com/crops/oK4zSpyE6HdoYi4Ddl6u6SRjuWc=/0x12:1153x780/750x500/data/photo/2022/07/06/62c546bd95897.png'
        },
        {
            name: 'Tablet',
            description: 'High-performnce Tablet for work and play',
            price: '$699',
            imageUrl: 'https://asset.kompas.com/crops/0AXrWz6JoG2dGlLKoByBUI3KiqA=/67x0:1191x749/1200x800/data/photo/2024/09/09/66de35a8cb4a0.png'
        },
        {
            name: 'Notebook',
            description: 'High-performnce Notebook for work',
            price: '$799',
            imageUrl: 'https://migadget.id/wp-content/uploads/2020/09/Xiaomi-Mi-Notebook-Pro-15.6-inch-i5-8GB-RAM-256GB-SSD-GTX-1050-Max-Q-asj.jpg'
        },
        {
            name: 'Smartwatch',
            description: 'High-performnce Smartwatch for style',
            price: '$599',
            imageUrl: 'https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_watch_ultra_2_gps_49mm_cellular_black_titanium_case_with_black_ocean_band_01.jpg'
        }
    ]
    return (
    <>
        <h1>Product List</h1>
        {
            products.map((product, index) => {
                return (
                    <Product key={index} {...product} />
             )
            })
        }   
    </>
  )
}

export default ProductList
React