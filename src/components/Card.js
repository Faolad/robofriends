import React from 'react';

// const Card = (props) => {
//     return (
//         <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt="faolad" src={`https://robohash.org/${props.id}`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

const Card = ({name, email, id}) => {
    
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="faolad" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card