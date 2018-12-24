import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';
import ColorContext from '../contexts/ColorContext.js';

class Button extends React.Component{
    //static contextType = LanguageContext; //static means add a property to this class.
    
    renderButtonText(language){
        return language === 'chinese' ? '提交' : 'Submit';
    }

    renderButtonColor(color){
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderButtonText(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){
        //const buttonText = this.context === 'chinese' ? '提交' : 'Submit'
        return(
            <ColorContext.Consumer>
                { (color) => this.renderButtonColor(color) }
            </ColorContext.Consumer>
        );
    }
} 

export default Button;

/** 
 Anytime we wrapp something with Consumer, we must pass a function. 
 This function will take the data(from state) as argument. 
*/

/** 
Find more info about how to use static keyword→ 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static  
**/