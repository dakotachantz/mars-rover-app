import React from 'react';
import Lightbox from 'react-images';
 
const styles = {
    img:{cursor: 'pointer', margin: '1em auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1},
    container: {display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '80%', margin: '0 auto', minHeight: '25em'}
}

const ImageDisplay = (props) => {
    let imageArray = props.images.map(image => ({ src : image["img_src"], srcset : []}))
    let images = props.images.map((image, index) => {
        return (
            <span key={index} style={styles.img}>
                <img onClick={props.toggle} src={image["img_src"]} height="200px" width="200px" alt="mars"/>
            </span>
        )

    });

    return (
        <div>
           <div className="container" style={styles.container}>
            {images}
            </div>
            <Lightbox
                images={imageArray}
                currentImage={props.currentImageIndex}
                isOpen={props.open}
                onClickNext={props.incrementImageIndex}
                onClickPrev={props.decrementImageIndex}
                onClose={props.toggle}
            />
      </div>
    );
}

export default ImageDisplay;
