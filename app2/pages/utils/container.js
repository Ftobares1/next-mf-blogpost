import React from 'react';
import Link from 'next/link';

const hoc = (props) => {
    return(
        <div style={{'margin-top': '25%',border: 'ridge'}}>
        {props.children}
        <div style={{
        background: 'black',
        width: '100%',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>
        <Link href="/" >
            return
        </Link>
        </div>
      </div>
    )
}

export default hoc;