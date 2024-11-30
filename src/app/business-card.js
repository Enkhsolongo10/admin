export function BusinessCard ({person}) {
 
    return ( 
         <div className="card-container">
                <div className="business-card">
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

                            <div className="phone">
                                <img className="phone-logo" src="phone-logo.png" alt=""></img> 
                                <p>{person.phoneNumber}</p>
                            </div> 

                            <div className="email">
                                <img className="email-logo" src="email-logo.png" alt=""></img>
                                <p>{person.email}</p>
                            </div> 

                            <div className="location">
                                <img className="location-logo" src="location.png" alt=""></img>
                                <p>{person.address}</p> 
                            </div>
                        </div>
                    </div> 
                    <div className="card-rightside">
                        <img className="shape" src="shape.png" alt=""></img>

                        <div className="logo-container">
                        <img className="logo" src="lip.png" alt=""></img>
                        <h className="company-name">Kylie Cosmetics</h>
                        <h1 className="words">Tag Line Goes Here</h1>
                        <img className="QR" src="QR.png" alt=""></img>
                        </div>
                    </div>
                </div>
         </div>
    );
};