// dependencies
import { useContext } from 'react';
// context
import { DataContext } from '../context/DataContext'
// import controller
import GalleryItem from './GalleryItem';


function Gallery(props){
  const data = useContext(DataContext)

    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery