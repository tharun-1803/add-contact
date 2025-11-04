import "./index.css"

const ContactItem=(props)=>{
    const {contactDetails}=props
    const {name,mobileNo}=contactDetails
    return(
        <li className="table-row">
            <div className="table-cell name-column">
                <p>{name}</p>
            </div>
            <hr className="separator"/>
            <div className="table-cell">
                <p>{mobileNo}</p>
            </div>
        </li>
    )
}


export default ContactItem