import React from 'react'


const TestContainer = (props) => {
    console.log('TestContainer');
    console.log(props.match.params.category); // undefined
    console.log(props.match.params); // categoty: "SpringBoot"    

    return (
        <div>
            Hello
        </div>
    );

}
export default TestContainer;
