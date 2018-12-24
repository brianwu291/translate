import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class Field extends React.Component{
    static contextType = LanguageContext; //static means add a property to this class.

    render(){
        const nameText = this.context.language === 'chinese' ? '名稱' : 'Name'
        return(
            <div className="ui field">
                <label>{nameText}</label>
                <input />
            </div>
        );
    }
}

export default Field;