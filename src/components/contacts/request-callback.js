import React from "react";

class RequestCallback extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.body.style.overflow = 'scroll';
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        const { handleClickRequest } = this.props;

        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            handleClickRequest();
        }
    }

    render() {
        return (
            <div className='request-callback__pop-up'>
                <h2>Закать звонок</h2>
                <form className='request-callback__container form-block' ref={this.setWrapperRef}>
                    <input type='text' required />
                    <input type='text' required />
                    <button className='ree-btn  ree-btn-grdt1 w-100'>Отправить <i className="fas fa-arrow-right fa-btn"></i></button>
                </form>
            </div>
        )
    }
}

export default RequestCallback;