import React from 'react'
import styles from './HeroComponent.module.css'

interface HeroComponentProps {
    imageSrc: string;
    title: string;
    content: string;
    buttonText?: string;
    buttonLink?: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ imageSrc, title, content, buttonText, buttonLink }) => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroWrapper}>
                <div className={styles.bg}></div>
                <div className={styles.heroImage}>
                    <img src={imageSrc} alt="blend"/>
                </div>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.heroTitle}>{title}</h2>
                    <p className={styles.heroContent}>{content}</p>
                    {buttonText && 
                    <a href={buttonLink} 
                    className={styles.heroButton}>
                        {buttonText} <span className={styles.arrow}>→</span>
                        <div className={styles.underline}></div>
                    </a>}
                </div>
            </div>
        </div>
      
    );
  };
  
  export default HeroComponent;
