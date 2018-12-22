import React from 'react';
import { connect } from 'react-redux';

const AppDisplay = ({questions}) => (
    <div>
        <h1>
            Isomorphic React
        </h1>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
};
// export default AppDisplay;
export default connect(mapStateToProps) (AppDisplay);