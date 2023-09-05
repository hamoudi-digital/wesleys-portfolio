import React from 'react';

function Copyright() {
    const year = new Date().getFullYear();
    return(
        <div className='section copyright' id='copyright'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='content text-center'>
                            <p>© {year} by Wesley Lewis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Copyright;