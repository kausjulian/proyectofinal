import './Userslist.css'

const Userslist = ({name, password}) => {
    
    return ( 
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">*****</li>
             </ul>
             <button className="btn"> <i class="bi bi-trash2"></i>
             </button>
        </>
     );
}
 
export default Userslist;