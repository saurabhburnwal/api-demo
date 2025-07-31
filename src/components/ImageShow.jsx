
function ImageShow({ image }) {
    return (
        <div>
            <img src={image.urls.small} className="rounded-lg shadow-md w-64 h-64 object-cover" />
        </div>
    )
}

export default ImageShow;
