import React, {useState} from 'react';
import {DesignData} from './data/DesignData';
import Navbar from './assets/Navbar';
import Button from './assets/Button';
import Styles from "./Designs.module.css";

const Designs = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(DesignData.length);

  const handleNextClick = () => {
    const newPage = (currentPage +1) % totalPages;
    setCurrentPage(newPage);
  };
  const handlePrevClick = () => {
    const newPage = (currentPage - 1 + totalPages) % totalPages;
    setCurrentPage(newPage);
  };

  return (
    <div className={Styles.container}>
        <Navbar/>
        <div className={Styles.mainHeading}>Design Projects</div>
        <div className={Styles.segment}>
            <div className = {Styles.productWrapper}>
                <div className={Styles.thumbnailWrapper}>
                    <img  className={Styles.thumbnail} src={DesignData[currentPage].thumbnail_url} alt= "thumbnail"/>
                </div>
                <div className= {Styles.descriptionWrapper}>
                    <div className={Styles.title}>
                        {DesignData[currentPage].title}
                    </div>
                    <div className={Styles.description}>
                        {DesignData[currentPage].description}
                    </div>
                    <div>
                        <Button name = 'View Figma'/>
                    </div>
                </div>
            </div>
            <div className={Styles.paginationWrapper}>
                <button className={Styles.circlularButton}  onClick={handlePrevClick}> </button>
                <button className={Styles.circlularButton} onClick={handleNextClick}> </button>
            </div>
        </div>

    </div>
  )
}

export default Designs