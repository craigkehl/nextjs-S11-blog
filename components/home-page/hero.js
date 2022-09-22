import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image
                    src='/images/site/ProfileCraig.png'
                    alt="Author's image"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Craig</h1>
            <p>I blog about web development.</p>
        </section>
    );
}

export default Hero;
