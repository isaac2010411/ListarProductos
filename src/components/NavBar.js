import React from 'react';
import { BrowserRouter , Route  } from 'react-router-dom';



function Navbar(){
    return(
        <BrowserRouter>
            <div>
                <Route path='/app' component={App}/>
            </div>
        </BrowserRouter>
    )
}



export default Navbar