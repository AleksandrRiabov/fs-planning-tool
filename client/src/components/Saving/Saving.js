import "./Saving.css";
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
const Saving = ({showBtn, closeModal, message}) => {
   return (
      <div className="saving"> 
         <div className="closeModal">
             <Box>
                <p>{message } </p>
                </Box>
           {showBtn ? <Button onClick={closeModal} color="primary" variant="contained">Ok</Button> : null}
          </div>
      </div>
   )
}

export default Saving;