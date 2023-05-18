import React from 'react'
import Item from './Item';

const Group = ({items}) => {
    return (
        <div>
            {items.map((item, index) => <Item content={item.name} path={item.path} key={index} />)}
        </div>
    )
}

export default Group