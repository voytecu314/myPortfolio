import './Home.css';

const Home = () => {
  return (
    <div id="Home-component" className="content-components" >
       <svg viewBox="0 0 1500 150">
            <text id="svg" x="50%" y="50%" textAnchor="middle" fill="none">“Nothing happens until something moves.”</text>
            <use xlinkHref="#svg" className="svg svg1"></use>
            <use xlinkHref="#svg" className="svg svg2"></use>
            <use xlinkHref="#svg" className="svg svg3"></use>
            <use xlinkHref="#svg" className="svg svg4"></use>
            <use xlinkHref="#svg" className="svg svg5"></use>
       </svg>
       <p id='quote-author'>- Albert Einstein</p>
       <section id="glitch-image" >
            <div className='c-glitch c-glitch__img'></div>
            <div className='c-glitch__img'></div>
            <div className='c-glitch__img'></div>
            <div className='c-glitch__img'></div>
            <div className='c-glitch__img'></div>
            <div className='c-glitch__img'></div>
       </section>
       
    </div>
  )
}

export default Home;