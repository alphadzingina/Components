import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail author="Dayo" />
            <CommentDetail author="Seun"/>
            <CommentDetail author="Fikayo"/>
            <CommentDetail author="Shalom"/>
        </div>    
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);