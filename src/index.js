import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Dayo" timeAgo="Yesterday at 3:30pm" post="The boy cried wolf" avatar={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Seun" timeAgo="Yesterday at 6:25pm" post="The dog has three legs" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Fikayo" timeAgo="Today at 8:42am" post="A snake is a reptile" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Shalom" timeAgo="Today at 11:55am" post="black is a color" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>    
    );
};  

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);