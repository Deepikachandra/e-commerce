import './GridContainer.css'
import {gridImageUrl} from '../../Constants/Constants'
const GridContainer = () => {
    return(
        <div className='grid-container'>
            <div className="grid-box grid-box1">
               <img className='grid-img' alt="demo" src={gridImageUrl[0]} />
            </div>
            <div className="grid-box">
               <img className='grid-img' alt="demo" src={gridImageUrl[1]} />
            </div>
            <div className="grid-box">
              <img className='grid-img' alt="demo" src={gridImageUrl[2]} />
            </div>
            <div className="grid-box grid-box4">
              <img className='grid-img' alt="demo" src={gridImageUrl[3]} />
            </div>
        </div>
    )
}

export default GridContainer