export default function Cards(props) {
    return(
        <div className="card">
            <div>
                <img src = {`images/${props.item.coverimg}`} className="card-image" />
            </div>

            <div className="card-info">
                <div className="card-demographics">
                    <h3 className="card-location">{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl} className="map-location">View on Google maps</a>
                </div>    
                <div className="card-text">
                    <h1 className="card-header">{props.item.title}</h1>
                    <h3 className="card-date">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
                    <p className="card-contents">{props.item.description}</p>
                </div>     

            </div>
            
        </div>

    )
}