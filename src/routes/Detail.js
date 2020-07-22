import React from 'react';

class Detail extends React.Component{
    componentDidMount() {
        const {location} = this.props;
        console.log(location.state);
    }
    render() {
        
    }
}

export default Detail;