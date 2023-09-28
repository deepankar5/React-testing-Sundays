import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from "react-bootstrap/Tooltip"
import Button from 'react-bootstrap/Button';
import {useState} from "react"
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        hoverText
      </Popover.Body>
    </Popover>
  );
const TermsAndCondition = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    }
    const isButtonDisabled = !isChecked 

    return(<>
    <Row>
        <Col>
            <Form.Check aria-label="CheckBox" checked = {isChecked} onChange = {handleChecked}/>
        </Col>
        <Col>
            <p>I agree to
                <OverlayTrigger placement="right" overlay={popover}>
                        <span>Terms and Condition</span>
                </OverlayTrigger>
            </p>
        </Col>
    </Row>
    <Row>
        <Button disabled = {isButtonDisabled}>
            Summit
        </Button>
    </Row>
    </>
    )
}

export default TermsAndCondition