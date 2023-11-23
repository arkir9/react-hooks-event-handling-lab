// Code Keypad Component Here

function Keypad (){
    function change(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={change}>
            
            </input>
        </div>
    )
}

export default Keypad;