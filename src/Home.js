import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div className='Home'>

        <div className="home__container">
            <img className='home__image' src='https://m.media-amazon.com/images/I/61GGOdqTzYL._SX1500_.jpg' alt="" />
        </div>

        <div className="home__row">
            <Product 
            id='123'
            title='Thermaltake LCGS View 390 AIO Liquid Cooled CPU Gaming PC(AMD Ryzen 7 5800X 8-core, ToughRam DDR4 3600Mhz 16GB RGB Memory, NVIDIA GeForce RTX 3090, 1TB NVMe Gen4 M.2, Win 10 Home) V51B-X570-39V-LCS' 
            price={120} 
            image='https://m.media-amazon.com/images/I/91Y39x9PnPL._AC_SY200_.jpg' 
            rating={5} 
            />

            <Product
            id='123'
            title='Happy Meaningful Life: Live and Let Live Paperback'
            price={4.00}
            image='https://images-na.ssl-images-amazon.com/images/I/41MZLXkLHkL._SX331_BO1,204,203,200_.jpg'
            rating={3}
            />

        </div>

         <div className="home__row">
            <Product
            id='123'
            title='AmLactin Daily Moisturizing Body Lotion, Moisturizing Lotion for Dry Skin to Help Soften and Smooth, GREEN,WHITE, 14.1 Oz Pump Bottle (Packaging may vary)'
            price={15.19}
            image='https://m.media-amazon.com/images/I/61KyKl7s7JL._SX425_.jpg'
            rating={3}
            />

             <Product
            id='123'
            title='ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94'
            price={2034}
            image='https://m.media-amazon.com/images/I/71RK6+rx-xL._AC_SY300_SX300_.jpg'
            rating={3}
            />

             <Product
            id='123'
            title='NutraBlast Boric Acid Vaginal Suppositories - 100% Pure Made in USA - Boric Life Intimate Health Support (60 Count)'
            price={26.99}
            image='https://m.media-amazon.com/images/I/61tqbP5i74L._AC_SX569_.jpg'
            rating={3}
            />

        </div>

         <div className="home__row">
            <Product 
            id='123'
            title='GIGABYTE G34WQC A 34" 144Hz Ultra-Wide Curved Gaming Monitor, 3440 x 1440 VA 1500R Display, 1ms (MPRT) Response Time, 90% DCI-P3, VESA Display HDR400, FreeSync Premium, Black (G34WQC A-SA)' 
            price={340} 
            image='https://m.media-amazon.com/images/I/71hvdURMrWL._AC_SX679_.jpg' 
            rating={4} />
        </div>

    </div>
  )
}

export default Home