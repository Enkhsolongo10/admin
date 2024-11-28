export function BusinessCard ({user}) {
    console.log(user);
    return (
        <div className="card-container">
            <div>
                <div className="businessCard">
                    
                    <div className="card-leftside">
                        <div className="user">
                            <div className="names">
                            <h2 className="name1">{user.firstName}</h2>
                            <h2 className="name2">{user.lastName}</h2>
                            </div>
                            <p className="designer">Designer</p>
                        </div> 
                        <div className="paragraphs">
                        <p>{user.companyName}</p>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                        <p>{user.address}</p>
                        </div>
                    </div> 

                    <div className="card-rightside">
                       
                    </div>

                </div>

            </div>

        </div>
        );
};