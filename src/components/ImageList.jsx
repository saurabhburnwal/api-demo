import ImageShow from './ImageShow'

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {renderedImages}
        </div>
    )
}
export default ImageList
