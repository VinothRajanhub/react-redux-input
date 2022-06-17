import React from "react";

import { ajax } from 'rxjs/ajax';

function ReduxObserve(){

    ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').subscribe({ next: (x) => alert(x.title)})


    return( 
        <div>

        </div>
    )
}

export default ReduxObserve;