import React from 'react';

const progressBar = (props) => {
    const { completed } = props;

    const containerStyles = {
        height: 14,
        width: '60%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        // margin: 50
        margin:"40px auto",
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: "#1f3933",
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }

    return (
        <div style={containerStyles}>
        <div style={fillerStyles}>
          {/* <span style={labelStyles}>{`${completed}%`}</span> */}
        </div>
      </div>
    )
}

export default progressBar