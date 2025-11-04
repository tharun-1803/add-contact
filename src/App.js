import { Component } from "react"
import ContactItem from "./components/ContactItem"
import { v4 as uuidv4 } from 'uuid'
import "./App.css"

const initialContactList=[
	{
		id: uuidv4(),
		name:"Tharun",
		mobileNo:9999999999,
		isFavourite:false
	},
	{
		id: uuidv4(),
		name:"Chinnu",
		mobileNo:8888888888,
		isFavourite:false
	},
	{
		id: uuidv4(),
		name:"Sunny",
		mobileNo:7777777777,
		isFavourite:false
	},
	{
		id: uuidv4(),
		name:"Siva",
		mobileNo:6767676767,
		isFavourite:false
	}
]

class App extends Component {
  state={
    contactList:initialContactList,
    name:"",
    mobileNo:""
  }

  onAddContact=(event)=>{
    event.preventDefault()
    const {name,mobileNo}=this.state
    const newContact={
      id:uuidv4(),
      name:name,
      mobileNo:mobileNo,
      isFavourite:false
    }
    this.setState(prevState=>({
      contactList:[...prevState.contactList,newContact],
      name:"",
      mobileNo:""
    }))
  }

  onChangeName=(event)=>{
    this.setState({name:event.target.value})
  }

  onChangeMobileNumber=(event)=>{
    this.setState({mobileNo:event.target.value})
  }

	render() {
    const {name,mobileNo,contactList}=this.state
		return (
			<div className="app-container">
				<div className="container">
					<h1 className="heading">Contacts</h1>
					<form className="contact-form-container" onSubmit={this.onAddContact}>
						<input 
							type="text"
							className="input"
							placeholder="Name"
              value={name}
              onChange={this.onChangeName}
						/>
						<input 
							type="text"
							className="input"
							placeholder="Mobile Number"
              value={mobileNo}
              onChange={this.onChangeMobileNumber}
						/>
						<button type="submit" className="button">
							Add Contact
						</button>
					</form>
					<div className="contacts-table">
						<li className="table-header">
							<p className="table-header-cell name-column">Name</p>
							<hr className="separator"/>
							<p className="table-header-cell">Mobile Number</p>
						</li>
            {contactList.map(eachContact => (
              <ContactItem key={eachContact.id} contactDetails={eachContact}/>
            ))}
					</div>
				</div>
			</div>
		)
	}
}

export default App

