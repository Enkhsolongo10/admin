export function BusinessCard ({person}) {
 
    return (
        <div className="card-container">
            <div>
                <div className="businessCard">
                    <div className="card-leftside">
                        <div className="user">
                            <div className="names">
                            <h2 className="name1">{person.firstName}</h2>
                            <h2 className="name2">{person.lastName}</h2>
                            </div>
                            <p className="designer">Designer</p>
                        </div> 
                        <div className="paragraphs">
                        <p>{person.companyName}</p>
                        <p>{person.email}</p>
                        <p>{person.phoneNumber}</p>
                        <p>{person.address}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

// const userList = ["John", "Bella"]
// export fusernction App () {
//     let index = 0;
//     let user = userList[index];
//     retuserrn (
//         <div className="App">
//             <busertton onClick={() => {
//                 index++;
//             }} 
//             >Next</busertton>
//             <p>{user}</p>
//         </div>
//     );
// };
