import Advertisement from './Advertisement'

function Main(props) {
    
    return (
        <ul className='advertisements-list'>
            {props.advertisements.map((advertisements) => {
                return (
                    <Advertisement
                        advertisements={advertisements}
                        key={advertisements.id}
                        removeAdvertisements={props.removeAdvertisements}
                    /> 
                )    
            })}
        </ul>
    )
}

export default Main