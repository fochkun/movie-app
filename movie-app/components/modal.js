import React from 'react'

class Modal extends React.Component {


    constructor(props) {
        super(props);
        this.closeButton=null;
        this.closeModal=this.closeModal.bind(this);
        this.submitModal=this.submitModal.bind(this);
    }

    closeModal() {
        this.closeButton.click();
    }

    submitModal() {
        this.closeModal();

    }
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Create movie
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create movie</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button ref={(elem)=> this.closeButton = elem} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                { this.props.hasSubmit &&
                                    <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

// const Modal = (props) => {

//     let closeButton=null;
//     const submitModal = () => {
//         alert('Submit modal');
//         closeButton.click();

//     }
//     return (
//         <React.Fragment>
//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Create movie
//             </button>
//             <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Create movie</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             {props.children}
//                         </div>
//                         <div className="modal-footer">
//                             <button ref={(elem)=> closeButton = elem} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             { props.hasSubmit &&
//                                 <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

export default Modal