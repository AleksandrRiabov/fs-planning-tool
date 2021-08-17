import "./Saving.css";
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
const Saving = ({showBtn, closeModal, errorMessage}) => {
   return (
      <div className="saving">
         {showBtn ? 
         <div className="closeModal">
             <Box>
                <p>{errorMessage.length ? errorMessage :"Day Details Has Been Updated.." } </p>
                </Box>
           <Button onClick={closeModal} color="primary" variant="contained">Ok</Button>
          </div>:
          <p>Saving... Please Wait..</p> }    
      </div>
   )
}

export default Saving;