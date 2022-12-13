import React from "react";

import "./categories.css"


function Categories() {
    
   const categories = ["Eductational","Entertainment", "Gaming", "Programming", "Bipasses", "Music", "Stories"]
    
    
    return(
        <div className="Categories">
            {categories? categories.map(cat => <button className={`catBut`}>{cat}</button>): ""
            
        } 
        </div>
    )
}


export default Categories
