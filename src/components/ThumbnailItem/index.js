import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onClickImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const selectedImg = () => {
    onClickImage(id)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={selectedImg}>
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
