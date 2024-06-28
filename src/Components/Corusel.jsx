import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='caro-size'>
      <Carousel.Item>
        <img src="https://wallpapers.com/images/featured/money-heist-segtwbhffwy01w82.jpg" className='img'></img>
        <Carousel.Caption>
        <h3>Money Heist</h3>
        <p>An intense Spanish heist drama that follows a group of robbers who plan and execute intricate heists on the Royal Mint and Bank of Spain, led by the enigmatic Professor.</p>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
      <img src="https://wallpapergod.com/images/hd/stranger-things-3512X1976-wallpaper-tkimymewa98h4j4g.jpeg" className='img'></img>
      <Carousel.Caption>
        <h3>Stranger Things</h3>
        <p>A thrilling sci-fi horror series set in the 1980s. When a young boy goes missing, his friends uncover a series of supernatural events and government conspiracies in their small town.</p>
     </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
      <img src="https://static.hbo.com/game-of-thrones-1-1920x1080.jpg" className='img'></img>
      <Carousel.Caption>
        <h3>Game of Thrones</h3>
        <p>An epic fantasy series based on George R.R. Martin's novels. Follow the battle for the Iron Throne as noble families and mythical creatures clash in the Seven Kingdoms of Westeros.</p>
     </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;