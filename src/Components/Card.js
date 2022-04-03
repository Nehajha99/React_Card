import React from "react";


function card(props){
    return(
        <div className="card-container">
            <img className="card_img" src={props.img}/>
            <div className="content">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
    

        </div>
    )
}

export default card;













// import React from "react";


// function card(props){
//     return(
//         <div className="card">
//             <div className="card_body">
//                 <img className="card_img" src={props.img}/>
            
//                 <h1 className="card_title">{props.title}</h1>
//                 <p className="card_description">{props.description}</p>

//                 </div>
//                 <button className="card_btn">{props.button}</button>
            

//         </div>
//     )
// }

// export default card;