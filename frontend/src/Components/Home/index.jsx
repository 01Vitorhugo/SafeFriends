import './home.css'
import logo from '../../Photos/logo.png'
import Footer from '../Footer'
import profile from '../../Photos/img2.jpeg'
import photo1 from '../../Photos/img1.jpeg'
import photo3 from '../../Photos/img3.jpeg'
import photo4 from '../../Photos/img4.jpeg'
import photo5 from '../../Photos/img5.jpeg'
import photo6 from '../../Photos/img6.jpeg'

export default function Homepage() {

    return (
        <div className="home">

            <div className='home-boxLogo'>
                <img src={logo} alt='testing'/>
            </div>

            <div className='public'>

                <div className='box-public'>
                    <div className='box-info'>
                        <figure>
                            <img src={profile} alt="photoprofile" />
                        </figure>
                        <p>Vitor Hugo</p>
                    </div>

                    <div className='photo-public'>
                        <img src={photo1} alt="photopublic" />
                    </div>

                    <div className='subtitle'>
                        <p>Vivendo e aprendendo ✈️</p>

                    </div>

                </div>

            </div>

            {/*  */}

            <div className='public'>

                <div className='box-public'>
                    <div className='box-info'>
                        <figure>
                            <img src={profile} alt="photoprofile" />
                        </figure>
                        <p>Vitor Hugo</p>
                    </div>

                    <div className='photo-public'>
                        <img src={photo3} alt="photopublic" />
                    </div>

                    <div className='subtitle'>
                        <p>Só fé ✔︎</p>

                    </div>

                </div>

            </div>

            {/*  */}

            <div className='public'>

                <div className='box-public'>
                    <div className='box-info'>
                        <figure>
                            <img src={profile} alt="photoprofile" />
                        </figure>
                        <p>Vitor Hugo</p>
                    </div>

                    <div className='photo-public'>
                        <img src={photo4} alt="photopublic" />
                    </div>

                    <div className='subtitle'>
                        <p>🇧🇷</p>

                    </div>

                </div>

            </div>

            {/*  */}

            <div className='public'>

                <div className='box-public'>
                    <div className='box-info'>
                        <figure>
                            <img src={profile} alt="photoprofile" />
                        </figure>
                        <p>Vitor Hugo</p>
                    </div>

                    <div className='photo-public'>
                        <img src={photo5} alt="photopublic" />
                    </div>

                    <div className='subtitle'>
                        <p>📸📸</p>

                    </div>

                </div>

            </div>

            {/*  */}

            <div className='public' id='margin'>

                <div className='box-public'>
                    <div className='box-info'>
                        <figure>
                            <img src={profile} alt="photoprofile" />
                        </figure>
                        <p>Vitor Hugo</p>
                    </div>

                    <div className='photo-public'>
                        <img src={photo6} alt="photopublic" />
                    </div>

                    <div className='subtitle'>
                        <p>🗼</p>

                    </div>

                </div>

            </div>


            <Footer />
        </div>

    )
}