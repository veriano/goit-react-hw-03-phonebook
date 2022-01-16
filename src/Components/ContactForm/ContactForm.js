import React, {Component} from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
    
          this.setState({
          [name]: value
        })
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        this.props.onSubmitHandler(this.state);
        this.reset();
      }

      reset = () => {
          this.setState({ name: '', number: ''})
      }
    
   
    render() {
        const { name } = this.state;
        const { number } = this.state;
    
        return (
            <form className={s.Form} onSubmit={this.handleSubmit}>
        <label>
         <span className={s.Label}> Name </span>
      <input className={s.Input}
      type="text" value={name} 
      onChange={this.handleChange}
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
    />
    </label> 
    <label>
      <span className={s.Label}>Number</span>
    <input className={s.Input}
  type="tel" value={ number }
  onChange={this.handleChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
/>
</label>
    <button className={s.Button} type='submit'><b>Add contact</b></button>
    </form>
        )
    }

}
export default ContactForm;