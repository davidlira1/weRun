var Coordinates = (props) => {
    return(
        <div>
            {props.coords.map((coord, idx) => {
                return <div key={idx}>{`lat: ${coord.latitude}, long: ${coord.longitude}`}</div>
            })}
        </div>
    )
}

export default Coordinates;