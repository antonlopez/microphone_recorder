import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecordComment from './recordComment';
import './recordComment.css';



class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modalName: 'modal-style'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

        render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Record comment </Button>

                <div className="test">
                    <Modal className={this.state.modalName} isOpen={this.state.modal} toggle={this.toggle}   >
                        <ModalHeader toggle={this.toggle}>Record Audio Comments</ModalHeader>
                        <ModalBody >
                            <RecordComment/>

                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>


                </div>

            </div>
        );
    }
}

export default ModalExample;


Modal.propTypes = {
    isOpen:  PropTypes.bool,
    // boolean to control the state of the popover
    toggle:  PropTypes.func,
    // callback for toggling isOpen in the controlling component
    size: PropTypes.string,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['static'])
    ]),
    keyboard: PropTypes.bool,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
}