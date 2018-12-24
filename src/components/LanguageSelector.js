import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class LanguageSelector extends React.Component{
    static contextType = LanguageContext;

    render(){
        return(
            <div>
                切換語言:
                    <i className="flag taiwan" onClick={() => this.context.onLanguageChange('chinese')} />
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
            </div>
        );
    }
}

export default LanguageSelector;