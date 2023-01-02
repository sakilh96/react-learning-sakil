import { Button, Alert } from 'react-bootstrap';
function Bootstrap(){
    return(
        <div>
            <h1>Learning Bootstrap</h1>
            <Button>Click</Button>

            {[
        'primary',
        'secondary',
        'success',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
        </div>
    )
}

export default Bootstrap;