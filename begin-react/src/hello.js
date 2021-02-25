import React from 'react'

function Hello({style, name, isSpecial}) {
    return (
        <div style = {style}>
            {isSpecial ? <b>*</b> : null}
            안녕하십니까? 오랜만에 리액트로 뵙네여~ {name} 
        </div>
        )
}

Hello.defaultProps = {
    name: '디폴트 프롭스지롱!!!'
}

export default Hello