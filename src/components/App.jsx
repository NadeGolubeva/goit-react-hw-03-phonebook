import React, { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactsDatas } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { FindContact } from './FindContact/FindContact';


export class App extends Component {
  state = {
    contacts: [
       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
  }

  addContact = ({ name, number }) => {
  if (this.state.contacts.some(
    value => value.name.toLowerCase() === name.toLowerCase()
  ))
  {
    alert(`${name} is already in contacts`);
  } else {
  
    this.setState(prevState => {
      const list = [...prevState.contacts];
      list.push({
        id: nanoid(), 
        name: name,
        number: number,
      });
      return { contacts: list };
    })
    }
  }
  onDelete = (id) => { 
    const { contacts } = this.state;
    const actualList = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: actualList})
  }
  filter = () => { 
    const { contacts, filter } = this.state;
    const filterList = contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    return filterList;
  }

  onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({[name]: value})

  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 24,
          color: '#010101',
          paddingLeft: 30,
        }}
      >
        <h1>Phonebook</h1>
        <FormContact addContact={this.addContact}
          
        />
        <br />
            <h2>Contacts</h2>
        <FindContact
          onChangeFilter={this.onChangeInput}
        filter={this.state.filter}
        /> 
    
        <ContactsDatas contactsInfo={this.filter()} onDelete={this.onDelete} />
      
      </div>
    );
  }
};
